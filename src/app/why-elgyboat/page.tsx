import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SmartImage } from "@/components/SmartImage";
import { ReviewsPanel } from "@/components/ReviewsPanel";
import { CtaBand } from "@/components/CtaBand";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = { title: pageSeo.why.title, description: pageSeo.why.description, alternates: { canonical: "/why-elgyboat" } };

const points = [
  { title: "Materials and services under one roof", text: "Buy building materials and arrange construction, roofing or finishing without dealing with several suppliers." },
  { title: "A clear scope of work", text: "Construction and civil works, roofing and finishing, and building systems are laid out so you can see where your project fits." },
  { title: "A simple quotation process", text: "Fill in one short form. Your details arrive on WhatsApp, so the conversation starts where you already are." },
  { title: "Local and reachable", text: "Based in Techiman, with phone, WhatsApp and a map to find us." },
];

export default function WhyPage() {
  return (
    <>
      <PageHero path="/why-elgyboat" title="Why Elgyboat" intro="What you can expect when you contact us." />
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <ul className="grid gap-8">
            {points.map((p) => (
              <li key={p.title} className="border-l-4 border-teal pl-5">
                <h2 className="text-2xl font-bold">{p.title}</h2>
                <p className="mt-2 text-lg leading-relaxed text-muted">{p.text}</p>
              </li>
            ))}
          </ul>
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-mist">
            <SmartImage name="whyElgyboat" sizes="(min-width: 1024px) 28rem, 92vw" />
          </div>
        </div>
      </section>
      <section className="section bg-mist">
        <div className="container-page">
          <SectionHeading title="Customer reviews" />
          <div className="mt-6 max-w-3xl"><ReviewsPanel /></div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
