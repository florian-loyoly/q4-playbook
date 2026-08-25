import type { Partner, Step, UIStrings, TipBlock as TipBlockT } from "@/lib/types";
import { DISP, BODY, P, tint, HEADER_OFFSET } from "@/lib/tokens";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

const paraStyle = { fontFamily: BODY, fontSize: 15, lineHeight: 1.65, color: P.p800, margin: "0 0 14px", textWrap: "pretty" as const };

// Render inline **bold** markers within body copy as <strong>.
function inline(text: string) {
  if (!text.includes("**")) return text;
  return text.split(/\*\*(.+?)\*\*/g).map((seg, i) => (i % 2 === 1 ? <strong key={i} style={{ fontWeight: 600, color: P.p950 }}>{seg}</strong> : seg));
}

// Renders a tip's rich content: paragraphs, bullet lists, pull quotes, and
// boxed callouts (e.g. a client example), in author order.
function TipRich({ blocks, accent, ui }: { blocks: TipBlockT[]; accent: string; ui: UIStrings }) {
  // Even, generous vertical rhythm between blocks so long tips breathe. The
  // grid gap owns the spacing, so each block carries no vertical margin.
  return (
    <div style={{ display: "grid", gap: 22 }}>
      {blocks.map((b, i) => {
        if (b.kind === "list") {
          return (
            <ul key={i} style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 13 }}>
              {b.items.map((it, j) => (
                <li key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontFamily: BODY, fontSize: 15, lineHeight: 1.55, color: P.p800 }}>
                  <span aria-hidden="true" style={{ flexShrink: 0, width: 6, height: 6, borderRadius: 999, background: accent, marginTop: 8 }} />
                  <span>{inline(it)}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (b.kind === "quote") {
          return (
            <blockquote key={i} style={{ margin: 0, padding: "6px 0 6px 20px", borderLeft: `3px solid ${accent}`, fontFamily: DISP, fontStyle: "italic", fontWeight: 500, fontSize: 17, lineHeight: 1.5, color: P.p900 }}>
              {b.text}
            </blockquote>
          );
        }
        if (b.kind === "callout") {
          const tone = b.variant === "do" ? "#2965FE" : b.variant === "result" ? "#1E9E63" : accent;
          const iconName = b.variant === "do" ? "check" : "spark";
          const text = b.text ? b.text.charAt(0).toUpperCase() + b.text.slice(1) : b.text;
          return (
            <div key={i} style={{ margin: 0, background: tint(tone, 0.05), border: `1px solid ${P.p200}`, borderLeft: `3px solid ${tone}`, borderRadius: 8, padding: "18px 20px" }}>
              {b.heading ? (
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <Icon name={iconName} color={tone} size={16} />
                  <span style={{ fontFamily: DISP, fontWeight: 600, fontSize: 15, color: P.p950 }}>{b.heading}</span>
                </div>
              ) : null}
              <p style={{ fontFamily: BODY, fontSize: 14, lineHeight: 1.65, color: P.p800, margin: 0, textWrap: "pretty" }}>{inline(text)}</p>
              {b.href ? (
                <a href={b.href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 5, marginTop: 10, fontFamily: BODY, fontSize: 13, fontWeight: 600, color: accent, textDecoration: "none" }}>
                  {ui.viewCaseStudy}
                  <Icon name="ext" color={accent} size={13} />
                </a>
              ) : null}
            </div>
          );
        }
        return (
          <p key={i} style={{ ...paraStyle, margin: 0 }}>
            {inline(b.text)}
          </p>
        );
      })}
    </div>
  );
}

// Renders one partner's numbered expert tips. gid = tip-{partnerIndex}-{tipIndex} for anchors.
// Tips are separated by a hairline + generous spacing (scannable, premium rhythm).
// `limit` caps how many tips render (used for the free preview before the gate).
export function TipBlock({ step, partner, pi, ui, limit }: { step: Step; partner: Partner; pi: number; ui: UIStrings; limit?: number }) {
  const accent = step.accent;
  const tips = typeof limit === "number" ? partner.tips.slice(0, limit) : partner.tips;
  return (
    <>
      {tips.map((tp, ti) => {
        const gid = `tip-${pi}-${ti}`;
        return (
          <Reveal
            as="article"
            key={gid}
            style={{
              scrollMarginTop: HEADER_OFFSET,
              marginTop: ti > 0 ? 30 : 0,
              paddingTop: ti > 0 ? 30 : 0,
              borderTop: ti > 0 ? `1px solid ${P.p200}` : "none",
            }}
          >
            <div id={gid} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <span
                style={{
                  flexShrink: 0,
                  width: 40,
                  height: 40,
                  borderRadius: 999,
                  background: tint(accent, 0.12),
                  border: `1px solid ${tint(accent, 0.3)}`,
                  color: accent,
                  fontFamily: DISP,
                  fontWeight: 700,
                  fontSize: 16,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {ti + 1}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontFamily: DISP, fontWeight: 600, fontSize: 20, lineHeight: 1.2, letterSpacing: "-.01em", color: P.p950, margin: "6px 0 12px" }}>{tp.title}</h3>
                {tp.blocks && tp.blocks.length ? (
                  <TipRich blocks={tp.blocks} accent={accent} ui={ui} />
                ) : (
                  tp.paragraphs.map((pg, gi) => (
                    <p key={gi} style={paraStyle}>
                      {inline(pg)}
                    </p>
                  ))
                )}
                {tp.visuals && tp.visuals.length ? (
                  <div style={{ marginTop: 22, display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", alignItems: "start" }}>
                    {tp.visuals.map((v, vi) =>
                      v.src ? (
                        <figure
                          key={vi}
                          style={{
                            margin: "0 auto",
                            width: "fit-content",
                            maxWidth: "100%",
                            background: P.bg50,
                            border: `1px solid ${P.p200}`,
                            borderRadius: 12,
                            padding: 8,
                            boxShadow: "0 10px 28px rgba(43,37,31,.10)",
                            overflow: "hidden",
                          }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          {/* Cap by height so wide images stay near full width while square/portrait ones shrink instead of stretching. */}
                          <img src={v.src} alt={v.label} loading="lazy" style={{ maxWidth: "100%", maxHeight: 480, width: "auto", height: "auto", display: "block", borderRadius: 6 }} />
                        </figure>
                      ) : (
                        <div
                          key={vi}
                          style={{
                            aspectRatio: "16 / 7",
                            background: P.bg50,
                            border: `1px dashed ${P.p300}`,
                            borderRadius: 12,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            color: P.p500,
                          }}
                        >
                          <Icon name="grid" color={P.p400} size={22} />
                          <span style={{ fontFamily: BODY, fontSize: 12, fontWeight: 500, color: P.p500 }}>{ui.visualSlot}</span>
                          <span style={{ fontFamily: BODY, fontSize: 12, color: P.p400 }}>{v.label}</span>
                        </div>
                      )
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </Reveal>
        );
      })}
    </>
  );
}
