import type { ImageKey } from "./images";

export type MaterialCategory = { slug: string; title: string; summary: string; image: ImageKey };

// Enquiry-driven: no prices, no stock counts. Add or remove categories freely.
// TO CONFIRM: which of these Elgyboat currently supplies.
export const materialCategories: MaterialCategory[] = [
  { slug: "cement", title: "Cement", summary: "Cement for foundations, blockwork, plastering and general building.", image: "cement" },
  { slug: "steel-iron-rods", title: "Steel & Iron Rods", summary: "Iron rods and steel products for reinforcement and structural work.", image: "steel" },
  { slug: "roofing-materials", title: "Roofing Materials", summary: "Roofing materials for new builds and replacements.", image: "roofing" },
  { slug: "pipes-plumbing", title: "Pipes & Plumbing", summary: "Pipes and fittings for water and drainage.", image: "pipes" },
  { slug: "paint-finishing", title: "Paint & Finishing", summary: "Paint and finishing supplies for inside and outside walls.", image: "paint" },
  { slug: "construction-tools", title: "Construction Tools", summary: "Tools and fasteners, including nails, for site and workshop.", image: "tools" },
  { slug: "other-materials", title: "Other Building Materials", summary: "Need something not listed? Ask, and we will tell you what is available.", image: "otherMaterials" },
];
