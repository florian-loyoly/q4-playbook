import type { MarketId } from "./types";

export type LeadPayload = {
  email: string;
  company: string;
  job: string;
  website: string;
  consent: boolean;
  market: MarketId; // originating market (fr / uk / es)
  source: string; // e.g. "Q4 Playbook 2026"
};

export type LeadResult = { ok: boolean };

// Single entry point for lead submission. Today it posts to /api/lead, which
// simply validates and returns { ok: true } without sending anything anywhere.
// The real HubSpot call gets wired inside app/api/lead/route.ts (see // TODO HubSpot).
export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return { ok: false };
    return (await res.json()) as LeadResult;
  } catch {
    return { ok: false };
  }
}
