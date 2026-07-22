"use client";

import { motion, useReducedMotion } from "framer-motion";

// A template re-mounts on every navigation within the [market] segment, so this
// gives a clean crossfade on map <-> step transitions and on market switches.
export default function MarketTemplate({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.26, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
