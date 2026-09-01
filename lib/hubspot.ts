// Server-only HubSpot integration for lead capture.
// Imported exclusively by app/api/lead/route.ts — never from client code.
// Reads the Private App token from HUBSPOT_PRIVATE_APP_TOKEN (server env var).
//
// Flow, all synchronous and deterministic. The Company is handled FIRST, on
// purpose: many portals have "automatically create & associate companies"
// enabled, which auto-creates a company from the contact's email domain the
// moment the contact is created. By creating/finding our company (keyed on the
// typed Website domain) BEFORE the contact, HubSpot's domain dedupe links the
// new contact to our existing company instead of spawning a bare duplicate.
//   1. Find-or-create the Company by the domain derived from the Website URL.
//   2. Upsert the Contact by email (create-or-update in one call).
//   3. Associate Contact <-> Company (default/primary; idempotent).

const BASE = "https://api.hubapi.com";

// Static HubSpot list every captured lead is added to (membership add only
// works on MANUAL/static lists; dynamic lists manage their own membership).
const LEAD_LIST_ID = "3238";

export type LeadInput = {
  email: string;
  company: string;
  website: string;
  profile: string; // form value: brand | agency | saas | media | other
  orders: string; // form value (brands only), else ""
  priority: string; // app step slug (brands only), else ""
};

// Form value -> HubSpot company `type_dentreprise` enum.
const TYPE_DENTREPRISE: Record<string, string> = {
  brand: "brand",
  agency: "agency",
  saas: "tech_solution",
  media: "press_media",
  other: "other_type",
};

// Form value -> HubSpot company `average_number_orders_per_month` enum
// (HubSpot uses spaced dashes and a spelled-out "not an e-merchant").
const ORDERS: Record<string, string> = {
  "0-500": "0 - 500",
  "500-1500": "500 - 1500",
  "1500-2500": "1500 - 2500",
  "2500-5000": "2500 - 5000",
  "5000-7000": "5000 - 7000",
  "7000-12000": "7000 - 12000",
  "12000+": "12000+",
  not_ecom: "I am not an e-merchant",
};

// App step slug (hyphens) -> HubSpot contact `q4_priority` enum (underscores).
const Q4_PRIORITY: Record<string, string> = {
  "acquisition-ads": "acquisition_ads",
  "crm-activation": "crm_activation_nurturing",
  "onsite-experience": "onsite_experience_merchandising",
  "payment-checkout": "payment_checkout",
  "logistics-delivery": "logistics_delivery",
  "customer-support": "customer_support",
  "crm-retention": "crm_retention_repurchase",
  "loyalty-engagement": "loyalty_engagement",
  "returns-after-sales": "returns_after-sales",
};

// Reduce a Website URL to a bare registrable domain used as the company key.
function domainFromWebsite(website: string): string {
  return website
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split("/")[0]
    .split("?")[0]
    .split("#")[0];
}

async function hs(token: string, path: string, init: RequestInit): Promise<any> {
  const res = await fetch(BASE + path, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`HubSpot ${init.method || "GET"} ${path} -> ${res.status}: ${text.slice(0, 300)}`);
  }
  return text ? JSON.parse(text) : null;
}

// Create-or-update the contact keyed on email; returns the contact id.
async function upsertContact(token: string, lead: LeadInput): Promise<string> {
  const properties: Record<string, string> = {
    email: lead.email,
    company: lead.company,
    website: lead.website,
  };
  const q4 = Q4_PRIORITY[lead.priority];
  if (q4) properties.q4_priority = q4;
  if (lead.profile === "brand") {
    // Contact property is `average_number_of_orders_per_month` (note the `of_`),
    // distinct from the company's `average_number_orders_per_month`.
    const orders = ORDERS[lead.orders];
    if (orders) properties.average_number_of_orders_per_month = orders;
  }

  const json = await hs(token, "/crm/v3/objects/contacts/batch/upsert", {
    method: "POST",
    body: JSON.stringify({ inputs: [{ idProperty: "email", id: lead.email, properties }] }),
  });
  const id = json?.results?.[0]?.id;
  if (!id) throw new Error("HubSpot contact upsert returned no id");
  return id;
}

async function findCompanyByDomain(token: string, domain: string): Promise<string | null> {
  const json = await hs(token, "/crm/v3/objects/companies/search", {
    method: "POST",
    body: JSON.stringify({
      filterGroups: [{ filters: [{ propertyName: "domain", operator: "EQ", value: domain }] }],
      properties: ["domain"],
      limit: 1,
    }),
  });
  return json?.results?.[0]?.id ?? null;
}

// Find the company by domain and update it, or create it; returns the company id.
async function upsertCompany(token: string, lead: LeadInput, domain: string): Promise<string> {
  const properties: Record<string, string> = {
    name: lead.company,
    domain,
    website: lead.website,
  };
  const type = TYPE_DENTREPRISE[lead.profile];
  if (type) properties.type_dentreprise = type;
  if (lead.profile === "brand") {
    const orders = ORDERS[lead.orders];
    if (orders) properties.average_number_orders_per_month = orders;
  }

  const existing = await findCompanyByDomain(token, domain);
  if (existing) {
    await hs(token, `/crm/v3/objects/companies/${existing}`, { method: "PATCH", body: JSON.stringify({ properties }) });
    return existing;
  }
  const json = await hs(token, "/crm/v3/objects/companies", { method: "POST", body: JSON.stringify({ properties }) });
  if (!json?.id) throw new Error("HubSpot company create returned no id");
  return json.id;
}

// Default (primary) contact <-> company association.
async function associate(token: string, contactId: string, companyId: string): Promise<void> {
  await hs(token, `/crm/v4/objects/contacts/${contactId}/associations/default/companies/${companyId}`, { method: "PUT" });
}

// Add the contact to a static list. Only works on MANUAL lists; the endpoint
// returns the record id under recordsIdsAdded (or recordIdsDidNotExist).
async function addContactToList(token: string, contactId: string, listId: string): Promise<void> {
  await hs(token, `/crm/v3/lists/${listId}/memberships/add`, { method: "PUT", body: JSON.stringify([contactId]) });
}

// Entry point. Throws on any HubSpot error so the caller can log it; the caller
// is responsible for not letting a CRM failure break the user's submission.
export async function syncLeadToHubSpot(lead: LeadInput): Promise<void> {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!token) {
    console.warn("[lead] HUBSPOT_PRIVATE_APP_TOKEN not set — skipping HubSpot sync");
    return;
  }
  const domain = domainFromWebsite(lead.website);
  const companyId = await upsertCompany(token, lead, domain);
  const contactId = await upsertContact(token, lead);
  await associate(token, contactId, companyId);

  // Independent last step: a list failure (wrong scope / non-static list) must
  // not undo the contact/company sync that already succeeded above.
  try {
    await addContactToList(token, contactId, LEAD_LIST_ID);
  } catch (err) {
    console.error("[lead] HubSpot list add failed:", err);
  }
}
