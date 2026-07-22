"use client";

import { useEffect, useState } from "react";
import type { MarketId, Step, UIStrings } from "@/lib/types";
import { useGate } from "@/lib/gate";
import { StepView } from "./StepView";
import { GateWall } from "./GateWall";
import { Toast } from "./Toast";

// Decides between the step content and the gate wall based on gate state,
// and shows the unlocked toast right after a successful submission.
export function StepScreen({ market, step, steps, ui }: { market: MarketId; step: Step; steps: Step[]; ui: UIStrings }) {
  const { isUnlocked, unlock } = useGate();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;
    const t = setTimeout(() => setShowToast(false), 3600);
    return () => clearTimeout(t);
  }, [showToast]);

  const locked = !step.isFree && !isUnlocked;

  return (
    <>
      {locked ? (
        <GateWall
          market={market}
          steps={steps}
          ui={ui}
          onSuccess={() => {
            unlock();
            setShowToast(true);
            window.scrollTo({ top: 0, behavior: "auto" });
          }}
        />
      ) : (
        <StepView market={market} step={step} steps={steps} ui={ui} />
      )}
      {showToast ? <Toast message={ui.unlockedToast} /> : null}
    </>
  );
}
