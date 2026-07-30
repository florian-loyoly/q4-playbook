"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import type { Step, UIStrings } from "@/lib/types";
import { DISP, BODY, P, tint } from "@/lib/tokens";

// Dark "the number that matters" box. Two modes:
//  - figure mode: standalone big number with a count-up on first view + caption
//  - sentence mode: a full statement with a highlighted number inside it
export function KeyStat({ step, ui }: { step: Step; ui: UIStrings }) {
  const ks = step.keyStat;
  const isSentence = !!ks.statement;
  const val = ks.value ?? 0;
  const dec = String(val).indexOf(".") >= 0 ? 1 : 0;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(reduce ? val.toFixed(dec) : (0).toFixed(dec));

  useEffect(() => {
    if (isSentence || !inView) return;
    if (reduce) {
      setDisplay(val.toFixed(dec));
      return;
    }
    const dur = 1100;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setDisplay((val * e).toFixed(dec));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(val.toFixed(dec));
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isSentence, inView, reduce, val, dec]);

  const eyebrow = (
    <div style={{ fontFamily: BODY, fontSize: 11, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: tint(step.accent, 0.95), marginBottom: isSentence ? 14 : 8 }}>
      {ui.keyStatLabel}
    </div>
  );
  const source = (
    <div style={{ fontFamily: BODY, fontSize: 12, color: "rgba(255,255,255,.5)", marginTop: isSentence ? 14 : 0 }}>
      {ui.source}: {ks.source}
    </div>
  );

  // Sentence mode: render the statement with the highlighted number emphasized inline.
  function renderStatement() {
    const s = ks.statement || "";
    const h = ks.highlight || "";
    if (!h || !s.includes(h)) return s;
    const parts = s.split(h);
    const out: React.ReactNode[] = [];
    parts.forEach((seg, i) => {
      out.push(seg);
      if (i < parts.length - 1) {
        out.push(
          <span key={i} style={{ fontFamily: DISP, fontWeight: 700, fontSize: "1.7em", color: "#fff", letterSpacing: "-.02em", whiteSpace: "nowrap" }}>
            {h}
          </span>
        );
      }
    });
    return out;
  }

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
      {isSentence ? (
        <div style={{ position: "relative", maxWidth: "52ch" }}>
          {eyebrow}
          <p style={{ fontFamily: BODY, fontSize: "clamp(18px,2.4vw,23px)", lineHeight: 1.5, color: "rgba(255,255,255,.92)", margin: 0 }}>{renderStatement()}</p>
          {source}
        </div>
      ) : (
        <div style={{ position: "relative", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px 34px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
            {ks.prefix ? <span style={{ fontFamily: DISP, fontWeight: 700, fontSize: 44, color: step.accent, lineHeight: 1 }}>{ks.prefix}</span> : null}
            <span style={{ fontFamily: DISP, fontWeight: 700, fontSize: "clamp(48px,9vw,72px)", color: "#fff", lineHeight: 1, letterSpacing: "-.03em" }}>{display}</span>
            {ks.unit ? <span style={{ fontFamily: DISP, fontWeight: 700, fontSize: 34, color: step.accent, lineHeight: 1, marginLeft: 2 }}>{ks.unit}</span> : null}
          </div>
          <div style={{ flex: 1, minWidth: 220 }}>
            {eyebrow}
            <p style={{ fontFamily: BODY, fontSize: 15, lineHeight: 1.5, color: "rgba(255,255,255,.9)", margin: "0 0 8px" }}>{ks.label}</p>
            {source}
          </div>
        </div>
      )}
    </div>
  );
}
