"use client";

import type { MarketId, Step, UIStrings } from "@/lib/types";
import { P, tint } from "@/lib/tokens";
import { LeadForm } from "./LeadForm";

// Inline gate that replaces the remaining tips once the free preview ends.
// A couple of blurred skeleton tip rows hint at the hidden content, with the
// lead form (self-contained heading + fields) on top. Submitting unlocks the
// whole app for the session via useGate.
export function GateInline({
  market,
  step,
  steps,
  ui,
  onSuccess,
}: {
  market: MarketId;
  step: Step;
  steps: Step[];
  ui: UIStrings;
  onSuccess: (prioritySlug: string) => void;
}) {
  const accent = step.accent;
  const skeletonRow = (w: string) => (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
      <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 999, background: tint(accent, 0.18) }} />
      <div style={{ flex: 1 }}>
        <div style={{ height: 16, width: w, background: P.p200, borderRadius: 3, margin: "8px 0 12px" }} />
        <div style={{ height: 10, width: "96%", background: P.p100, borderRadius: 3, marginBottom: 7 }} />
        <div style={{ height: 10, width: "88%", background: P.p100, borderRadius: 3, marginBottom: 7 }} />
        <div style={{ height: 10, width: "60%", background: P.p100, borderRadius: 3 }} />
      </div>
    </div>
  );

  return (
    <div style={{ position: "relative", marginTop: 30, paddingTop: 30, borderTop: `1px solid ${P.p200}`, overflow: "hidden", borderRadius: 4 }}>
      {/* blurred skeletons hinting at the locked tips */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 30,
          zIndex: 0,
          display: "grid",
          gap: 30,
          filter: "blur(6px)",
          opacity: 0.5,
          pointerEvents: "none",
          WebkitMaskImage: "linear-gradient(#000, transparent 82%)",
          maskImage: "linear-gradient(#000, transparent 82%)",
        }}
      >
        {skeletonRow("62%")}
        {skeletonRow("48%")}
      </div>

      {/* lead form on top */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center", padding: "8px 0 6px" }}>
        <LeadForm market={market} steps={steps} ui={ui} onSuccess={onSuccess} />
      </div>
    </div>
  );
}
