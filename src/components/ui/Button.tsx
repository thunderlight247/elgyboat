import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "teal" | "outline" | "outlineLight";

const styles: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-ink",
  teal: "bg-teal text-ink hover:bg-teal-soft",
  outline: "border border-navy text-navy hover:bg-navy hover:text-white",
  outlineLight: "border border-white/60 text-white hover:bg-white hover:text-ink",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function Button({ href, children, variant = "primary", className = "", external }: Props) {
  const cls = `inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-semibold transition-colors ${styles[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
