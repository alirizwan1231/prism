export const marqueeItems = [
  "Branding",
  "Web Design",
  "Motion",
  "E-commerce",
  "Art Direction",
  "Design Systems",
  "Typography",
  "Interaction",
];

export type Service = {
  icon: string;
  title: string;
  desc: string;
  points: string[];
};

export const services: Service[] = [
  {
    icon: "prism",
    title: "Brand Identity",
    desc: "Logos, colour systems and voice — identities built as flexible systems, not one-off marks.",
    points: ["Logo & marks", "Colour systems", "Brand guidelines"],
  },
  {
    icon: "layout",
    title: "Web Design",
    desc: "Marketing sites and product interfaces with poster-level typography and precision grids.",
    points: ["Marketing sites", "Product UI", "Landing pages"],
  },
  {
    icon: "bag",
    title: "E-commerce",
    desc: "Storefronts that feel like flagship stores — fast, tactile and built to convert.",
    points: ["Storefront design", "Checkout flows", "Product storytelling"],
  },
  {
    icon: "play",
    title: "Motion & Interaction",
    desc: "Scroll stories, micro-interactions and transitions that make a brand feel alive.",
    points: ["Scroll animation", "Micro-interactions", "Prototyping"],
  },
  {
    icon: "compass",
    title: "Art Direction",
    desc: "A strong visual point of view across campaigns, photography and social — one unmistakable look.",
    points: ["Campaigns", "Photo direction", "Social kits"],
  },
  {
    icon: "grid",
    title: "Design Systems",
    desc: "Token-driven component libraries so every screen your team ships stays on-brand.",
    points: ["Design tokens", "Component libraries", "Documentation"],
  },
];

export type Project = {
  title: string;
  category: string;
  year: string;
  paletteId: string;
  blurb: string;
  motif: "rings" | "bars" | "orb" | "steps";
};

export const projects: Project[] = [
  {
    title: "NOIR Coffee Roasters",
    category: "Brand Identity",
    year: "2025",
    paletteId: "charcoal-gold",
    blurb: "A after-dark identity for a specialty roaster — gold foil, deep charcoal, zero noise.",
    motif: "rings",
  },
  {
    title: "Lagoon Bank",
    category: "Web Design · Fintech",
    year: "2025",
    paletteId: "ocean-depth",
    blurb: "A calm, deep-sea banking experience that made finance feel like a holiday.",
    motif: "bars",
  },
  {
    title: "Sorbet Skincare",
    category: "E-commerce",
    year: "2024",
    paletteId: "sunset-sorbet",
    blurb: "Golden-hour gradients and juicy type for a skincare label that sells out drops.",
    motif: "orb",
  },
  {
    title: "Violet Records",
    category: "Art Direction",
    year: "2024",
    paletteId: "midnight-violet",
    blurb: "Cosmic violet artwork and a site that pulses in time with the music.",
    motif: "steps",
  },
];

export const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We dig into your market, audience and rivals — and find the colour of the opportunity.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Identity and interface concepts, presented as living prototypes you can click, not PDFs.",
  },
  {
    n: "03",
    title: "Develop",
    desc: "Pixel-faithful builds with motion baked in — fast, accessible and easy to update.",
  },
  {
    n: "04",
    title: "Deploy",
    desc: "Launch, measure, refine. We stay on for the first season of growth after go-live.",
  },
];

export type Tier = {
  name: string;
  price: string;
  unit: string;
  desc: string;
  featured?: boolean;
  features: string[];
};

export const tiers: Tier[] = [
  {
    name: "Launch",
    price: "$1.9k",
    unit: "from / project",
    desc: "A sharp one-page presence for new brands that need to look established, fast.",
    features: ["Logo refresh & palette", "One-page website", "Copy polish", "2 revision rounds", "Launch in 2 weeks"],
  },
  {
    name: "Studio",
    price: "$3.9k",
    unit: "from / project",
    desc: "The full identity + website package most growing brands choose.",
    featured: true,
    features: ["Complete brand identity", "Multi-page website", "Motion & interaction pass", "Design system starter kit", "4 revision rounds", "Launch in 4 weeks"],
  },
  {
    name: "Scale",
    price: "$7.5k",
    unit: "from / project",
    desc: "Identity, site, store and systems — a design department in a box.",
    features: ["Everything in Studio", "E-commerce storefront", "Full design system & tokens", "Campaign art direction", "Priority support, 90 days"],
  },
];

export const testimonials = [
  {
    quote:
      "PRISM rebuilt our identity and site in a month. The palette system alone ended years of off-brand decks — everything finally looks like one company.",
    name: "Maya Chen",
    role: "CMO, Lagoon Bank",
  },
  {
    quote:
      "They think in colour the way other studios think in wireframes. Our launch drop sold out in nine hours, and the site never broke a sweat.",
    name: "Diego Alvarez",
    role: "Founder, Sorbet Skincare",
  },
  {
    quote:
      "Every review felt like unwrapping something. Bold type, strange beautiful colour, and a process so clear we never once asked 'what happens next?'",
    name: "Amara Okafor",
    role: "Creative Director, Violet Records",
  },
];

export const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "14", label: "Design awards" },
  { value: "9 yrs", label: "Studio running" },
  { value: "20", label: "Palettes on this page" },
];
