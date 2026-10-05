import Link from "next/link";
import type { ReactNode } from "react";
import { FanMark } from "./FanMark";
import { JsonLd } from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export function PageHero({ title, intro, path }: { title: string; intro: ReactNode; path: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <JsonLd data={breadcrumbJsonLd([{ name: title, path }])} />
      <FanMark className="pointer-events-none absolute -bottom-6 right-4 h-48 w-48 opacity-25 md:right-16 md:h-72 md:w-72" />
      <div className="container-page relative py-14 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-5 text-sm text-white/70">
          <Link href="/" className="underline-offset-4 hover:underline">Home</Link>
          <span aria-hidden="true" className="mx-2">/</span>
          <span aria-current="page">{title}</span>
        </nav>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</p>
      </div>
    </section>
  );
}
