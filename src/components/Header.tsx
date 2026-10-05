"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, footerNav } from "@/data/navigation";
import { businessConfig } from "@/data/business";
import { Button } from "./ui/Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const mobileLinks = footerNav.filter((l) => l.href !== "/quote");

  return (
    <header className={`sticky top-0 z-40 bg-white ${scrolled ? "border-b border-line shadow-sm" : "border-b border-transparent"}`}>
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Link href="/" aria-label={`${businessConfig.name} home`} className="flex shrink-0 items-center">
          <Image src="/logo.png" alt={`${businessConfig.name} logo`} width={683} height={636} priority className="h-11 w-auto md:h-12" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`rounded px-3 py-2 text-[0.95rem] font-semibold transition-colors hover:text-teal-deep ${isActive(l.href) ? "text-teal-deep" : "text-ink"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/quote" className="hidden !min-h-11 !px-5 sm:inline-flex">Request a Quote</Button>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-white lg:hidden">
          <ul className="container-page py-2">
            {mobileLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`flex min-h-12 items-center border-b border-line/70 text-lg font-semibold ${isActive(l.href) ? "text-teal-deep" : "text-ink"}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <Button href="/quote" className="w-full">Request a Quote</Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
