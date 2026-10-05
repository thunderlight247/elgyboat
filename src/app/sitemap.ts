import type { MetadataRoute } from "next";
import { businessConfig } from "@/data/business";

const paths = ["", "/about", "/services", "/materials", "/projects", "/why-elgyboat", "/quote", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({
    url: `${businessConfig.website}${p}`,
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p === "/quote" ? 0.9 : 0.7,
  }));
}
