"use client";

import { useEffect, useRef, useState } from "react";
import { HEADER_OFFSET } from "./tokens";

// Matches the prototype's isNarrow (window.innerWidth < 760). Defaults to false
// (desktop) on the server and first client render to avoid hydration mismatch,
// then corrects after mount.
export function useIsNarrow(breakpoint = 760): boolean {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setNarrow(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);
  return narrow;
}

// Scroll-spy over a list of tip anchor ids, using a single shared
// IntersectionObserver (no scroll listener). Returns the active index and a
// smooth-scroll helper that offsets for the fixed header and respects
// prefers-reduced-motion.
export function useTipSpy(ids: string[]): { active: number; jumpTo: (id: string) => void } {
  const [active, setActive] = useState(0);
  const visibleRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    visibleRef.current = new Set();
    setActive(0);
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    if (!els.length || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visibleRef.current.add(e.target.id);
          else visibleRef.current.delete(e.target.id);
        });
        // active = first tip (in document order) currently visible; keep last if none.
        const idx = ids.findIndex((id) => visibleRef.current.has(id));
        if (idx !== -1) setActive(idx);
      },
      { rootMargin: `-${HEADER_OFFSET + 8}px 0px -55% 0px`, threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET, behavior: reduce ? "auto" : "smooth" });
  };

  return { active, jumpTo };
}
