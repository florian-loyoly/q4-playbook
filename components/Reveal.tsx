"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

// Fade + rise in when scrolled into view. Respects reduced motion (renders plain).
export function Reveal({
  children,
  delay = 0,
  style,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  as?: "div" | "section" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  if (reduce) {
    const Tag = as;
    return <Tag style={style}>{children}</Tag>;
  }
  return (
    <MotionTag
      style={style}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
