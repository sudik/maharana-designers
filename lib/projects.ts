export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Renovation"
  | "Office";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  area?: string;
  duration?: string;
  style: string;
  coverImage: string;
  gallery: string[];
  excerpt: string;
  clientQuote?: {
    text: string;
    author: string;
  };
};

const project = (file: string) => `/images/projects/${file}`;

// Real completed work by Maharana Designers. Area/duration are left blank
// where the exact figures weren't available — fill in once confirmed rather
// than guessing, since these are real client projects, not placeholders.
// Order is newest-first — the home page's "Selected Work" section and the
// portfolio grid both take this array as-is, so the latest projects lead.
export const projects: Project[] = [
  {
    slug: "2bhk-residence",
    title: "Kumar Prajwal",
    category: "Residential",
    location: "Pune, India",
    style: "Contemporary 2BHK",
    coverImage: project("2bhk-residence/01-living-room.jpg"),
    gallery: [
      project("2bhk-residence/02-living-pooja-unit.jpg"),
      project("2bhk-residence/03-balcony.jpg"),
      project("2bhk-residence/04-kitchen.jpg"),
      project("2bhk-residence/05-bedroom-one.jpg"),
      project("2bhk-residence/06-bedroom-two.jpg"),
    ],
    excerpt:
      "A compact 2BHK built around fluted marble panelling and a city-view balcony — a built-in pooja unit, L-shaped kitchen, and two distinct bedroom moods round out the home.",
  },
  {
    slug: "modi-residence",
    title: "Myntra Mesmar",
    category: "Residential",
    location: "Pune, India",
    style: "Duplex 3BHK, Vastu-Compliant",
    coverImage: project("modi-residence/02-living-room.jpg"),
    gallery: [
      project("modi-residence/01-main-entry.jpg"),
      project("modi-residence/03-kitchen.jpg"),
      project("modi-residence/04-ground-floor-bedroom.jpg"),
      project("modi-residence/05-first-floor-lounge.jpg"),
      project("modi-residence/06-kids-bedroom.jpg"),
    ],
    excerpt:
      "A duplex 3BHK planned end-to-end per Vastu — a double-height living room anchors the ground floor, with a first-floor lounge, study nook, and a playful kids' bedroom upstairs.",
  },
  {
    slug: "datta-restaurant",
    title: "Bottom Up",
    category: "Commercial",
    location: "Pune, India",
    style: "Warm Industrial Dining",
    coverImage: project("datta-restaurant/02-dining-area.jpg"),
    gallery: [
      project("datta-restaurant/01-booth-seating.jpg"),
      project("datta-restaurant/03-dining-wide.jpg"),
      project("datta-restaurant/04-bar-display.jpg"),
    ],
    excerpt:
      "A full-service restaurant fit-out — tufted booth seating, a lit display bar, and patterned ceiling work built for comfortable, long dinners.",
  },
  {
    slug: "mukesh-office",
    title: "Surekh Developers",
    category: "Office",
    location: "Pune, India",
    style: "Loft Workspace",
    coverImage: project("mukesh-office/01-loft-staircase.jpg"),
    gallery: [
      project("mukesh-office/02-reception.jpg"),
      project("mukesh-office/03-mezzanine-desk.jpg"),
    ],
    excerpt:
      "A compact double-height office built around a mezzanine level — exposed concrete, warm wood slatting, and a reception that doubles as a lounge.",
  },
  {
    slug: "residence-teal-wood",
    title: "The Teal & Wood Residence",
    category: "Residential",
    location: "Pune, India",
    style: "Warm Contemporary",
    coverImage: project("residence-teal-wood/01-living-room.jpg"),
    gallery: [
      project("residence-teal-wood/02-entryway.jpg"),
      project("residence-teal-wood/03-dining-room.jpg"),
      project("residence-teal-wood/04-home-theatre.jpg"),
    ],
    excerpt:
      "A family home carried by a teal feature wall and warm wood detailing — from a sculpted entryway foyer through to a dedicated home theatre.",
  },
  {
    slug: "residence-white-marble",
    title: "The White Marble Residence",
    category: "Residential",
    location: "Pune, India",
    style: "Minimalist Luxury",
    coverImage: project("residence-white-marble/01-living-room.jpg"),
    gallery: [project("residence-white-marble/02-kitchen.jpg")],
    excerpt:
      "A bright, marble-floored home built on quiet material contrast — a glossy white living room paired with a soft blush modular kitchen.",
  },
  {
    slug: "residence-purple-modern",
    title: "The Modern Bedroom Suite",
    category: "Renovation",
    location: "Pune, India",
    style: "Contemporary Bedroom Design",
    coverImage: project("residence-purple-modern/01-bedroom-study.jpg"),
    gallery: [
      project("residence-purple-modern/02-bedroom-wardrobe.jpg"),
      project("residence-purple-modern/03-master-bedroom.jpg"),
    ],
    excerpt:
      "A pair of bedroom suites reworked with custom wardrobes, built-in study nooks, and a restrained material palette of blush, wood, and white.",
  },
];

export const categories: ProjectCategory[] = [
  "Residential",
  "Commercial",
  "Renovation",
  "Office",
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
