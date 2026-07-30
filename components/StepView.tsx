"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import type { MarketId, Step, UIStrings } from "@/lib/types";
import { DISP, BODY, P, tint } from "@/lib/tokens";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { PartnerLogo } from "./PartnerLogo";
import { KeyStat } from "./KeyStat";
import { TipBlock } from "./TipBlock";
import { PartnerCard } from "./PartnerCard";
import { GateInline } from "./GateInline";
import { TipProgressBar, TipRail, TipMobileNav, type NavItem } from "./TipNav";
import { fill } from "@/lib/i18n";
import { useGate } from "@/lib/gate";
import { useIsNarrow, useTipSpy } from "@/lib/hooks";

export function StepView({ market, step, steps, ui, onGateSuccess }: { market: MarketId; step: Step; steps: Step[]; ui: UIStrings; onGateSuccess: (prioritySlug: string) => void }) {
  const router = useRouter();
  const { isUnlocked } = useGate();
  const narrow = useIsNarrow(1024);
  const accent = step.accent;
  const dual = step.partners.length > 1;
  const next = steps.find((s) => s.order === step.order + 1);
  const prev = steps.find((s) => s.order === step.order - 1);
  // New model: every stage is openable. When gated, only the first tip of each
  // partner is shown as a free preview; the rest sits behind the inline form.
  const locked = !isUnlocked;
  const previewCount = 1; // free tips per partner before the gate
  const tipLimit = (pt: Step["partners"][number]) => (locked ? Math.min(previewCount, pt.tips.length) : pt.tips.length);

  // Single source of truth for the visible tips (reused by the rail / progress).
  const flatItems: NavItem[] = useMemo(() => {
    const d = step.partners.length > 1;
    const lim = !isUnlocked ? 1 : Infinity;
    return step.partners.flatMap((pt, pi) => pt.tips.slice(0, lim).map((tp, ti) => ({ id: `tip-${pi}-${ti}`, label: tp.title, partnerName: d ? pt.name : undefined })));
  }, [step, isUnlocked]);
  const ids = useMemo(() => flatItems.map((i) => i.id), [flatItems]);
  const { active, jumpTo } = useTipSpy(ids);

  return (
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "18px 20px 70px" }}>
      {/* top bar: back link + stage selector */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap", marginBottom: 16 }}>
        <Button label={ui.backToMap} variant="ghost" iconL="arrowL" href={`/${market}`} style={{ paddingLeft: 8 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <span style={{ fontFamily: BODY, fontSize: 13, fontWeight: 500, color: P.p700 }}>{fill(ui.stageOf, { n: step.order })}</span>
          <div style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
            <select
              value={String(step.order)}
              onChange={(e) => {
                const target = steps.find((s) => s.order === parseInt(e.target.value, 10));
                if (target) router.push(`/${market}/${target.slug}`);
              }}
              aria-label={ui.jumpTo}
              style={{ appearance: "none", WebkitAppearance: "none", fontFamily: BODY, fontSize: 13, fontWeight: 500, color: P.p900, background: "#fff", border: `1px solid ${P.p200}`, borderRadius: 8, padding: "8px 34px 8px 12px", cursor: "pointer", maxWidth: 260, textOverflow: "ellipsis" }}
            >
              {steps.map((s) => (
                <option key={s.order} value={String(s.order)}>
                  {s.order + ". " + s.title}
                </option>
              ))}
            </select>
            <span style={{ position: "absolute", right: 10, pointerEvents: "none", display: "inline-flex" }}>
              <Icon name="chevD" color={P.p700} size={16} />
            </span>
          </div>
        </div>
      </div>

      {/* progress + tip nav */}
      {narrow ? (
        <TipMobileNav items={flatItems} active={active} accent={accent} jumpTo={jumpTo} headingLabel={ui.inThisChapter} />
      ) : (
        <TipProgressBar active={active} total={flatItems.length} accent={accent} />
      )}

      <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "264px minmax(0,1fr)", gap: narrow ? 0 : 44, alignItems: "start" }}>
        {!narrow ? <TipRail items={flatItems} active={active} accent={accent} jumpTo={jumpTo} headingLabel={ui.inThisChapter} /> : null}

        <div style={{ minWidth: 0 }}>
          {/* partner banner */}
          <button
            onClick={() => jumpTo(`partner-${step.partners[0].name}`)}
            style={{ width: "100%", textAlign: "left", cursor: "pointer", border: `1px solid ${tint(accent, 0.35)}`, background: tint(accent, 0.07), borderRadius: 2, padding: "12px 16px", display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}
          >
            <span style={{ fontFamily: BODY, fontSize: 12, fontWeight: 500, color: P.p700 }}>{ui.broughtBy}</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
              {step.partners.map((pt, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  {i > 0 ? <span style={{ color: P.p400 }}>+</span> : null}
                  <PartnerLogo partner={pt} accent={accent} size={24} />
                </span>
              ))}
            </span>
            <span style={{ marginLeft: "auto", color: accent, display: "inline-flex", alignItems: "center", gap: 4 }}>
              <Icon name="chevD" color={accent} size={16} />
            </span>
          </button>

          {/* header */}
          <Reveal style={{ margin: "26px 0 8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ width: 56, height: 56, borderRadius: 12, background: tint(accent, 0.12), border: `1px solid ${tint(accent, 0.3)}`, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name={step.icon} color={accent} size={28} />
              </span>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                <span style={{ fontFamily: DISP, fontWeight: 700, fontSize: "clamp(30px,6vw,42px)", color: tint(accent, 0.35), lineHeight: 1 }}>{String(step.order).padStart(2, "0")}</span>
                <h1 style={{ fontFamily: DISP, fontWeight: 600, fontSize: "clamp(26px,5vw,40px)", lineHeight: 1.1, letterSpacing: "-.02em", color: P.p950, margin: 0 }}>{step.title}</h1>
              </div>
            </div>
          </Reveal>

          {/* single-partner: step-level stat here (dual stats live inside each section) */}
          {!dual ? (
            <div style={{ margin: "26px 0" }}>
              <Reveal>
                <KeyStat step={step} ui={ui} />
              </Reveal>
            </div>
          ) : null}

          {/* expert tips */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "34px 0 22px", fontFamily: BODY, fontSize: 11, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: P.p700 }}>
            <Icon name="spark" color={accent} size={15} />
            {ui.expertTips}
          </div>

          {dual ? (
            <div style={{ display: "grid", gap: 28 }}>
              {step.partners.map((pt, pi) => (
                <Reveal as="section" key={pi} style={{ border: `1px solid ${P.p200}`, borderLeft: `3px solid ${accent}`, borderRadius: 2, padding: "22px 24px", background: tint(accent, 0.03) }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 16, marginBottom: 18, borderBottom: `1px solid ${P.p200}` }}>
                    <PartnerLogo partner={pt} accent={accent} size={26} />
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <KeyStat step={step} ui={ui} stat={pt.keyStat ?? step.keyStat} />
                  </div>
                  <div>
                    <TipBlock step={step} partner={pt} pi={pi} ui={ui} limit={tipLimit(pt)} />
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div>
              <TipBlock step={step} partner={step.partners[0]} pi={0} ui={ui} limit={tipLimit(step.partners[0])} />
            </div>
          )}

          {/* inline gate: replaces the remaining tips until the form is submitted */}
          {locked ? (
            <GateInline market={market} step={step} steps={steps} ui={ui} onSuccess={onGateSuccess} />
          ) : null}

          {/* partner presentations */}
          <div style={{ marginTop: 40, display: "grid", gap: 16 }}>
            {step.partners.map((pt, i) => (
              <Reveal key={i}>
                <PartnerCard step={step} partner={pt} ui={ui} />
              </Reveal>
            ))}
          </div>

          {/* bottom nav */}
          <div style={{ marginTop: 44, paddingTop: 26, borderTop: `1px solid ${P.p200}`, display: "flex", flexDirection: "column", gap: 18 }}>
            {next ? (
              <a
                href={`/${market}/${next.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(`/${market}/${next.slug}`);
                }}
                style={{ cursor: "pointer", textDecoration: "none", width: "100%", border: `1px solid ${tint(next.accent, 0.4)}`, borderRadius: 2, background: P.raised, padding: "16px 18px", display: "flex", alignItems: "center", gap: 14 }}
              >
                <span style={{ width: 38, height: 38, borderRadius: 8, background: next.accent, color: "#fff", fontFamily: DISP, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{next.order}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: BODY, fontSize: 11, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: P.p700 }}>{ui.upNext}</div>
                  <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 16, color: P.p950, marginTop: 2 }}>{next.title}</div>
                </div>
                <Icon name="arrowR" color={next.accent} size={20} />
              </a>
            ) : null}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <Button label={ui.backToMap} variant="ghost" iconL="arrowUp" href={`/${market}`} style={{ paddingLeft: 8 }} />
              <div style={{ display: "flex", gap: 8 }}>
                {prev ? <Button label={ui.prev} variant="secondary" iconL="arrowL" href={`/${market}/${prev.slug}`} /> : null}
                {next ? <Button label={ui.next} variant="secondary" iconR="arrowR" href={`/${market}/${next.slug}`} /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
