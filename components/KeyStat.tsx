"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import type { Step, UIStrings } from "@/lib/types";
import { DISP, BODY, P, tint } from "@/lib/tokens";

// Dark "the number that matters" box with a count-up on first view.
export function KeyStat({ step, ui }: { step: Step; ui: UIStrings }) {
  const ks = step.keyStat;
  const dec = String(ks.value).indexOf(".") >= 0 ? 1 : 0;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(reduce ? ks.value.toFixed(dec) : (0).toFixed(dec));

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(ks.value.toFixed(dec));
      return;
    }
    const dur = 1100;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setDisplay((ks.value * e).toFixed(dec));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(ks.value.toFixed(dec));
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, ks.value, dec]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden", background: P.dark, borderRadius: 3, padding: "30px 30px", color: "#fff" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/assets/noise-texture.png)",
          backgroundSize: "320px",
          opacity: 0.5,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px 34px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
          {ks.prefix ? <span style={{ fontFamily: DISP, fontWeight: 700, fontSize: 44, color: step.accent, lineHeight: 1 }}>{ks.prefix}</span> : null}
          <span style={{ fontFamily: DISP, fontWeight: 700, fontSize: "clamp(48px,9vw,72px)", color: "#fff", lineHeight: 1, letterSpacing: "-.03em" }}>{display}</span>
          {ks.unit ? <span style={{ fontFamily: DISP, fontWeight: 700, fontSize: 34, color: step.accent, lineHeight: 1, marginLeft: 2 }}>{ks.unit}</span> : null}
        </div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <div style={{ fontFamily: BODY, fontSize: 11, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: tint(step.accent, 0.95), marginBottom: 8 }}>{ui.keyStatLabel}</div>
          <p style={{ fontFamily: BODY, fontSize: 15, lineHeight: 1.5, color: "rgba(255,255,255,.9)", margin: "0 0 8px" }}>{ks.label}</p>
          <div style={{ fontFamily: BODY, fontSize: 12, color: "rgba(255,255,255,.5)" }}>
            {ui.source}: {ks.source}
          </div>
        </div>
      </div>
    </div>
  );
}
