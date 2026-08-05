import { MARKETS_META, STEP_META, UI, CONTENT } from "./playbook-data";
import type { MarketId, Locale, Step, UIStrings, MarketMeta } from "./types";

export const MARKET_IDS: MarketId[] = MARKETS_META.map((m) => m.id);
export const DEFAULT_MARKET: MarketId = "uk";

export function isMarket(value: string): value is MarketId {
  return (MARKET_IDS as string[]).includes(value);
}

export function marketMeta(market: MarketId): MarketMeta {
  return MARKETS_META.find((m) => m.id === market) as MarketMeta;
}

export function localeOf(market: MarketId): Locale {
  return marketMeta(market).locale;
}

// Placeholder author (name + job title) until each partner sends a real one.
// Deterministic per (slug, partner index) so it stays stable across renders,
// and distinct within a dual stage. Overridden by partner.author when set.
const AUTHOR_NAMES = ["Lorem Ipsum", "Dolor Amet", "Consectetur Elit", "Adipiscing Sed", "Eiusmod Tempor", "Incididunt Labore", "Dolore Magna", "Aliqua Enim", "Veniam Quis"];
const AUTHOR_ROLES = ["Head of Lorem Ipsum", "VP Dolor Sit", "Consectetur Lead", "Director, Adipiscing Elit", "Sed Eiusmod Manager"];
function loremAuthor(slug: string, pi: number) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return {
    name: AUTHOR_NAMES[(h + pi * 3) % AUTHOR_NAMES.length],
    role: AUTHOR_ROLES[(h + pi * 2) % AUTHOR_ROLES.length],
  };
}

// Resolve all 9 stages for a market: shared meta + localized content + isFree.
// Every partner gets an author (real one if provided, else a lorem placeholder).
export function getSteps(market: MarketId): Step[] {
  const loc = localeOf(market);
  return STEP_META.map((meta) => {
    const c = CONTENT[loc][meta.slug];
    const partners = c.partners.map((p, pi) => ({ ...p, author: p.noAuthor ? undefined : p.author ?? loremAuthor(meta.slug, pi) }));
    return { ...meta, ...c, partners, isFree: meta.order === 1 };
  });
}

export function getStep(market: MarketId, slug: string): Step | undefined {
  return getSteps(market).find((s) => s.slug === slug);
}

export function getUI(market: MarketId): UIStrings {
  return UI[localeOf(market)];
}

// tiny interpolation helper: t("Stage {n} / 9", { n: 3 })
export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}
