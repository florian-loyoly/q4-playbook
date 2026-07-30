// Design tokens ported verbatim from the prototype palette (this.P).
export const P = {
  bg: "#EEEAE0",
  bg50: "#F5F4F0",
  raised: "#F5F2EA",
  p100: "#EEEDE6",
  p200: "#DCD9CC",
  p300: "#C6C0AB",
  p400: "#AFA488",
  p500: "#9E8E71",
  p700: "#736250",
  p800: "#645648",
  p900: "#52473C",
  p950: "#2B251F",
  blue: "#2965FE",
  blueHover: "#1F52D8",
  blueTert: "#E4EFFF",
  yellow: "#FEC229",
  yellowTert: "#FFFAE9",
  pink: "#F74F9E",
  white: "#ffffff",
  dark: "#2B251F",
} as const;

export const DISP = "var(--font-lexend), system-ui, sans-serif";
export const BODY = "var(--font-inter), system-ui, sans-serif";

// Sticky header is 64px tall; anchor scrolls offset by header + a little breathing room.
export const HEADER_OFFSET = 80;

// hex + alpha -> rgba() string. Accepts #rgb or #rrggbb.
export function tint(hex: string, alpha: number): string {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map((x) => x + x).join("");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// Lighten a hex color by mixing it toward white (ratio 0..1). Used to keep an
// accent readable/vivid on the dark stat card.
export function mixWhite(hex: string, ratio: number): string {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map((x) => x + x).join("");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const m = (c: number) => Math.round(c + (255 - c) * ratio);
  return `rgb(${m(r)},${m(g)},${m(b)})`;
}
