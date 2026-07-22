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

// Resolve all 9 stages for a market: shared meta + localized content + isFree.
export function getSteps(market: MarketId): Step[] {
  const loc = localeOf(market);
  return STEP_META.map((meta) => {
    const c = CONTENT[loc][meta.slug];
    return { ...meta, ...c, isFree: meta.order === 1 };
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
