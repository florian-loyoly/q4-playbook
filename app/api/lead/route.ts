import { NextResponse } from "next/server";
import { syncLeadToHubSpot } from "@/lib/hubspot";

// Lead capture endpoint. Validates the payload, then syncs the lead to HubSpot
// (contact + company + association). This is the single, isolated server-side
// place for CRM integrations; a future Google Sheets append goes here too.

type Body = {
  email?: string;
  company?: string;
  website?: string;
  profile?: string;
  orders?: string;
  consent?: boolean;
  market?: string;
  source?: string;
  priority?: string;
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const URL_RE = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/;

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const email = (body.email || "").trim();
  const company = (body.company || "").trim();
  const website = (body.website || "").trim();
  const profile = (body.profile || "").trim();
  const orders = (body.orders || "").trim();

  if (
    !EMAIL_RE.test(email) ||
    !company ||
    !URL_RE.test(website) ||
    !profile ||
    (profile === "brand" && !orders) ||
    body.consent !== true
  ) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }

  // Sync to HubSpot. A CRM failure must not break the visitor's submission, so
  // we log and still return ok (the client unlocks the app on ok). We await it
  // because, on serverless, work after the response is not guaranteed to run.
  try {
    await syncLeadToHubSpot({ email, company, website, profile, orders, priority: (body.priority || "").trim() });
  } catch (err) {
    console.error("[lead] HubSpot sync failed:", err);
  }

  // TODO Google Sheets: append a row (email, company, website, profile, orders,
  // priority, market) once the Sheets integration is set up.

  return NextResponse.json({ ok: true });
}
