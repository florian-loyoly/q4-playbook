"use client";

import type { MarketId, Step, UIStrings } from "@/lib/types";
import { P } from "@/lib/tokens";
import { Button } from "./Button";
import { LeadForm } from "./LeadForm";

// Inline blurred wall: locked stage previews behind, form card on top. Not a modal.
export function GateWall({ market, steps, ui, onSuccess }: { market: MarketId; steps: Step[]; ui: UIStrings; onSuccess: () => void }) {
  const preview = (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        padding: "20px 20px 0",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
        gap: 20,
        filter: "blur(7px)",
        opacity: 0.5,
        pointerEvents: "none",
        WebkitMaskImage: "linear-gradient(#000,transparent 80%)",
        maskImage: "linear-gradient(#000,transparent 80%)",
      }}
    >
      {steps.slice(1).map((s) => (
        <div key={s.order} style={{ background: P.raised, border: `1px solid ${P.p200}`, borderTop: `3px solid ${s.accent}`, borderRadius: 2, padding: 16, height: 150 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: s.accent }} />
          <div style={{ height: 12, width: "70%", background: P.p200, borderRadius: 2, margin: "14px 0 8px" }} />
          <div style={{ height: 10, width: "90%", background: P.p100, borderRadius: 2, marginBottom: 6 }} />
          <div style={{ height: 10, width: "55%", background: P.p100, borderRadius: 2 }} />
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "20px 20px 70px" }}>
      <div style={{ marginBottom: 18 }}>
        <Button label={ui.backToMap} variant="ghost" iconL="arrowL" href={`/${market}`} style={{ paddingLeft: 8 }} />
      </div>
      <div style={{ position: "relative", minHeight: 560, borderRadius: 4, overflow: "hidden", border: `1px solid ${P.p200}`, background: "#EEEAE0" }}>
        {preview}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg, rgba(238,234,224,.55), rgba(238,234,224,.9))" }} />
        <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "center", padding: "44px 18px" }}>
          <LeadForm market={market} ui={ui} onSuccess={onSuccess} />
        </div>
      </div>
    </div>
  );
}
