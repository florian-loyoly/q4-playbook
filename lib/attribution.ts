"use client";

// First-touch capture of the URL query string (everything after "?") for
// partner / UTM attribution. The partner shares a link like
//   https://.../uk/loyalty-engagement?partner=loyoly
// and we persist "partner=loyoly" (plus any UTMs they add) for the session, so
// it survives the app's client-side navigation and reaches the lead payload.

const ATTR_KEY = "q4-playbook-utm";
const MAX_LEN = 500;

// Call once on first app load. Stores the current query string only if it is
// non-empty and nothing has been captured yet this session (first touch wins),
// so later navigation to param-less routes never overwrites the partner tag.
export function captureAttribution(): void {
  try {
    if (sessionStorage.getItem(ATTR_KEY) !== null) return; // already captured this session
    const qs = window.location.search.replace(/^\?/, "").slice(0, MAX_LEN);
    if (qs) sessionStorage.setItem(ATTR_KEY, qs);
  } catch {
    /* sessionStorage unavailable (privacy mode) — attribution is best-effort */
  }
}

export function getAttribution(): string {
  try {
    return sessionStorage.getItem(ATTR_KEY) || "";
  } catch {
    return "";
  }
}
