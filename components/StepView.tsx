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
import { ChapterList } from "./ChapterList";
import { TipProgressBar, TipRail, TipMobileNav, type NavItem } from "./TipNav";
import { fill } from "@/lib/i18n";
import { useGate } from "@/lib/gate";
import { useIsNarrow, useTipSpy } from "@/lib/hooks";

export function StepView({ market, step, steps, ui }: { market: MarketId; step: Step; steps: Step[]; ui: UIStrings }) {
  const router = useRouter();
  const { isUnlocked } = useGate();
  const narrow = useIsNarrow(1024);
  const accent = step.accent;
  const dual = step.partners.length > 1;
  const next = steps.find((s) => s.order === step.order + 1);
  const prev = steps.find((s) => s.order === step.order - 1);
  const lockedOf = (s: Step) => !s.isFree && !isUnlocked;
  const nextLocked = next ? lockedOf(next) : false;

  // Single source of truth for the tips (reused by the TOC(s) and the rail).
  const flatItems: NavItem[] = useMemo(() => {
    const d = step.partners.length > 1;
    return step.partners.flatMap((pt, pi) => pt.tips.map((tp, ti) => ({ id: `tip-${pi}-${ti}`, label: tp.title, partnerName: d ? pt.name : undefined })));
  }, [step]);
  const ids = useMemo(() => flatItems.map((i) => i.id), [flatItems]);
  const { active, jumpTo } = useTipSpy(ids);

  const partnerItems = (pi: number) => step.partners[pi].tips.map((tp, ti) => ({ id: `tip-${pi}-${ti}`, label: tp.title }));

  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "18px 20px 70px" }}>
      <div style={{ marginBottom: 16 }}>
        <Button label={ui.backToMap} variant="ghost" iconL="arrowL" href={`/${market}`} style={{ paddingLeft: 8 }} />
      </div>

      {/* progress + tip nav */}
      {narrow ? (
        <TipMobileNav items={flatItems} active={active} accent={accent} jumpTo={jumpTo} headingLabel={ui.inThisChapter} />
      ) : (
        <TipProgressBar active={active} total={flatItems.length} accent={accent} />
      )}

      <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "212px minmax(0,1fr)", gap: narrow ? 0 : 40, alignItems: "start" }}>
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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap", marginBottom: 18 }}>
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
                      {(lockedOf(s) ? "🔒 " : "") + s.order + ". " + s.title}
                    </option>
                  ))}
                </select>
                <span style={{ position: "absolute", right: 10, pointerEvents: "none", display: "inline-flex" }}>
                  <Icon name="chevD" color={P.p700} size={16} />
                </span>
              </div>
            </div>
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

          {/* in this chapter: one list, or two side by side for dual partners */}
          <div style={{ margin: "26px 0" }}>
            {dual ? (
              <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1fr", gap: 16 }}>
                {step.partners.map((pt, pi) => (
                  <Reveal key={pi}>
                    <ChapterList items={partnerItems(pi)} accent={accent} jumpTo={jumpTo} headingLabel={ui.inThisChapter} partner={pt} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <Reveal>
                <ChapterList items={partnerItems(0)} accent={accent} jumpTo={jumpTo} headingLabel={ui.inThisChapter} />
              </Reveal>
            )}
          </div>

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
                    <TipBlock step={step} partner={pt} pi={pi} ui={ui} />
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div>
              <TipBlock step={step} partner={step.partners[0]} pi={0} ui={ui} />
            </div>
          )}

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
                <Icon name={nextLocked ? "lock" : "arrowR"} color={nextLocked ? P.p700 : next.accent} size={nextLocked ? 18 : 20} />
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
