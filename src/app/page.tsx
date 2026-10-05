import Link from "next/link";
import { SmartImage } from "@/components/SmartImage";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ItemCard, PathwayCard, ProjectCard } from "@/components/Cards";
import { ReviewsPanel } from "@/components/ReviewsPanel";
import { MapSection } from "@/components/MapSection";
import { CtaBand } from "@/components/CtaBand";
import { businessConfig } from "@/data/business";
import { materialCategories } from "@/data/materials";
import { serviceGroups } from "@/data/services";
import { projectCategories } from "@/data/projects";

const reasons = [
  { title: "Materials and services in one place", text: "Source building materials and arrange construction, roofing or finishing with the same company." },
  { title: "A simple way to ask", text: "Describe what you need once. Your request arrives on WhatsApp, ready to answer." },
  { title: "Based in Techiman", text: "A local business serving Techiman and the wider Bono East region." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 -z-10">
          <SmartImage name="hero" sizes="100vw" priority className="opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent md:hidden" />
        </div>
        <div className="container-page flex min-h-[34rem] flex-col justify-center py-16 md:min-h-[38rem] md:py-24">
          <p className="hero-in inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-3.5 py-1.5 text-sm font-semibold" style={{ animationDelay: "0ms" }}>
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-teal" />
            Techiman, Bono East, Ghana
          </p>
          <h1 className="hero-in mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl md:text-6xl" style={{ animationDelay: "90ms" }}>
            {businessConfig.tagline}
          </h1>
          <p className="hero-in mt-5 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl" style={{ animationDelay: "180ms" }}>
            {businessConfig.name} supplies building materials and delivers construction, roofing and related building solutions.
          </p>
          <div className="hero-in mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "270ms" }}>
            <Button href="/quote" variant="teal">Request a Quote</Button>
            <Button href="/services" variant="outlineLight">Explore Our Services</Button>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="section">
        <div className="container-page">
          <SectionHeading title="What can we help you with?" intro="Choose the closest match. You can refine your request later." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <PathwayCard title="Building Materials" summary="Construction materials and supplies for your next project." image="pathMaterials" href="/materials" cta="See materials" />
            <PathwayCard title="Construction & Civil Works" summary="Building and infrastructure solutions for residential, commercial and larger projects." image="pathConstruction" href="/services#construction-civil" cta="See construction services" />
            <PathwayCard title="Roofing & Finishing" summary="Roofing and related finishing solutions for complete building projects." image="pathRoofing" href="/services#roofing-finishing" cta="See roofing and finishing" />
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="section bg-mist">
        <div className="container-page">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading title="Building materials" intro="Ask for what your project needs. We reply with availability and a quotation." />
            <Link href="/materials" className="inline-flex min-h-11 items-center font-semibold text-teal-deep underline underline-offset-4 hover:text-navy">View all categories</Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {materialCategories.slice(0, 6).map((m) => (
              <ItemCard key={m.slug} title={m.title} summary={m.summary} image={m.image} ctaLabel="Enquire" />
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section">
        <div className="container-page">
          <SectionHeading title="Our services" intro="From the first foundation to the final coat of paint." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {serviceGroups.map((g) => (
              <div key={g.id} className="rounded-md border border-line bg-white p-6">
                <h3 className="text-xl font-bold">{g.title}</h3>
                <p className="mt-2 text-muted">{g.intro}</p>
                <ul className="mt-4 space-y-1.5">
                  {g.services.map((s) => (
                    <li key={s.slug} className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      {s.title}
                    </li>
                  ))}
                </ul>
                <Link href={`/services#${g.id}`} className="mt-5 inline-flex min-h-11 items-center font-semibold text-teal-deep underline underline-offset-4 hover:text-navy">
                  Learn more<span className="sr-only"> about {g.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section bg-ink text-white">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading light title="Why customers choose to enquire with us" intro="Plain information, a local team and an easy first step." />
          <ul className="grid gap-6">
            {reasons.map((r) => (
              <li key={r.title} className="border-l-4 border-teal pl-5">
                <h3 className="text-xl font-bold">{r.title}</h3>
                <p className="mt-1 leading-relaxed text-white/80">{r.text}</p>
              </li>
            ))}
            <li><Link href="/why-elgyboat" className="inline-flex min-h-11 items-center font-semibold text-teal-soft underline underline-offset-4 hover:text-white">More about Elgyboat</Link></li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading title="Project showcase" intro="The kinds of work Elgyboat takes on." />
            <Link href="/projects" className="inline-flex min-h-11 items-center font-semibold text-teal-deep underline underline-offset-4 hover:text-navy">See all categories</Link>
          </div>
          <p className="mt-3 text-sm text-muted">Project showcase: images to be replaced with Elgyboat&apos;s actual project portfolio.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {projectCategories.map((p) => <ProjectCard key={p.slug} title={p.title} description={p.description} image={p.image} />)}
          </div>
        </div>
      </section>

      {/* Reviews + map */}
      <section className="section bg-mist">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="What customers say" />
            <div className="mt-6"><ReviewsPanel /></div>
          </div>
          <div>
            <SectionHeading title="Find us" intro="Techiman, Bono East, Ghana." />
            <div className="mt-6"><MapSection /></div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
