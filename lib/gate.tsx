"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { captureAttribution } from "./attribution";

// Central gate logic. Every lock / wall / unlock check goes through useGate(),
// so the dev bypass flag and the unlock state live in exactly one place.
//
// NEXT_PUBLIC_GATE_ENABLED:
//   "false" -> gate fully disabled (dev): everything is accessible, no wall, no locks.
//   anything else / unset -> gate active (default, production).
const GATE_ENABLED = process.env.NEXT_PUBLIC_GATE_ENABLED !== "false";

const STORAGE_KEY = "q4-playbook-unlocked";
// Once a visitor submits the form, remember it across sessions (localStorage)
// for this long, so they are not asked to fill it again on later visits.
const UNLOCK_TTL_MS = 90 * 24 * 60 * 60 * 1000; // 90 days

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

  // First-touch capture of partner / UTM attribution from the landing URL,
  // independent of the gate (runs even when the gate is disabled).
  useEffect(() => {
    captureAttribution();
  }, []);

  // Restore a previous unlock (persists across sessions via localStorage, for
  // UNLOCK_TTL_MS), so a visitor who already filled the form isn't asked again.
  useEffect(() => {
    if (!GATE_ENABLED) return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const ts = Number(raw);
        if (Number.isFinite(ts) && Date.now() - ts < UNLOCK_TTL_MS) setUnlocked(true);
        else localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      /* localStorage unavailable (privacy mode) */
    }
  }, []);

  const unlock = useCallback(() => {
    setUnlocked(true);
    setJustUnlocked(true);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
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
