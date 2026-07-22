"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

// Central gate logic. Every lock / wall / unlock check goes through useGate(),
// so the dev bypass flag and the unlock state live in exactly one place.
//
// NEXT_PUBLIC_GATE_ENABLED:
//   "false" -> gate fully disabled (dev): everything is accessible, no wall, no locks.
//   anything else / unset -> gate active (default, production).
const GATE_ENABLED = process.env.NEXT_PUBLIC_GATE_ENABLED !== "false";

const STORAGE_KEY = "q4-playbook-unlocked";

type GateValue = {
  enabled: boolean; // is the gate mechanism active at all
  isUnlocked: boolean; // true when content should be visible (bypass OR unlocked)
  justUnlocked: boolean; // true briefly right after form success (drives the unlock animation)
  unlock: () => void;
  clearJustUnlocked: () => void;
};

const GateContext = createContext<GateValue | null>(null);

export function GateProvider({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [justUnlocked, setJustUnlocked] = useState(false);

  // Restore session unlock (survives reloads and route navigation within the session).
  useEffect(() => {
    if (!GATE_ENABLED) return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") setUnlocked(true);
    } catch {
      /* sessionStorage unavailable (privacy mode) */
    }
  }, []);

  const unlock = useCallback(() => {
    setUnlocked(true);
    setJustUnlocked(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  const clearJustUnlocked = useCallback(() => setJustUnlocked(false), []);

  const value: GateValue = {
    enabled: GATE_ENABLED,
    isUnlocked: !GATE_ENABLED || unlocked,
    justUnlocked,
    unlock,
    clearJustUnlocked,
  };

  return <GateContext.Provider value={value}>{children}</GateContext.Provider>;
}

export function useGate(): GateValue {
  const ctx = useContext(GateContext);
  if (!ctx) throw new Error("useGate must be used within GateProvider");
  return ctx;
}
