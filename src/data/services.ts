import type { ImageKey } from "./images";

export type Service = { slug: string; title: string; summary: string; image: ImageKey };
export type ServiceGroup = { id: string; title: string; intro: string; services: Service[] };

// Wording is deliberately neutral: it describes the service category, not specific claims.
export const serviceGroups: ServiceGroup[] = [
  {
    id: "construction-civil",
    title: "Construction & Civil Works",
    intro: "Building and infrastructure work for residential, commercial and larger projects.",
    services: [
      { slug: "building-construction", title: "Building Construction", summary: "Construction of residential and commercial buildings.", image: "buildingConstruction" },
      { slug: "civil-works", title: "Civil Works", summary: "Civil engineering works for buildings and infrastructure.", image: "civilWorks" },
      { slug: "road-construction", title: "Road Construction", summary: "Road and infrastructure works.", image: "roadConstruction" },
      { slug: "project-management", title: "Project Management", summary: "Coordination of your project from planning through delivery.", image: "projectManagement" },
      { slug: "consultancy", title: "Consultancy", summary: "Practical advice before you start building.", image: "consultancy" },
    ],
  },
  {
    id: "roofing-finishing",
    title: "Roofing & Finishing",
    intro: "Roofing and finishing work to complete a building properly.",
    services: [
      { slug: "roofing", title: "Roofing", summary: "Roofing installation and related works.", image: "roofingService" },
      { slug: "painting", title: "Painting", summary: "Interior and exterior painting.", image: "painting" },
      { slug: "tiling", title: "Tiling", summary: "Floor and wall tiling.", image: "tiling" },
      { slug: "wood-works", title: "Wood Works", summary: "Carpentry and wood works for buildings.", image: "woodWorks" },
      { slug: "tinted-glass", title: "Tinted Glass", summary: "Tinted glass fittings.", image: "tintedGlass" },
      { slug: "pop-ceiling", title: "P.O.P. Ceiling", summary: "Plaster of Paris ceiling work.", image: "popCeiling" },
    ],
  },
  {
    id: "building-systems",
    title: "Building Systems",
    intro: "Essential services that make a building work.",
    services: [
      { slug: "electrical-works", title: "Electrical Works", summary: "Electrical installation for buildings.", image: "electrical" },
      { slug: "plumbing", title: "Plumbing", summary: "Plumbing installation and pipework.", image: "plumbing" },
    ],
  },
];

export const allServices = serviceGroups.flatMap((g) => g.services);

// Other scope items mentioned in Elgyboat's materials; confirm before featuring.
export const otherScope = ["Renovation and remodeling", "Real estate development", "Welding"];
