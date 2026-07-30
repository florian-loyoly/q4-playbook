"use client";

import { useState } from "react";
import { DISP, BODY, P, HEADER_OFFSET } from "@/lib/tokens";
import { Icon } from "./Icon";

export type NavItem = { id: string; label: string; partnerName?: string };

// Thin sticky progress bar (desktop). Reflects position through the chapter's tips.
export function TipProgressBar({ active, total, accent }: { active: number; total: number; accent: string }) {
  const pct = total > 0 ? Math.round(((active + 1) / total) * 100) : 0;
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={Math.min(active + 1, total)}
      style={{ position: "sticky", top: 64, zIndex: 15, height: 3, background: P.p200, margin: "0 0 10px", borderRadius: 999 }}
    >
      <div style={{ height: "100%", width: `${pct}%`, background: accent, borderRadius: 999, transition: "width .35s cubic-bezier(.2,.8,.2,1)" }} />
    </div>
  );
}

// Desktop sticky rail: numbered tip list with scroll-spy highlight + counter.
export function TipRail({ items, active, accent, jumpTo, headingLabel }: { items: NavItem[]; active: number; accent: string; jumpTo: (id: string) => void; headingLabel: string }) {
  let lastPartner = "";
  return (
    <nav aria-label={headingLabel} style={{ position: "sticky", top: HEADER_OFFSET + 8, alignSelf: "start" }}>
      <div style={{ fontFamily: BODY, fontSize: 11, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: P.p700, marginBottom: 6 }}>{headingLabel}</div>
      <div style={{ fontFamily: DISP, fontWeight: 700, fontSize: 13, color: accent, marginBottom: 12 }}>
        {Math.min(active + 1, items.length)} / {items.length}
      </div>
      <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {items.map((it, i) => {
          const on = i === active;
          const showGroup = !!it.partnerName && it.partnerName !== lastPartner;
          if (it.partnerName) lastPartner = it.partnerName;
          return (
            <li key={it.id}>
              {showGroup ? (
                <div style={{ fontFamily: BODY, fontSize: 10, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: P.p500, margin: "12px 0 4px 12px" }}>{it.partnerName}</div>
              ) : null}
              <a
                href={`#${it.id}`}
                aria-current={on ? "true" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  jumpTo(it.id);
                }}
                style={{ display: "flex", gap: 10, alignItems: "baseline", padding: "7px 10px", borderLeft: `2px solid ${on ? accent : P.p200}`, color: on ? accent : P.p700, fontFamily: BODY, fontSize: 13, fontWeight: on ? 600 : 500, textDecoration: "none", lineHeight: 1.35 }}
              >
                <span style={{ fontFamily: DISP, fontWeight: 700, fontSize: 11, minWidth: 16, color: on ? accent : P.p400 }}>{String(i + 1).padStart(2, "0")}</span>
                <span>{it.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// Mobile sticky indicator: thin progress line + "X / N · current title" that
// expands the tip list to jump. Closes on selection.
export function TipMobileNav({ items, active, accent, jumpTo, headingLabel }: { items: NavItem[]; active: number; accent: string; jumpTo: (id: string) => void; headingLabel: string }) {
  const [open, setOpen] = useState(false);
  const cur = items[active];
  const pct = items.length > 0 ? Math.round(((active + 1) / items.length) * 100) : 0;
  return (
    <div style={{ position: "sticky", top: 64, zIndex: 16, marginBottom: 16 }}>
      <div role="progressbar" aria-valuemin={0} aria-valuemax={items.length} aria-valuenow={Math.min(active + 1, items.length)} style={{ height: 3, background: P.p200, borderRadius: 999, marginBottom: 8 }}>
        <div style={{ height: "100%", width: `${pct}%`, background: accent, borderRadius: 999, transition: "width .35s cubic-bezier(.2,.8,.2,1)" }} />
      </div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={headingLabel}
        style={{ width: "100%", minHeight: 44, display: "flex", alignItems: "center", gap: 10, background: "#fff", border: `1px solid ${P.p200}`, borderRadius: 8, padding: "0 14px", cursor: "pointer" }}
      >
        <span style={{ fontFamily: DISP, fontWeight: 700, color: accent, fontSize: 14 }}>
          {Math.min(active + 1, items.length)} / {items.length}
        </span>
        <span style={{ color: P.p300 }}>·</span>
        <span style={{ flex: 1, minWidth: 0, textAlign: "left", color: P.p900, fontFamily: BODY, fontSize: 14, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{cur?.label}</span>
        <Icon name="chevD" color={P.p700} size={16} />
      </button>
      {open ? (
        <div style={{ marginTop: 6, background: "#fff", border: `1px solid ${P.p200}`, borderRadius: 8, overflow: "hidden", boxShadow: "0 12px 30px rgba(43,37,31,.14)" }}>
          {items.map((it, i) => {
            const on = i === active;
            return (
              <a
                key={it.id}
                href={`#${it.id}`}
                aria-current={on ? "true" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  jumpTo(it.id);
                  setOpen(false);
                }}
                style={{ display: "flex", gap: 10, alignItems: "center", minHeight: 44, padding: "0 14px", borderTop: i > 0 ? `1px solid ${P.p100}` : "none", color: on ? accent : P.p900, fontFamily: BODY, fontSize: 14, fontWeight: on ? 600 : 500, textDecoration: "none" }}
              >
                <span style={{ fontFamily: DISP, fontWeight: 700, fontSize: 12, color: accent, minWidth: 18 }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{it.label}</span>
              </a>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
