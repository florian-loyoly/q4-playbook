"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { MarketId, Step, UIStrings } from "@/lib/types";
import { useGate } from "@/lib/gate";
import { StepView } from "./StepView";
import { GateWall } from "./GateWall";
import { Toast } from "./Toast";

// Decides between the step content and the gate wall based on gate state.
// On successful submission it unlocks, then redirects to the stage the user
// picked as their #1 Q4 priority. The unlocked toast is driven by the gate
// provider's justUnlocked flag, which survives the redirect (it lives above
// the route segment) and any remount.
export function StepScreen({ market, step, steps, ui }: { market: MarketId; step: Step; steps: Step[]; ui: UIStrings }) {
  const { isUnlocked, unlock, justUnlocked, clearJustUnlocked } = useGate();
  const router = useRouter();

  useEffect(() => {
    if (!justUnlocked) return;
    const t = setTimeout(() => clearJustUnlocked(), 3600);
    return () => clearTimeout(t);
  }, [justUnlocked, clearJustUnlocked]);

  const locked = !step.isFree && !isUnlocked;

  function handleSuccess(prioritySlug: string) {
    unlock();
    const target = prioritySlug || step.slug;
    if (target !== step.slug) {
      router.push(`/${market}/${target}`);
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }

  return (
    <>
      {locked ? (
        <GateWall market={market} steps={steps} ui={ui} onSuccess={handleSuccess} />
      ) : (
        <StepView market={market} step={step} steps={steps} ui={ui} />
      )}
      {justUnlocked ? <Toast message={ui.unlockedToast} /> : null}
    </>
  );
}
