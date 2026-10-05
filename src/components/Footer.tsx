import Image from "next/image";
import Link from "next/link";
import { businessConfig, fullAddress } from "@/data/business";
import { footerNav } from "@/data/navigation";
import { hasEmail, hasPhone, hasWhatsApp, mailHref, telHref, whatsappHref, DEFAULT_ENQUIRY } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="inline-block rounded-md bg-white p-3">
            <Image src="/logo.png" alt={`${businessConfig.name} logo`} width={683} height={636} className="h-16 w-auto" />
          </div>
          <p className="mt-4 text-lg font-semibold text-white">{businessConfig.tagline}</p>
          <p className="mt-2 max-w-sm leading-relaxed">{businessConfig.positioning}.</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-base font-bold text-white">Explore</h2>
          <ul className="mt-3 space-y-1">
            {footerNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-10 items-center hover:text-white hover:underline">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-bold text-white">Contact</h2>
          <ul className="mt-3 space-y-2">
            <li>{fullAddress()}</li>
            {hasPhone() && <li><a className="hover:text-white hover:underline" href={telHref()}>{businessConfig.phone}</a></li>}
            {hasWhatsApp() && (
              <li><a className="hover:text-white hover:underline" href={whatsappHref(DEFAULT_ENQUIRY)} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a></li>
            )}
            {hasEmail() && <li><a className="hover:text-white hover:underline" href={mailHref()}>{businessConfig.email}</a></li>}
            <li><a className="hover:text-white hover:underline" href={businessConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-1 py-5 text-sm text-white/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {businessConfig.name}. All rights reserved.</p>
          <p>Concept preview. Photos are temporary and will be replaced with Elgyboat&apos;s own.</p>
        </div>
      </div>
    </footer>
  );
}
