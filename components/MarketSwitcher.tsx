"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MARKETS_META, UI } from "@/lib/playbook-data";
import { marketMeta, localeOf } from "@/lib/i18n";
import type { MarketId } from "@/lib/types";
import { BODY, P } from "@/lib/tokens";
import { MarketSwitchNotice } from "./MarketSwitchNotice";

// Accessible label per target market, written in that market's own language.
const SWITCH_LABEL: Record<MarketId, string> = {
  uk: "Switch to English",
  fr: "Passer en français",
  es: "Cambiar a español",
};

// Human market name for the switch notice (proper nouns, market = language).
const MARKET_NAME: Record<MarketId, string> = {
  uk: "UK / English",
  fr: "France / Français",
  es: "España / Español",
};

const SWITCH_DELAY = 1300;

// Real links to /{market} (+ same slug when on a step), so switching keeps the
// reader's position and the URL changes (indexable, shareable, hreflang-friendly).
// Switching shows a short interstitial first, warning that partners and tips are
// localized per market, then navigates.
export function MarketSwitcher({ current }: { current: MarketId }) {
  const pathname = usePathname();
  const router = useRouter();
  // pathname is like /uk or /uk/acquisition-ads -> keep the tail after the market segment
  const parts = pathname.split("/").filter(Boolean);
  const slug = parts.length > 1 ? parts.slice(1).join("/") : "";
  const label = marketMeta(current).label;
  const ui = UI[localeOf(current)];

  const [pending, setPending] = useState<{ href: string; id: MarketId } | null>(null);

  useEffect(() => {
    if (!pending) return;
    const t = setTimeout(() => router.push(pending.href), SWITCH_DELAY);
    return () => clearTimeout(t);
  }, [pending, router]);

  // Once navigation lands on the new route, dismiss the interstitial.
  useEffect(() => {
    setPending(null);
  }, [pathname]);

  return (
    <>
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
              onClick={(e) => {
                if (active || pending) {
                  e.preventDefault();
                  return;
                }
                e.preventDefault();
                setPending({ href, id: m.id });
              }}
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
    {pending ? <MarketSwitchNotice ui={ui} marketName={MARKET_NAME[pending.id]} flag={marketMeta(pending.id).flag} /> : null}
    </>
  );
}
