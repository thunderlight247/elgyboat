/**
 * ALL images live here. Every entry below is a TEMPORARY public demo photo (Unsplash).
 * They are NOT Elgyboat's work, staff, products or premises.
 *
 * To replace one: drop the real photo in /public/images and change `src` to "/images/your-file.jpg",
 * then set `demo: false`. Nothing else in the code needs to change.
 * If a remote image ever fails to load, the site shows a branded placeholder instead.
 */
export type SiteImage = { src: string; alt: string; demo: boolean };

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

const site = u("photo-1504307651254-35680f356dfd");
const worker = u("photo-1541888946425-d81bb19240f5");
const structure = u("photo-1503387762-592deb58ef4e");
const tools = u("photo-1621905251189-08b45d6a269e");
const office = u("photo-1486406146926-c627a92ad1ab");
const house = u("photo-1600585154340-be6161a56a0c");
const homeExt = u("photo-1523217582562-09d0def993a6");
const engineers = u("photo-1581094794329-c8112a89af12");

const demo = (src: string, alt: string): SiteImage => ({ src, alt, demo: true });

export const images = {
  hero: demo(site, "Construction site with a crane and workers"),
  about: demo(worker, "Construction worker in a hard hat on site"),
  whyElgyboat: demo(engineers, "Engineers reviewing building plans"),
  quote: demo(structure, "Building under construction"),

  // Pathways
  pathMaterials: demo(tools, "Construction tools and building supplies"),
  pathConstruction: demo(structure, "Building structure under construction"),
  pathRoofing: demo(homeExt, "Finished house with roof"),

  // Materials (shared pool until real photos exist)
  cement: demo(tools, "Cement and masonry work"),
  steel: demo(site, "Steel reinforcement on a construction site"),
  roofing: demo(homeExt, "Roofed residential building"),
  pipes: demo(engineers, "Plumbing and pipework planning"),
  paint: demo(house, "Painted house exterior"),
  tools: demo(tools, "Hand tools for construction"),
  otherMaterials: demo(worker, "Builder handling construction materials"),

  // Services
  buildingConstruction: demo(structure, "Building under construction"),
  civilWorks: demo(site, "Civil works on a large site"),
  roadConstruction: demo(site, "Heavy construction works"),
  projectManagement: demo(engineers, "Project team reviewing plans"),
  consultancy: demo(engineers, "Consultation over building plans"),
  roofingService: demo(homeExt, "House roof"),
  painting: demo(house, "Freshly painted modern house"),
  tiling: demo(house, "Modern interior finishing"),
  woodWorks: demo(worker, "Carpentry and wood work"),
  tintedGlass: demo(office, "Glass facade of a commercial building"),
  popCeiling: demo(house, "Finished interior ceiling"),
  electrical: demo(worker, "Electrical installation work"),
  plumbing: demo(engineers, "Plumbing installation planning"),

  // Projects (showcase placeholders)
  projResidential: demo(house, "Modern residential building"),
  projCommercial: demo(office, "Commercial office building"),
  projIndustrial: demo(site, "Industrial construction site"),
  projRoads: demo(site, "Road and infrastructure works"),
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
