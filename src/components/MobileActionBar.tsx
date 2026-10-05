"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { hasPhone, hasWhatsApp, telHref, whatsappHref, DEFAULT_ENQUIRY } from "@/lib/contact";

/** Sticky bottom actions on phones only. Hidden on the quote page, where the form is the action. */
export function MobileActionBar() {
  const pathname = usePathname();
  if (pathname.startsWith("/quote")) return null;

  const base = "flex min-h-12 flex-1 items-center justify-center rounded-md px-3 text-base font-semibold";
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white px-3 pt-2 md:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2">
        {hasPhone() && (
          <a href={telHref()} className={`${base} border border-navy text-navy`}>Call</a>
        )}
        {hasWhatsApp() && (
          <a href={whatsappHref(DEFAULT_ENQUIRY)} target="_blank" rel="noopener noreferrer" className={`${base} border border-teal-deep text-teal-deep`}>
            WhatsApp
          </a>
        )}
        <Link href="/quote" className={`${base} bg-navy text-white`}>Request a Quote</Link>
      </div>
    </div>
  );
}
