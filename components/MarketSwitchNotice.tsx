"use client";

import { DISP, BODY, P } from "@/lib/tokens";
import { fill } from "@/lib/i18n";
import type { UIStrings } from "@/lib/types";

// Short full-screen interstitial shown when the reader switches market, before
// navigating. Mirrors RedirectNotice: a heading, a message, and a loader while
// the new market's localized playbook loads. `flag` heads the card.
export function MarketSwitchNotice({ ui, marketName, flag }: { ui: UIStrings; marketName: string; flag: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        background: "rgba(238,234,224,.82)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        animation: "pbFadeUp .3s ease both",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 400,
          background: "#fff",
          border: `1px solid ${P.p200}`,
          borderRadius: 6,
          boxShadow: "0 20px 50px rgba(43,37,31,.16), 0 4px 12px rgba(43,37,31,.08)",
          padding: "32px 28px",
          textAlign: "center",
        }}
      >
        <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 46, height: 46, borderRadius: 999, background: P.p100, border: `1px solid ${P.p200}`, marginBottom: 16, fontSize: 22, lineHeight: 1 }}>
          <span aria-hidden="true">{flag}</span>
        </div>
        <h2 style={{ fontFamily: DISP, fontWeight: 600, fontSize: 20, letterSpacing: "-.01em", color: P.p950, margin: "0 0 8px" }}>{ui.marketSwitchHeading}</h2>
        <p style={{ fontFamily: BODY, fontSize: 14, lineHeight: 1.5, color: P.p700, margin: "0 0 20px" }}>{fill(ui.marketSwitchMessage, { market: marketName })}</p>
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: 22,
            height: 22,
            border: `2px solid ${P.p200}`,
            borderTopColor: P.p700,
            borderRadius: 999,
            animation: "pbSpin .7s linear infinite",
          }}
        />
      </div>
    </div>
  );
}
