import type { ImageKey } from "./images";

export type ProjectCategory = { slug: string; title: string; description: string; image: ImageKey };

// Category-level showcase only. Add real project entries (name, place, year, photos)
// to `projects` once Elgyboat supplies them; the page already supports them.
export const projectCategories: ProjectCategory[] = [
  { slug: "residential", title: "Residential", description: "Homes and residential buildings, from foundation to finishing.", image: "projResidential" },
  { slug: "commercial", title: "Commercial", description: "Shops, offices and other commercial buildings.", image: "projCommercial" },
  { slug: "industrial", title: "Industrial", description: "Larger works for industrial and institutional clients.", image: "projIndustrial" },
  { slug: "roads-infrastructure", title: "Roads & Infrastructure", description: "Road construction and civil infrastructure.", image: "projRoads" },
];

export type Project = {
  title: string;
  category: ProjectCategory["slug"];
  location: string;
  summary: string;
  image: ImageKey;
};

/** Empty until real projects are supplied. Do not add demo entries. */
export const projects: Project[] = [];
