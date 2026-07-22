import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { isMarket, getUI, MARKET_IDS } from "@/lib/i18n";
import type { MarketId } from "@/lib/types";
import { P } from "@/lib/tokens";

export function generateStaticParams() {
  return MARKET_IDS.map((market) => ({ market }));
}

export default async function MarketLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ market: string }>;
}) {
  const { market } = await params;
  if (!isMarket(market)) notFound();

  const ui = getUI(market as MarketId);

  return (
    <>
      <Header market={market as MarketId} />
      <main>{children}</main>
      <footer style={{ borderTop: `1px solid ${P.p200}`, padding: "22px 20px", textAlign: "center" }}>
        <span style={{ fontSize: 12, color: P.p500 }}>{ui.footNote}</span>
      </footer>
    </>
  );
}
