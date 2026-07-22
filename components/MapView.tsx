"use client";

import { useEffect } from "react";
import type { MarketId, Step, UIStrings } from "@/lib/types";
import { DISP, BODY, P } from "@/lib/tokens";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { StepCard } from "./StepCard";
import { useGate } from "@/lib/gate";
import { useIsNarrow } from "@/lib/hooks";

function TimelineNode({ step, locked }: { step: Step; locked: boolean }) {
  return (
    <span
      style={{
        width: 40,
        height: 40,
        borderRadius: 999,
        background: locked ? P.p300 : step.accent,
        color: "#fff",
        fontFamily: DISP,
        fontWeight: 700,
        fontSize: 17,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `0 0 0 4px ${P.bg}`,
        opacity: locked ? 0.75 : 1,
      }}
    >
      {step.order}
    </span>
  );
}

export function MapView({ market, steps, ui }: { market: MarketId; steps: Step[]; ui: UIStrings }) {
  const { isUnlocked, justUnlocked, clearJustUnlocked } = useGate();
  const narrow = useIsNarrow();

  // After a successful unlock we play the lock-out + pop animation once, then clear the flag.
  useEffect(() => {
    if (!justUnlocked) return;
    const t = setTimeout(() => clearJustUnlocked(), 1300);
    return () => clearTimeout(t);
  }, [justUnlocked, clearJustUnlocked]);

  const lockedOf = (s: Step) => !s.isFree && !isUnlocked;

  const hero = (
    <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 30px" }}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontFamily: BODY,
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: P.blue,
          background: P.blueTert,
          border: "1px solid #B3C8FF",
          borderRadius: 999,
          padding: "5px 13px",
          marginBottom: 18,
        }}
      >
        <Icon name="spark" color={P.blue} size={14} />
        {ui.kicker}
      </div>
      <h1 style={{ fontFamily: DISP, fontWeight: 600, fontSize: "clamp(30px,5vw,48px)", lineHeight: 1.08, letterSpacing: "-.025em", color: P.p950, margin: "0 0 16px", textWrap: "balance" }}>
        {ui.heroTitle}
      </h1>
      <p style={{ fontFamily: BODY, fontSize: 16, lineHeight: 1.5, color: P.p700, margin: "0 auto", maxWidth: 600, textWrap: "pretty" }}>{ui.heroSub}</p>
      <div style={{ marginTop: 16, fontFamily: BODY, fontSize: 12, color: P.p700, display: "inline-flex", alignItems: "center", gap: 8 }}>
        {ui.editedBy}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo-loyoly.svg" alt="Loyoly" style={{ height: 16 }} />
      </div>
    </div>
  );

  const controls = (
    <div style={{ marginBottom: 34 }}>
      <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 19, color: P.p950 }}>{ui.mapTitle}</div>
      <div style={{ fontFamily: BODY, fontSize: 13, color: P.p700, marginTop: 2 }}>{ui.mapSub}</div>
    </div>
  );

  const timeline = narrow ? (
    <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
      <div style={{ position: "absolute", left: 19, top: 10, bottom: 10, width: 2, background: P.p200, zIndex: 0 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 34 }}>
        {steps.map((s, i) => {
          const lk = lockedOf(s);
          return (
            <Reveal as="div" key={s.order} delay={i * 0.055} style={{ position: "relative", display: "flex", gap: 16, alignItems: "stretch", zIndex: 1 }}>
              <div style={{ flexShrink: 0, width: 40 }}>
                <TimelineNode step={s} locked={lk} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <StepCard step={s} market={market} ui={ui} locked={lk} leaving={justUnlocked && !s.isFree} />
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  ) : (
    <div style={{ position: "relative", maxWidth: 920, margin: "0 auto" }}>
      <div style={{ position: "absolute", left: "50%", top: 10, bottom: 10, width: 2, marginLeft: -1, background: P.p200, zIndex: 0 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        {steps.map((s, i) => {
          const lk = lockedOf(s);
          const rightSide = i % 2 === 1;
          return (
            <Reveal as="div" key={s.order} delay={i * 0.055} style={{ position: "relative", display: "flex", justifyContent: rightSide ? "flex-end" : "flex-start", zIndex: 1 }}>
              <div style={{ position: "absolute", left: "50%", top: 24, transform: "translate(-50%,-50%)", zIndex: 3 }}>
                <TimelineNode step={s} locked={lk} />
              </div>
              <div style={{ width: "calc(50% - 34px)", minWidth: 0, position: "relative" }}>
                <div style={{ position: "absolute", top: 24, width: 16, height: 2, background: P.p200, zIndex: 0, left: rightSide ? -16 : "auto", right: rightSide ? "auto" : -16 }} />
                <StepCard step={s} market={market} ui={ui} locked={lk} leaving={justUnlocked && !s.isFree} />
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "40px 20px 80px" }}>
      <Reveal>{hero}</Reveal>
      {controls}
      {timeline}
    </div>
  );
}
