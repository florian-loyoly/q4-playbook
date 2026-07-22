import React from "react";
import { P } from "@/lib/tokens";

// SVG icon set ported from the prototype. Each entry is a list of [tag, attrs].
type El = [string, Record<string, string | number>];

const ICONS: Record<string, El[]> = {
  target: [["circle", { cx: 12, cy: 12, r: 10 }], ["circle", { cx: 12, cy: 12, r: 6 }], ["circle", { cx: 12, cy: 12, r: 2 }]],
  mail: [["rect", { x: 2, y: 4, width: 20, height: 16, rx: 2 }], ["path", { d: "M2 7l10 6 10-6" }]],
  layout: [["rect", { x: 3, y: 3, width: 7, height: 7, rx: 1 }], ["rect", { x: 14, y: 3, width: 7, height: 7, rx: 1 }], ["rect", { x: 3, y: 14, width: 7, height: 7, rx: 1 }], ["rect", { x: 14, y: 14, width: 7, height: 7, rx: 1 }]],
  card: [["rect", { x: 2, y: 5, width: 20, height: 14, rx: 2 }], ["path", { d: "M2 10h20" }]],
  truck: [["path", { d: "M1 4h14v11H1z" }], ["path", { d: "M15 8h4l3 3v4h-7" }], ["circle", { cx: 6, cy: 18, r: 2 }], ["circle", { cx: 18, cy: 18, r: 2 }]],
  support: [["circle", { cx: 12, cy: 12, r: 9 }], ["circle", { cx: 12, cy: 12, r: 3.5 }], ["path", { d: "M5 5l3.5 3.5M19 5l-3.5 3.5M5 19l3.5-3.5M19 19l-3.5-3.5" }]],
  repeat: [["path", { d: "M17 2l4 4-4 4" }], ["path", { d: "M3 11v-1a4 4 0 014-4h14" }], ["path", { d: "M7 22l-4-4 4-4" }], ["path", { d: "M21 13v1a4 4 0 01-4 4H3" }]],
  heart: [["path", { d: "M20.8 5a5.4 5.4 0 00-7.7 0L12 6.1l-1.1-1.1A5.4 5.4 0 003.2 12l1.1 1L12 20.5 19.7 13l1.1-1a5.4 5.4 0 000-7z" }]],
  rotate: [["path", { d: "M3 12a9 9 0 109-9 9 9 0 00-6.4 2.7L3 8" }], ["path", { d: "M3 3v5h5" }]],
  lock: [["rect", { x: 5, y: 11, width: 14, height: 9, rx: 2 }], ["path", { d: "M8 11V8a4 4 0 018 0v3" }]],
  arrowR: [["path", { d: "M5 12h14" }], ["path", { d: "M13 6l6 6-6 6" }]],
  arrowL: [["path", { d: "M19 12H5" }], ["path", { d: "M11 6l-6 6 6 6" }]],
  arrowUp: [["path", { d: "M12 19V5" }], ["path", { d: "M6 11l6-6 6 6" }]],
  chevD: [["path", { d: "M6 9l6 6 6-6" }]],
  check: [["path", { d: "M20 6L9 17l-5-5" }]],
  ext: [["path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }], ["path", { d: "M15 3h6v6" }], ["path", { d: "M10 14L21 3" }]],
  grid: [["path", { d: "M4 6h16M4 12h16M4 18h16" }]],
  list: [["path", { d: "M8 6h13M8 12h13M8 18h13" }], ["circle", { cx: 3.5, cy: 6, r: 1 }], ["circle", { cx: 3.5, cy: 12, r: 1 }], ["circle", { cx: 3.5, cy: 18, r: 1 }]],
  spark: [["path", { d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" }]],
};

export function Icon({ name, color, size = 20 }: { name: string; color?: string; size?: number }) {
  const list = ICONS[name] || ICONS.target;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || P.p900}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {list.map((el, i) => {
        const [tag, attrs] = el;
        return React.createElement(tag, { key: i, ...attrs });
      })}
    </svg>
  );
}
