import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ItemCard } from "@/components/Cards";
import { CtaBand } from "@/components/CtaBand";
import { materialCategories } from "@/data/materials";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = { title: pageSeo.materials.title, description: pageSeo.materials.description, alternates: { canonical: "/materials" } };

export default function MaterialsPage() {
  return (
    <>
      <PageHero path="/materials" title="Building materials" intro="Tell us what you need and how much. We reply with availability and a quotation. Prices are not listed online." />
      <section className="section">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {materialCategories.map((m) => (
            <ItemCard key={m.slug} title={m.title} summary={m.summary} image={m.image} ctaLabel="Enquire" />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
