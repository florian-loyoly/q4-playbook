// Domain types for the Q4 Playbook. Content is filled with placeholder copy for now,
// but the shape is final so real content drops in without touching components.

export type MarketId = "uk" | "fr" | "es";
export type Locale = "en" | "fr" | "es";

export type VisualSlot = { label: string };

export type Tip = {
  title: string;
  paragraphs: string[];
  visuals: VisualSlot[];
};

export type Partner = {
  name: string;
  pitch: string;
  url: string;
  tips: Tip[];
};

export type KeyStat = {
  value: number;
  unit: string;
  prefix?: string;
  label: string;
  source: string;
};

// Shared, market-independent metadata for a stage.
export type StepMeta = {
  order: number;
  slug: string; // stable across markets, so switching market keeps position
  accent: string;
  icon: string;
  dual?: boolean;
  loyoly?: boolean;
};

// A stage resolved for a given market (meta + localized content).
export type Step = StepMeta & {
  title: string;
  teaser: string;
  keyStat: KeyStat;
  partners: Partner[];
  isFree: boolean; // true only for stage 1
};

export type MarketMeta = {
  id: MarketId;
  locale: Locale;
  flag: string;
  label: string;
};

export type UIStrings = Record<string, string>;
