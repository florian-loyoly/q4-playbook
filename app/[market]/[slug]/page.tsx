import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StepScreen } from "@/components/StepScreen";
import { isMarket, getSteps, getStep, getUI, MARKET_IDS } from "@/lib/i18n";
import { STEP_META } from "@/lib/playbook-data";
import type { MarketId } from "@/lib/types";

export function generateStaticParams() {
  const params: { market: string; slug: string }[] = [];
  for (const market of MARKET_IDS) {
    for (const meta of STEP_META) params.push({ market, slug: meta.slug });
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ market: string; slug: string }> }): Promise<Metadata> {
  const { market, slug } = await params;
  if (!isMarket(market)) return {};
  const step = getStep(market as MarketId, slug);
  if (!step) return {};
  return {
    title: `${step.title} | Q4 Playbook`,
    description: step.teaser,
    alternates: {
      canonical: `/${market}/${slug}`,
      languages: { en: `/uk/${slug}`, fr: `/fr/${slug}`, es: `/es/${slug}` },
    },
  };
}

export default async function StepPage({ params }: { params: Promise<{ market: string; slug: string }> }) {
  const { market, slug } = await params;
  if (!isMarket(market)) notFound();
  const m = market as MarketId;
  const step = getStep(m, slug);
  if (!step) notFound();
  return <StepScreen market={m} step={step} steps={getSteps(m)} ui={getUI(m)} />;
}
