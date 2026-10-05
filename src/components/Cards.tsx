import Link from "next/link";
import { SmartImage } from "./SmartImage";
import type { ImageKey } from "@/data/images";

const quoteHref = (item: string) => `/quote?item=${encodeURIComponent(item)}`;

type CardProps = { title: string; summary: string; image: ImageKey; ctaLabel?: string };

/** Used for service items and material categories. */
export function ItemCard({ title, summary, image, ctaLabel = "Request a quote" }: CardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-line bg-white">
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <SmartImage
          name={image}
          sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 92vw"
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-muted">{summary}</p>
        <Link
          href={quoteHref(title)}
          className="mt-4 inline-flex min-h-11 items-center font-semibold text-teal-deep underline decoration-teal/50 underline-offset-4 hover:text-navy"
        >
          {ctaLabel}
          <span className="sr-only">: {title}</span>
        </Link>
      </div>
    </article>
  );
}

/** Large image card used for the three homepage pathways. */
export function PathwayCard({
  title, summary, image, href, cta,
}: { title: string; summary: string; image: ImageKey; href: string; cta: string }) {
  return (
    <Link href={href} className="group relative block overflow-hidden rounded-md bg-ink">
      <div className="relative aspect-[4/5] sm:aspect-[3/4]">
        <SmartImage
          name={image}
          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 33vw, 92vw"
          className="opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/80 to-transparent p-5 pt-16 text-white">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 leading-relaxed text-white/85">{summary}</p>
        <span className="mt-3 inline-block font-semibold text-teal-soft underline underline-offset-4 group-hover:text-white">
          {cta}
        </span>
      </div>
    </Link>
  );
}

export function ProjectCard({ title, description, image }: { title: string; description: string; image: ImageKey }) {
  return (
    <article className="group overflow-hidden rounded-md border border-line bg-white">
      <div className="relative aspect-[16/10] overflow-hidden bg-mist">
        <SmartImage
          name={image}
          sizes="(min-width: 1024px) 34rem, (min-width: 640px) 45vw, 92vw"
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 leading-relaxed text-muted">{description}</p>
      </div>
    </article>
  );
}
