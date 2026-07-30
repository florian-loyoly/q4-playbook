import type { Partner, Step, UIStrings } from "@/lib/types";
import { DISP, BODY, P, tint, HEADER_OFFSET } from "@/lib/tokens";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

// Renders one partner's numbered expert tips. gid = tip-{partnerIndex}-{tipIndex} for anchors.
// Tips are separated by a hairline + generous spacing (scannable, premium rhythm).
export function TipBlock({ step, partner, pi, ui }: { step: Step; partner: Partner; pi: number; ui: UIStrings }) {
  const accent = step.accent;
  return (
    <>
      {partner.tips.map((tp, ti) => {
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
                {tp.paragraphs.map((pg, gi) => (
                  <p key={gi} style={{ fontFamily: BODY, fontSize: 15, lineHeight: 1.65, color: P.p800, margin: "0 0 14px", maxWidth: 660, textWrap: "pretty" }}>
                    {pg}
                  </p>
                ))}
                {tp.visuals && tp.visuals.length ? (
                  <div style={{ marginTop: 10, display: "grid", gap: 14 }}>
                    {tp.visuals.map((v, vi) =>
                      v.src ? (
                        <figure
                          key={vi}
                          style={{
                            margin: 0,
                            background: P.bg50,
                            border: `1px solid ${P.p200}`,
                            borderRadius: 12,
                            padding: 8,
                            boxShadow: "0 10px 28px rgba(43,37,31,.10)",
                            overflow: "hidden",
                          }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={v.src} alt={v.label} loading="lazy" style={{ width: "100%", height: "auto", display: "block", borderRadius: 6 }} />
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
