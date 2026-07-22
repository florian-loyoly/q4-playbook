"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MARKETS_META } from "@/lib/playbook-data";
import { marketMeta } from "@/lib/i18n";
import type { MarketId } from "@/lib/types";
import { P } from "@/lib/tokens";

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
          return (
            <Link
              key={m.id}
              href={href}
              aria-current={active ? "true" : undefined}
              title={m.id.toUpperCase()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 38,
                height: 30,
                borderRadius: 999,
                fontSize: 16,
                lineHeight: 1,
                textDecoration: "none",
                transition: "background .18s, box-shadow .18s, filter .18s",
                background: active ? "#fff" : "transparent",
                boxShadow: active ? "0 1px 2px rgba(0,0,0,.12)" : "none",
                filter: active ? "none" : "saturate(.55) opacity(.7)",
              }}
            >
              {m.flag}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
