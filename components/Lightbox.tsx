"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Full-screen image viewer: zoom (wheel, buttons, pinch, double-click) and pan
// (drag). Close with the X, a click on the backdrop, or Escape. Portaled to
// <body> so it sits above everything.
export function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; px: number; py: number } | null>(null);
  const pinch = useRef<{ dist: number; scale: number } | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "+" || e.key === "=") setScale((s) => Math.min(6, s + 0.4));
      else if (e.key === "-") reset((s) => Math.max(1, s - 0.4));
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  // Set scale and recenter when it returns to 1.
  const reset = (next: (s: number) => number) =>
    setScale((s) => {
      const ns = next(s);
      if (ns <= 1) setPos({ x: 0, y: 0 });
      return ns;
    });

  const zoomIn = () => setScale((s) => Math.min(6, s + 0.5));
  const zoomOut = () => reset((s) => Math.max(1, s - 0.5));

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    reset((s) => Math.min(6, Math.max(1, s - e.deltaY * 0.0015 * s)));
  };

  const onDoubleClick = () => reset((s) => (s > 1 ? 1 : 2.5));

  // Mouse pan (only meaningful when zoomed).
  const onMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    drag.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!drag.current) return;
    setPos({ x: drag.current.px + (e.clientX - drag.current.x), y: drag.current.py + (e.clientY - drag.current.y) });
  };
  const endDrag = () => (drag.current = null);

  // Touch: one finger pans (when zoomed), two fingers pinch-zoom.
  const dist = (t: React.TouchList) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) pinch.current = { dist: dist(e.touches), scale };
    else if (e.touches.length === 1 && scale > 1) drag.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, px: pos.x, py: pos.y };
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinch.current) {
      e.preventDefault();
      const ratio = dist(e.touches) / pinch.current.dist;
      reset(() => Math.min(6, Math.max(1, pinch.current!.scale * ratio)));
    } else if (e.touches.length === 1 && drag.current) {
      setPos({ x: drag.current.px + (e.touches[0].clientX - drag.current.x), y: drag.current.py + (e.touches[0].clientY - drag.current.y) });
    }
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length < 2) pinch.current = null;
    if (e.touches.length === 0) drag.current = null;
  };

  const btn: React.CSSProperties = {
    width: 40,
    height: 40,
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.25)",
    background: "rgba(0,0,0,.4)",
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: 20,
    lineHeight: 1,
  };

  const node = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onWheel={onWheel}
      onMouseMove={onMouseMove}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 300,
        background: "rgba(15,12,9,.92)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        overflow: "hidden",
        animation: "pbFadeUp .2s ease both",
        touchAction: "none",
      }}
    >
      {/* controls */}
      <div style={{ position: "fixed", top: 16, right: 16, display: "flex", gap: 8, zIndex: 2 }}>
        <button type="button" aria-label="Zoom out" onClick={zoomOut} style={btn}>&#8722;</button>
        <button type="button" aria-label="Zoom in" onClick={zoomIn} style={btn}>&#43;</button>
        <button type="button" aria-label="Close" onClick={onClose} style={btn}>&#215;</button>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        onMouseDown={onMouseDown}
        onDoubleClick={onDoubleClick}
        style={{
          maxWidth: "94vw",
          maxHeight: "92vh",
          objectFit: "contain",
          borderRadius: 6,
          userSelect: "none",
          transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
          transition: drag.current ? "none" : "transform .15s ease",
          cursor: scale > 1 ? (drag.current ? "grabbing" : "grab") : "zoom-in",
          boxShadow: "0 24px 70px rgba(0,0,0,.5)",
        }}
      />
    </div>
  );

  if (!mounted) return null;
  return createPortal(node, document.body);
}
