"use client";

import { DISP, BODY, P } from "@/lib/tokens";
import { Icon } from "./Icon";
import { PartnerLogo } from "./PartnerLogo";
import type { Partner } from "@/lib/types";

// One "In this chapter" list. Single-partner steps show one (with the list
// eyebrow); dual-partner steps show two side by side (each headed by its
// partner logo). Items and numbering come from the same tip source as the rail.
export function ChapterList({
  items,
  accent,
  jumpTo,
  headingLabel,
  partner,
}: {
  items: { id: string; label: string }[];
  accent: string;
  jumpTo: (id: string) => void;
  headingLabel: string;
  partner?: Partner;
}) {
  return (
    <div style={{ background: P.raised, border: `1px solid ${P.p200}`, borderRadius: 2, padding: "20px 22px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, minHeight: 24 }}>
        {partner ? (
          <PartnerLogo partner={partner} accent={accent} size={22} />
        ) : (
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: BODY, fontSize: 11, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: P.p700 }}>
            <Icon name="list" color={P.p700} size={15} />
            {headingLabel}
          </span>
        )}
      </div>
      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 2 }}>
        {items.map((a, i) => (
          <li key={a.id}>
            <a
              href={`#${a.id}`}
              onClick={(e) => {
                e.preventDefault();
                jumpTo(a.id);
              }}
              style={{ display: "flex", gap: 12, alignItems: "baseline", padding: "8px 6px", borderRadius: 6, fontFamily: BODY, fontSize: 14, color: P.p900, textDecoration: "none" }}
            >
              <span style={{ fontFamily: DISP, fontWeight: 700, fontSize: 13, color: accent, minWidth: 20 }}>{String(i + 1).padStart(2, "0")}</span>
              <span>{a.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
