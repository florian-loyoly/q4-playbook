import { NextResponse } from "next/server";

// Lead capture endpoint. For now it only validates the payload and returns ok.
// No data is sent anywhere yet. This is the single, isolated place where the
// real HubSpot Forms Submission API call will be added later.

type Body = {
  email?: string;
  company?: string;
  job?: string;
  website?: string;
  consent?: boolean;
  market?: string;
  source?: string;
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
  const job = (body.job || "").trim();
  const website = (body.website || "").trim();

  if (
    !EMAIL_RE.test(email) ||
    !company ||
    !job ||
    !URL_RE.test(website) ||
    body.consent !== true
  ) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }

  // Simulate a short network round-trip so the UI can show its loading state.
  await new Promise((r) => setTimeout(r, 400));

  // TODO HubSpot: POST the validated lead to the HubSpot Forms Submission API here
  // (portal ID + form GUID, or a private app token). Map email/company/job/website
  // to HubSpot properties, add a source property ("Q4 Playbook 2026"), the market
  // of origin (fr/uk/es), and membership in the shared list. The payload above
  // already carries everything needed for a trivial mapping.

  return NextResponse.json({ ok: true });
}
