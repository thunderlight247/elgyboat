import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = { title: pageSeo.quote.title, description: pageSeo.quote.description, alternates: { canonical: "/quote" } };

export default function QuotePage({ searchParams }: { searchParams: { item?: string } }) {
  const item = typeof searchParams.item === "string" ? searchParams.item.slice(0, 80) : undefined;
  return (
    <>
      <PageHero path="/quote" title="Request a quote" intro="Three short answers are enough to start: your name, your phone number and what you need." />
      <section className="section">
        <div className="container-page max-w-3xl">
          <QuoteForm initialItem={item} />
        </div>
      </section>
    </>
  );
}
