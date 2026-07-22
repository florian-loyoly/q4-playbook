import type { Partner, Step, UIStrings } from "@/lib/types";
import { BODY, P } from "@/lib/tokens";
import { PartnerLogo } from "./PartnerLogo";
import { Button } from "./Button";
import { fill } from "@/lib/i18n";

export function PartnerCard({ step, partner, ui }: { step: Step; partner: Partner; ui: UIStrings }) {
  const accent = step.accent;
  const isPlaceholder = partner.url === "#";
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
        gap: 20,
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: 1, minWidth: 220 }}>
        <div style={{ fontFamily: BODY, fontSize: 11, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: accent, marginBottom: 12 }}>{ui.stagePartner}</div>
        <div style={{ marginBottom: 12 }}>
          <PartnerLogo partner={partner} accent={accent} size={34} />
        </div>
        <p style={{ fontFamily: BODY, fontSize: 15, lineHeight: 1.5, color: P.p800, margin: 0, maxWidth: 520 }}>{partner.pitch}</p>
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
