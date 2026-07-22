# The Ultimate Q4 Playbook 2026

Interactive Q4 e-commerce customer journey. Nine stages, each sponsored by a partner who shares Q4 tips (Black Friday, Cyber Week, holidays). Built with Next.js (App Router) + TypeScript + Framer Motion.

## Markets and routes

Three market versions, each a full experience. Market and language are coupled 1:1 (changing market swaps the whole payload, partners and UI language).

- `/uk` : UK market, English UI (default)
- `/fr` : French market, French UI
- `/es` : Spanish market, Spanish UI
- `/` and any generic entry redirect to `/uk`.
- Each stage has its own route, e.g. `/uk/acquisition-ads`. Stage slugs are stable across markets, so switching market keeps your position.

## Content

All copy is placeholder (lorem ipsum, partner names like "AdPeak"). It lives in one typed data file, separate from the components, so real content drops in without touching UI:

- `lib/playbook-data.ts` : `MARKETS_META`, `STEP_META`, `UI` (strings per language), `CONTENT` (per language and stage).
- `lib/types.ts` : the `Tip / Partner / KeyStat / Step / Market` shapes.

Stages 2 and 7 have two partners; the components handle 1 or 2 partners natively (partners is an array).

## Gating and the dev bypass

Stage 1 is free. The other stages are gated: one form (`components/LeadForm.tsx`) unlocks the whole journey for the session, shared across the three markets.

The gate is controlled by `NEXT_PUBLIC_GATE_ENABLED` (read in `lib/gate.tsx`):

- `false` : gate disabled, everything accessible, no wall, no locks (use this in local dev, set in `.env.local`).
- `true` or unset : gate active (default, production).

Copy `.env.example` to `.env.local` for local development.

## Lead capture (HubSpot wiring later)

Lead submission is stubbed. It is NOT connected to HubSpot yet.

- `lib/leads.ts` exports `submitLead(payload)` (the single entry point). It posts to `/api/lead`.
- `app/api/lead/route.ts` validates the payload and returns `{ ok: true }` without sending anything anywhere. The exact place for the real HubSpot call is marked with `// TODO HubSpot`.
- The payload already carries the 4 fields + the market + the consent flag, so the future HubSpot mapping is trivial.

## Local development

```bash
npm install
cp .env.example .env.local   # then set NEXT_PUBLIC_GATE_ENABLED=false for dev
npm run dev                  # http://localhost:3000
npm run build                # production build
```

Requires Node.js 18+.

## Deployment

Hosted on Vercel, connected to the GitHub repo. Vercel auto-detects Next.js. Set the environment variable `NEXT_PUBLIC_GATE_ENABLED=true` (or leave it unset) in the Vercel project so the gate is active in production. Each push to `main` redeploys.
