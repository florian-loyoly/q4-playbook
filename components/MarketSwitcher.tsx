"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MARKETS_META } from "@/lib/playbook-data";
import { marketMeta } from "@/lib/i18n";
import type { MarketId } from "@/lib/types";
import { BODY, P } from "@/lib/tokens";

// Accessible label per target market, written in that market's own language.
const SWITCH_LABEL: Record<MarketId, string> = {
  uk: "Switch to English",
  fr: "Passer en français",
  es: "Cambiar a español",
};

// Real links to /{market} (+ same slug when on a step), so switching keeps the
// reader's position and the URL changes (indexable, shareable, hreflang-friendly).
export function MarketSwitcher({ current }: { current: MarketId }) {
  const pathname = usePathname();
  // pathname is like /uk or /uk/acquisition-ads -> keep the tail after the market segment
  const parts = pathname.split("/").filter(Boolean);
  const slug = parts.length > 1 ? parts.slice(1).join("/") : "";
  const label = marketMeta(current).label;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ fontSize: 12, fontWeight: 500, color: P.p700, letterSpacing: ".02em" }}>{label}</span>
      <div
        role="group"
        aria-label={label}
        style={{ display: "inline-flex", gap: 2, background: P.p100, border: `1px solid ${P.p200}`, borderRadius: 999, padding: 3 }}
      >
        {MARKETS_META.map((m) => {
          const active = m.id === current;
          const href = slug ? `/${m.id}/${slug}` : `/${m.id}`;
          const code = m.locale.toUpperCase(); // EN / FR / ES
          return (
            <Link
              key={m.id}
              href={href}
              aria-current={active ? "true" : undefined}
              aria-label={SWITCH_LABEL[m.id]}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                minWidth: 44,
                height: 44,
                padding: "0 12px",
                borderRadius: 999,
                lineHeight: 1,
                textDecoration: "none",
                transition: "background .18s, box-shadow .18s, filter .18s",
                background: active ? "#fff" : "transparent",
                boxShadow: active ? "0 1px 2px rgba(0,0,0,.12)" : "none",
              }}
            >
              <span aria-hidden="true" style={{ fontSize: 16, lineHeight: 1, filter: active ? "none" : "saturate(.55) opacity(.7)" }}>
                {m.flag}
              </span>
              <span
                style={{
                  fontFamily: BODY,
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: ".03em",
                  color: active ? P.p950 : P.p700,
                }}
              >
                {code}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
