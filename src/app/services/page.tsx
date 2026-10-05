import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ItemCard } from "@/components/Cards";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { serviceGroups, otherScope } from "@/data/services";
import { pageSeo } from "@/data/seo";
import { servicesJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = { title: pageSeo.services.title, description: pageSeo.services.description, alternates: { canonical: "/services" } };

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd()} />
      <PageHero path="/services" title="Construction, roofing and building services" intro="Choose a service to request a quotation. If your project spans several, one request covers them all." />
      {serviceGroups.map((g, i) => (
        <section key={g.id} id={g.id} className={`section ${i % 2 === 1 ? "bg-mist" : ""}`}>
          <div className="container-page">
            <SectionHeading title={g.title} intro={g.intro} />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.services.map((s) => <ItemCard key={s.slug} title={s.title} summary={s.summary} image={s.image} />)}
            </div>
          </div>
        </section>
      ))}
      <section className="section">
        <div className="container-page">
          <p className="max-w-2xl text-lg text-muted">
            Also part of our scope: {otherScope.join(", ").toLowerCase()}. Ask us about these when you request a quote.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
