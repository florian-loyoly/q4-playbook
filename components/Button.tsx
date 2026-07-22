import React from "react";
import Link from "next/link";
import { BODY, P } from "@/lib/tokens";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  label: string;
  variant?: Variant;
  lg?: boolean;
  iconL?: string;
  iconR?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit";
  disabled?: boolean;
  style?: React.CSSProperties;
  ariaLabel?: string;
  external?: boolean;
};

export function Button({ label, variant = "secondary", lg, iconL, iconR, href, onClick, type = "button", disabled, style, ariaLabel, external }: Props) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: BODY,
    fontWeight: 500,
    fontSize: lg ? 15 : 14,
    height: lg ? 46 : 40,
    padding: lg ? "0 22px" : "0 16px",
    borderRadius: 10,
    border: "none",
    cursor: disabled ? "wait" : "pointer",
    whiteSpace: "nowrap",
    transition: "background .18s, color .18s, box-shadow .18s",
    textDecoration: "none",
  };
  let variantStyle: React.CSSProperties;
  if (variant === "primary") {
    variantStyle = { background: P.blue, color: "#fff", boxShadow: "inset 0 1px 0 rgba(255,255,255,.2), 0 3.5px 6px rgba(41,101,254,.18)" };
  } else if (variant === "ghost") {
    variantStyle = { background: "transparent", color: P.p900 };
  } else {
    variantStyle = { background: P.p100, color: P.p950, border: `1px solid ${P.p200}` };
  }
  const st = { ...base, ...variantStyle, ...style };
  const color = (variantStyle.color as string) || P.p950;
  const kids = (
    <>
      {iconL ? <Icon name={iconL} color={color} size={17} /> : null}
      <span>{label}</span>
      {iconR ? <Icon name={iconR} color={color} size={17} /> : null}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} onClick={onClick} style={st} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
          {kids}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} style={st} aria-label={ariaLabel}>
        {kids}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} style={st} aria-label={ariaLabel}>
      {kids}
    </button>
  );
}
