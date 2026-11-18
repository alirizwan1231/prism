export type PaletteTokens = {
  bg: string;
  surface: string;
  surface2: string;
  ink: string;
  muted: string;
  accent: string;
  accent2: string;
  onAccent: string;
};

export type Palette = {
  id: string;
  name: string;
  mood: string;
  dark: boolean;
  tokens: PaletteTokens;
};

export const palettes: Palette[] = [
  {
    id: "volt-night",
    name: "Volt Night",
    mood: "Electric dark",
    dark: true,
    tokens: { bg: "#0A0F0A", surface: "#121A12", surface2: "#1A261A", ink: "#F2F5EC", muted: "#9DB08F", accent: "#B8F135", accent2: "#2EF2A0", onAccent: "#0A0F0A" },
  },
  {
    id: "ivory-travertine",
    name: "Ivory Travertine",
    mood: "Warm gallery neutral",
    dark: false,
    tokens: { bg: "#F4EFE6", surface: "#FFFFFF", surface2: "#EAE1D0", ink: "#1C1917", muted: "#7A6F60", accent: "#BC3B24", accent2: "#C8A15A", onAccent: "#FFFFFF" },
  },
  {
    id: "midnight-violet",
    name: "Midnight Violet",
    mood: "Cosmic purple dark",
    dark: true,
    tokens: { bg: "#12081F", surface: "#1D1033", surface2: "#29184A", ink: "#F3EEFF", muted: "#A68FD0", accent: "#A855F7", accent2: "#EC4899", onAccent: "#FFFFFF" },
  },
  {
    id: "ocean-depth",
    name: "Ocean Depth",
    mood: "Deep-sea calm",
    dark: true,
    tokens: { bg: "#06202B", surface: "#0B3040", surface2: "#114155", ink: "#EAF7FA", muted: "#8FB8C4", accent: "#38BDF8", accent2: "#2DD4BF", onAccent: "#06202B" },
  },
  {
    id: "sunset-sorbet",
    name: "Sunset Sorbet",
    mood: "Golden-hour glow",
    dark: false,
    tokens: { bg: "#FFF3E4", surface: "#FFFFFF", surface2: "#FFE3C2", ink: "#33160B", muted: "#96604A", accent: "#FF6B35", accent2: "#FFB703", onAccent: "#FFFFFF" },
  },
  {
    id: "forest-sage",
    name: "Forest Sage",
    mood: "Botanical calm",
    dark: false,
    tokens: { bg: "#EDF2E4", surface: "#FBFDF7", surface2: "#DCE8CC", ink: "#1E2B1A", muted: "#64755A", accent: "#3E7C4F", accent2: "#A9C46B", onAccent: "#FFFFFF" },
  },
  {
    id: "rose-blush",
    name: "Rose Blush",
    mood: "Soft romantic",
    dark: false,
    tokens: { bg: "#FDF0F2", surface: "#FFFFFF", surface2: "#FADCE2", ink: "#33161D", muted: "#96626E", accent: "#E5486C", accent2: "#F2A0B5", onAccent: "#FFFFFF" },
  },
  {
    id: "mono-ink",
    name: "Mono Ink",
    mood: "Pure black & white",
    dark: false,
    tokens: { bg: "#F7F7F5", surface: "#FFFFFF", surface2: "#E8E8E4", ink: "#111111", muted: "#6E6E6A", accent: "#111111", accent2: "#8A8A8A", onAccent: "#FFFFFF" },
  },
  {
    id: "charcoal-gold",
    name: "Charcoal Gold",
    mood: "Luxe after dark",
    dark: true,
    tokens: { bg: "#131313", surface: "#1E1E1E", surface2: "#2A2A2A", ink: "#F5EFE0", muted: "#A79C83", accent: "#D4AF37", accent2: "#8C6D1F", onAccent: "#131313" },
  },
  {
    id: "desert-sand",
    name: "Desert Sand",
    mood: "Sun-baked minimal",
    dark: false,
    tokens: { bg: "#F3E9D7", surface: "#FBF6EC", surface2: "#E7D5B5", ink: "#2E2118", muted: "#8A7157", accent: "#C96F2E", accent2: "#A98A5B", onAccent: "#FFFFFF" },
  },
  {
    id: "crimson-editorial",
    name: "Crimson Editorial",
    mood: "Magazine bold",
    dark: false,
    tokens: { bg: "#FAF6F0", surface: "#FFFFFF", surface2: "#EFE6D8", ink: "#191410", muted: "#7D7264", accent: "#C8102E", accent2: "#E4B15E", onAccent: "#FFFFFF" },
  },
  {
    id: "teal-lagoon",
    name: "Teal Lagoon",
    mood: "Fresh aquatic",
    dark: false,
    tokens: { bg: "#E6F4F1", surface: "#FFFFFF", surface2: "#CBE8E1", ink: "#0C2B26", muted: "#5C7A74", accent: "#0E9594", accent2: "#F2C94C", onAccent: "#FFFFFF" },
  },
  {
    id: "lavender-haze",
    name: "Lavender Haze",
    mood: "Dreamy pastel",
    dark: false,
    tokens: { bg: "#F0EDFA", surface: "#FFFFFF", surface2: "#DED4F5", ink: "#241B3A", muted: "#7A6FA0", accent: "#7C5CD6", accent2: "#B8A9E8", onAccent: "#FFFFFF" },
  },
  {
    id: "sakura",
    name: "Sakura",
    mood: "Cherry-blossom soft",
    dark: false,
    tokens: { bg: "#FFF5F7", surface: "#FFFFFF", surface2: "#FBDCE4", ink: "#33202A", muted: "#96707E", accent: "#E86A92", accent2: "#B56576", onAccent: "#FFFFFF" },
  },
  {
    id: "slate-ember",
    name: "Slate Ember",
    mood: "Navy with fire",
    dark: true,
    tokens: { bg: "#0F172A", surface: "#1E293B", surface2: "#2A3A55", ink: "#E2E8F0", muted: "#8CA0B8", accent: "#F59E0B", accent2: "#38BDF8", onAccent: "#0F172A" },
  },
  {
    id: "matcha",
    name: "Matcha",
    mood: "Earthy green tea",
    dark: false,
    tokens: { bg: "#F1F3E6", surface: "#FCFDF6", surface2: "#E0E5C8", ink: "#232B1B", muted: "#6E7858", accent: "#7A9B3E", accent2: "#D9C98A", onAccent: "#FFFFFF" },
  },
  {
    id: "royal-indigo",
    name: "Royal Indigo",
    mood: "Regal night",
    dark: true,
    tokens: { bg: "#0B1030", surface: "#151B45", surface2: "#202861", ink: "#ECEEFF", muted: "#9298D6", accent: "#6366F1", accent2: "#F472B6", onAccent: "#FFFFFF" },
  },
  {
    id: "peach-cream",
    name: "Peach Cream",
    mood: "Warm & friendly",
    dark: false,
    tokens: { bg: "#FFF1E6", surface: "#FFFFFF", surface2: "#FFDCC4", ink: "#33241A", muted: "#96755F", accent: "#FF8C5A", accent2: "#5FA8A0", onAccent: "#FFFFFF" },
  },
  {
    id: "retro-mustard",
    name: "Retro Mustard",
    mood: "Seventies warmth",
    dark: false,
    tokens: { bg: "#FBF3D9", surface: "#FFFDF4", surface2: "#F2E3AE", ink: "#26200E", muted: "#857644", accent: "#D9930D", accent2: "#B3541E", onAccent: "#FFFFFF" },
  },
  {
    id: "porcelain-sky",
    name: "Porcelain Sky",
    mood: "Clean corporate blue",
    dark: false,
    tokens: { bg: "#EEF4FA", surface: "#FFFFFF", surface2: "#D8E7F3", ink: "#16283C", muted: "#64809C", accent: "#2B6CB0", accent2: "#63B3ED", onAccent: "#FFFFFF" },
  },
];

export const defaultPalette = palettes[0];

export function getPalette(id: string | null | undefined): Palette {
  return palettes.find((p) => p.id === id) ?? defaultPalette;
}

/** CSS variable map for a palette — the single source the whole site paints from. */
export function paletteVars(p: Palette): Record<string, string> {
  const t = p.tokens;
  return {
    "--bg": t.bg,
    "--surface": t.surface,
    "--surface2": t.surface2,
    "--ink": t.ink,
    "--muted": t.muted,
    "--accent": t.accent,
    "--accent2": t.accent2,
    "--on-accent": t.onAccent,
  };
}
