"use client";

import { useEffect, useState } from "react";

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
