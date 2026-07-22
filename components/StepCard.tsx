"use client";

import { useState } from "react";
import Link from "next/link";
import type { MarketId, Step, UIStrings } from "@/lib/types";
import { DISP, BODY, P, tint } from "@/lib/tokens";
import { Icon } from "./Icon";
import { PartnerLogo } from "./PartnerLogo";

export function StepCard({
  step,
  market,
  ui,
  locked,
  leaving,
}: {
  step: Step;
  market: MarketId;
  ui: UIStrings;
  locked: boolean;
  leaving: boolean; // lock icon animating out during the unlock moment
}) {
  const [hover, setHover] = useState(false);
  const accent = step.accent;
  const dual = step.partners.length > 1;
  const showLock = locked || leaving;

  return (
    <Link
      href={`/${market}/${step.slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        display: "block",
        textAlign: "left",
        textDecoration: "none",
        width: "100%",
        background: locked ? P.p100 : tint(accent, 0.05),
        border: `1px solid ${hover ? tint(accent, 0.7) : locked ? P.p200 : tint(accent, 0.45)}`,
        borderTop: `3px solid ${locked && !hover ? P.p300 : accent}`,
        borderRadius: 2,
        padding: "18px 18px 16px",
        boxShadow: hover ? "0 8px 22px rgba(43,37,31,.12)" : locked ? "none" : "0 1px 3px rgba(43,37,31,.07)",
        transition: "border-color .2s, box-shadow .2s, filter .25s, opacity .25s",
        opacity: locked ? (hover ? 0.9 : 0.6) : 1,
        filter: locked ? (hover ? "grayscale(.35)" : "grayscale(.85)") : "none",
        animation: leaving ? `pbPop .6s ease ${(step.order - 2) * 90 + 200}ms both` : "none",
      }}
    >
      {showLock ? (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            width: 26,
            height: 26,
            borderRadius: 999,
            background: P.p100,
            border: `1px solid ${P.p200}`,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: P.p700,
            animation: leaving ? `pbLockOut .5s cubic-bezier(.4,0,.2,1) ${(step.order - 2) * 90}ms forwards` : "none",
          }}
        >
          <Icon name="lock" color={P.p700} size={14} />
        </span>
      ) : null}

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <span
          style={{
            width: 34,
            height: 34,
            borderRadius: 8,
            background: accent,
            color: "#fff",
            fontFamily: DISP,
            fontWeight: 700,
            fontSize: 16,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {step.order}
        </span>
        <span
          style={{
            width: 34,
            height: 34,
            borderRadius: 8,
            background: tint(accent, 0.12),
            border: `1px solid ${tint(accent, 0.28)}`,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon name={step.icon} color={accent} size={18} />
        </span>
        {step.isFree ? (
          <span
            style={{
              marginLeft: "auto",
              marginRight: 2,
              fontFamily: BODY,
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: ".06em",
              textTransform: "uppercase",
              color: accent,
              background: tint(accent, 0.12),
              border: `1px solid ${tint(accent, 0.3)}`,
              borderRadius: 999,
              padding: "3px 9px",
            }}
          >
            {ui.free}
          </span>
        ) : null}
      </div>

      <h3 style={{ fontFamily: DISP, fontWeight: 600, fontSize: 17, lineHeight: 1.15, letterSpacing: "-.01em", color: P.p950, margin: "0 0 6px" }}>
        {step.title}
      </h3>
      <p style={{ fontFamily: BODY, fontSize: 13, lineHeight: 1.45, color: P.p700, margin: "0 0 14px" }}>{step.teaser}</p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, paddingTop: 12, borderTop: `1px solid ${P.p100}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: dual ? 10 : 0, flexWrap: "wrap" }}>
          {step.partners.map((pt, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
              {dual && i > 0 ? <span style={{ color: P.p400, margin: "0 8px 0 0", fontSize: 12 }}>+</span> : null}
              <PartnerLogo partner={pt} accent={accent} size={22} />
            </span>
          ))}
        </div>
        <span style={{ fontFamily: BODY, fontSize: 11, fontWeight: 500, color: locked ? P.p500 : accent, display: "inline-flex", alignItems: "center", gap: 4, whiteSpace: "nowrap" }}>
          {locked ? ui.tapToUnlock : ui.tapToOpen}
          <Icon name={locked ? "lock" : "arrowR"} color={locked ? P.p500 : accent} size={13} />
        </span>
      </div>
    </Link>
  );
}
