// Domain types for the Q4 Playbook. Content is filled with placeholder copy for now,
// but the shape is final so real content drops in without touching components.

export type MarketId = "uk" | "fr" | "es";
export type Locale = "en" | "fr" | "es";

export type VisualSlot = { label: string; src?: string };

export type Tip = {
  title: string;
  paragraphs: string[];
  visuals: VisualSlot[];
};

export type PartnerAuthor = {
  name: string;
  role: string; // job title
  photo?: string; // path to a real headshot; falls back to a placeholder avatar
};

export type Partner = {
  name: string;
  pitch: string;
  url: string;
  tips: Tip[];
  logo?: string; // path to a real logo image; falls back to a colored initial tile
  keyStat?: KeyStat; // dual-partner steps: each partner brings its own key stat
  author?: PartnerAuthor; // the expert who contributes the tips (placeholder until provided)
};

// Two shapes for the dark "number that matters" card:
//  - figure mode: a standalone big number (value + unit + prefix) with a caption (label)
//  - sentence mode: a full statement with a highlighted number inside it
export type KeyStat = {
  value?: number;
  unit?: string;
  prefix?: string;
  label?: string;
  statement?: string; // sentence mode: full sentence to display
  highlight?: string; // sentence mode: the substring to emphasize (e.g. "36%")
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
