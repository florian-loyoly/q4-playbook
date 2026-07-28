"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { MarketId, Step, UIStrings } from "@/lib/types";
import { useGate } from "@/lib/gate";
import { StepView } from "./StepView";
import { GateWall } from "./GateWall";
import { RedirectNotice } from "./RedirectNotice";
import { Toast } from "./Toast";

const REDIRECT_DELAY = 1400;

// Decides between the step content and the gate wall based on gate state.
// On successful submission it shows a short confirmation notice, then unlocks
// and redirects to the stage the user picked as their #1 Q4 priority. The
// unlocked toast is driven by the gate provider's justUnlocked flag so it
// survives the redirect.
export function StepScreen({ market, step, steps, ui }: { market: MarketId; step: Step; steps: Step[]; ui: UIStrings }) {
  const { isUnlocked, unlock, justUnlocked, clearJustUnlocked } = useGate();
  const router = useRouter();
  const [redirectSlug, setRedirectSlug] = useState<string | null>(null);

  // Clear the toast a few seconds after it appears.
  useEffect(() => {
    if (!justUnlocked) return;
    const t = setTimeout(() => clearJustUnlocked(), 3600);
    return () => clearTimeout(t);
  }, [justUnlocked, clearJustUnlocked]);

  // After the confirmation notice, unlock and go to the chosen stage.
  useEffect(() => {
    if (!redirectSlug) return;
    const t = setTimeout(() => {
      unlock();
      if (redirectSlug !== step.slug) {
        router.push(`/${market}/${redirectSlug}`);
        // keep the notice mounted until this screen unmounts on navigation
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
        setRedirectSlug(null);
      }
    }, REDIRECT_DELAY);
    return () => clearTimeout(t);
  }, [redirectSlug, step.slug, market, router, unlock]);

  const locked = !step.isFree && !isUnlocked;
  const redirectTitle = redirectSlug ? steps.find((s) => s.slug === redirectSlug)?.title ?? "" : "";

  return (
    <>
      {locked ? (
        <GateWall market={market} steps={steps} ui={ui} onSuccess={(slug) => setRedirectSlug(slug)} />
      ) : (
        <StepView market={market} step={step} steps={steps} ui={ui} />
      )}
      {redirectSlug ? <RedirectNotice ui={ui} stageTitle={redirectTitle} /> : null}
      {justUnlocked ? <Toast message={ui.unlockedToast} /> : null}
    </>
  );
}
