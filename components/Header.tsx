import Link from "next/link";
import { MarketSwitcher } from "./MarketSwitcher";
import type { MarketId } from "@/lib/types";
import { P, tint } from "@/lib/tokens";

export function Header({ market }: { market: MarketId }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        height: 64,
        background: tint("#EEEAE0", 0.82),
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: `1px solid ${P.p200}`,
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          height: "100%",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <Link href={`/${market}`} style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-loyoly.svg" alt="Loyoly" style={{ height: 22, width: "auto", display: "block" }} />
          <span
            className="pb-header-tag"
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: P.p700,
              borderLeft: `1px solid ${P.p300}`,
              paddingLeft: 10,
              letterSpacing: ".04em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Q4 Playbook
          </span>
        </Link>
        <MarketSwitcher current={market} />
      </div>
    </header>
  );
}
