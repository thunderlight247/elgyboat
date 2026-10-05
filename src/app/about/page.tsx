import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SmartImage } from "@/components/SmartImage";
import { CtaBand } from "@/components/CtaBand";
import { businessConfig, fullAddress } from "@/data/business";
import { aboutContent, audiences } from "@/data/about";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = { title: pageSeo.about.title, description: pageSeo.about.description, alternates: { canonical: "/about" } };

export default function AboutPage() {
  return (
    <>
      <PageHero path="/about" title="About Elgyboat Enterprise" intro={`${businessConfig.positioning}, based in ${businessConfig.address.locality}.`} />

      <section className="section">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading title="Who we are" />
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                {businessConfig.name} is a Ghanaian building solutions company based in {fullAddress()}. We supply building materials and
                provide construction, roofing, civil engineering and finishing services.
              </p>
              <p>Our aim is to give customers one dependable place to get materials and skilled building services for their project.</p>
              {aboutContent.story && <p>{aboutContent.story}</p>}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-mist">
            <SmartImage name="about" sizes="(min-width: 1024px) 36rem, 92vw" />
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-page">
          <SectionHeading title="Who we serve" />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a) => (
              <li key={a.title} className="rounded-md border border-line bg-white p-5">
                <h3 className="text-lg font-bold">{a.title}</h3>
                <p className="mt-2 text-muted">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {(aboutContent.mission || aboutContent.vision || aboutContent.values || aboutContent.experience) && (
        <section className="section">
          <div className="container-page grid gap-8 md:grid-cols-2">
            {aboutContent.mission && <div><h2 className="text-2xl font-bold">Mission</h2><p className="mt-3 text-muted">{aboutContent.mission}</p></div>}
            {aboutContent.vision && <div><h2 className="text-2xl font-bold">Vision</h2><p className="mt-3 text-muted">{aboutContent.vision}</p></div>}
            {aboutContent.experience && <div><h2 className="text-2xl font-bold">Experience</h2><p className="mt-3 text-muted">{aboutContent.experience}</p></div>}
            {aboutContent.values && (
              <div><h2 className="text-2xl font-bold">Values</h2><ul className="mt-3 list-disc pl-5 text-muted">{aboutContent.values.map((v) => <li key={v}>{v}</li>)}</ul></div>
            )}
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
