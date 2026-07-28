"use client";

import { DISP, BODY, P } from "@/lib/tokens";
import { Icon } from "./Icon";
import { fill } from "@/lib/i18n";
import type { UIStrings } from "@/lib/types";

// Short full-screen confirmation shown after the form succeeds, before the app
// redirects the user to the stage they picked as their priority.
export function RedirectNotice({ ui, stageTitle }: { ui: UIStrings; stageTitle: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        background: "rgba(238,234,224,.82)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        animation: "pbFadeUp .3s ease both",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 400,
          background: "#fff",
          border: `1px solid ${P.p200}`,
          borderRadius: 6,
          boxShadow: "0 20px 50px rgba(43,37,31,.16), 0 4px 12px rgba(43,37,31,.08)",
          padding: "32px 28px",
          textAlign: "center",
        }}
      >
        <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 46, height: 46, borderRadius: 999, background: P.blueTert, border: "1px solid #B3C8FF", marginBottom: 16 }}>
          <Icon name="check" color={P.blue} size={22} />
        </div>
        <h2 style={{ fontFamily: DISP, fontWeight: 600, fontSize: 20, letterSpacing: "-.01em", color: P.p950, margin: "0 0 8px" }}>{ui.redirectHeading}</h2>
        <p style={{ fontFamily: BODY, fontSize: 14, lineHeight: 1.5, color: P.p700, margin: "0 0 20px" }}>{fill(ui.redirectMessage, { stage: stageTitle })}</p>
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: 22,
            height: 22,
            border: `2px solid ${P.p200}`,
            borderTopColor: P.blue,
            borderRadius: 999,
            animation: "pbSpin .7s linear infinite",
          }}
        />
      </div>
    </div>
  );
}
