import type { ReactNode } from "react";

export function SectionHeading({
  title,
  intro,
  light = false,
  as: Tag = "h2",
}: {
  title: string;
  intro?: ReactNode;
  light?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className="max-w-2xl">
      <Tag className={`text-3xl font-extrabold leading-tight md:text-4xl ${light ? "text-white" : "text-ink"}`}>{title}</Tag>
      {intro && <p className={`mt-3 text-lg leading-relaxed ${light ? "text-white/80" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}
