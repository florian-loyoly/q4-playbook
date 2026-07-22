import { DISP, P } from "@/lib/tokens";
import type { Partner } from "@/lib/types";

// Loyoly shows its real logo; other (placeholder) partners get a colored initial tile + name.
export function PartnerLogo({ partner, accent, size = 28 }: { partner: Partner; accent: string; size?: number }) {
  if (partner.name === "Loyoly") {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src="/assets/logo-loyoly.svg" alt="Loyoly" style={{ height: size * 0.7, width: "auto", display: "block" }} />;
  }
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <span
        style={{
          width: size,
          height: size,
          borderRadius: 6,
          background: accent,
          color: "#fff",
          fontFamily: DISP,
          fontWeight: 700,
          fontSize: size * 0.46,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          letterSpacing: "-.02em",
        }}
      >
        {partner.name[0]}
      </span>
      <span style={{ fontFamily: DISP, fontWeight: 600, fontSize: size * 0.52, color: P.p950, letterSpacing: "-.01em" }}>
        {partner.name}
      </span>
    </span>
  );
}
