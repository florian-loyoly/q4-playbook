import type { Partner, Step, UIStrings } from "@/lib/types";
import { DISP, BODY, P, tint } from "@/lib/tokens";
import { Icon } from "./Icon";
import { PartnerLogo } from "./PartnerLogo";
import { Button } from "./Button";
import { fill } from "@/lib/i18n";

export function PartnerCard({ step, partner, ui }: { step: Step; partner: Partner; ui: UIStrings }) {
  const accent = step.accent;
  const isPlaceholder = partner.url === "#";
  const author = partner.author;
  return (
    <div
      id={`partner-${partner.name}`}
      style={{
        scrollMarginTop: 80,
        background: P.raised,
        border: `1px solid ${P.p200}`,
        borderTop: `3px solid ${accent}`,
        borderRadius: 2,
        padding: "26px 28px",
        display: "flex",
        gap: 16,
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: 1, minWidth: 220 }}>
        <div style={{ fontFamily: BODY, fontSize: 11, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: accent, marginBottom: 12 }}>{ui.stagePartner}</div>
        <div style={{ marginBottom: 12 }}>
          <PartnerLogo partner={partner} accent={accent} size={34} />
        </div>
        <p style={{ fontFamily: BODY, fontSize: 15, lineHeight: 1.5, color: P.p800, margin: 0, maxWidth: 680 }}>{partner.pitch}</p>

        {author ? (
          <div style={{ display: "flex", alignItems: "center", gap: 13, marginTop: 20, paddingTop: 18, borderTop: `1px solid ${P.p200}` }}>
            <span
              style={{
                width: 46,
                height: 46,
                borderRadius: 999,
                flexShrink: 0,
                overflow: "hidden",
                background: tint(accent, 0.14),
                border: `1px solid ${tint(accent, 0.3)}`,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {author.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={author.photo} alt={author.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              ) : (
                <Icon name="user" color={accent} size={24} />
              )}
            </span>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 15, color: P.p950, lineHeight: 1.2 }}>{author.name}</div>
              <div style={{ fontFamily: BODY, fontSize: 13, color: P.p700, marginTop: 3 }}>{author.role}</div>
            </div>
          </div>
        ) : null}
      </div>
      <Button
        label={fill(ui.visit, { name: partner.name })}
        variant="primary"
        iconR="ext"
        href={isPlaceholder ? undefined : partner.url}
        external={!isPlaceholder}
        onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
        style={{ alignSelf: "center" }}
      />
    </div>
  );
}
