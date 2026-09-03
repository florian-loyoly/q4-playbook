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
      <footer style={{ borderTop: `1px solid ${P.p200}`, marginTop: 8 }}>
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "26px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "14px 28px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo-loyoly.svg" alt="Loyoly" style={{ height: 20, width: "auto", display: "block", flexShrink: 0 }} />
            <span style={{ fontSize: 12.5, lineHeight: 1.45, color: P.p700 }}>{ui.footTagline}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <a
              href={ui.footUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 12.5, fontWeight: 500, color: P.blue, textDecoration: "none", whiteSpace: "nowrap" }}
            >
              {ui.footCta} →
            </a>
            <span style={{ fontSize: 12, color: P.p500, whiteSpace: "nowrap" }}>{ui.footRights}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
