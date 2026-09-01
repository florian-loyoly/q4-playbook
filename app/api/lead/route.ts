import { NextResponse } from "next/server";

// Lead capture endpoint. For now it only validates the payload and returns ok.
// No data is sent anywhere yet. This is the single, isolated place where the
// real HubSpot Forms Submission API call will be added later.

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

  // Simulate a short network round-trip so the UI can show its loading state.
  await new Promise((r) => setTimeout(r, 400));

  // TODO HubSpot + Google Sheets: upsert the contact (email, company, website,
  // profile / "I work for", monthly orders when profile === "brand", Q4 priority,
  // market) and append a row to the sheet. The validated fields above carry
  // everything needed. Secrets read from server-only env vars.

  return NextResponse.json({ ok: true });
}
