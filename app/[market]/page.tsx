import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapView } from "@/components/MapView";
import { isMarket, getSteps, getUI, MARKET_IDS } from "@/lib/i18n";
import type { MarketId } from "@/lib/types";

export function generateStaticParams() {
  return MARKET_IDS.map((market) => ({ market }));
}

export async function generateMetadata({ params }: { params: Promise<{ market: string }> }): Promise<Metadata> {
  const { market } = await params;
  if (!isMarket(market)) return {};
  const ui = getUI(market as MarketId);
  return {
    title: `${ui.heroTitle} | Q4 Playbook`,
    description: ui.heroSub,
    alternates: {
      canonical: `/${market}`,
      languages: { en: "/uk", fr: "/fr", es: "/es" },
    },
  };
}

export default async function MarketMapPage({ params }: { params: Promise<{ market: string }> }) {
  const { market } = await params;
  if (!isMarket(market)) notFound();
  const m = market as MarketId;
  return <MapView market={m} steps={getSteps(m)} ui={getUI(m)} />;
}
