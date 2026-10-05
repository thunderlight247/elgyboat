import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MapSection } from "@/components/MapSection";
import { Button } from "@/components/ui/Button";
import { businessConfig, fullAddress } from "@/data/business";
import { pageSeo } from "@/data/seo";
import { hasEmail, hasPhone, hasWhatsApp, mailHref, telHref, whatsappHref, DEFAULT_ENQUIRY } from "@/lib/contact";

export const metadata: Metadata = { title: pageSeo.contact.title, description: pageSeo.contact.description, alternates: { canonical: "/contact" } };

export default function ContactPage() {
  const row = "border-b border-line py-4";
  const lbl = "text-sm font-semibold text-muted";
  return (
    <>
      <PageHero path="/contact" title="Contact and location" intro="Message us on WhatsApp, call, or visit." />
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <div>
            <dl>
              <div className={row}><dt className={lbl}>Location</dt><dd className="mt-1 text-lg">{fullAddress()}</dd></div>
              <div className={row}>
                <dt className={lbl}>WhatsApp</dt>
                <dd className="mt-1 text-lg">
                  {hasWhatsApp() ? <a className="font-semibold text-teal-deep underline underline-offset-4" href={whatsappHref(DEFAULT_ENQUIRY)} target="_blank" rel="noopener noreferrer">Start a chat</a> : "Number to be confirmed"}
                </dd>
              </div>
              <div className={row}>
                <dt className={lbl}>Phone</dt>
                <dd className="mt-1 text-lg">{hasPhone() ? <a className="font-semibold text-teal-deep underline underline-offset-4" href={telHref()}>{businessConfig.phone}</a> : "Number to be confirmed"}</dd>
              </div>
              <div className={row}>
                <dt className={lbl}>Email</dt>
                <dd className="mt-1 text-lg">{hasEmail() ? <a className="font-semibold text-teal-deep underline underline-offset-4" href={mailHref()}>{businessConfig.email}</a> : "To be confirmed"}</dd>
              </div>
              {businessConfig.hours && (
                <div className={row}>
                  <dt className={lbl}>Opening hours</dt>
                  <dd className="mt-1 text-lg">{businessConfig.hours.map((h) => <p key={h.label}>{h.label}: {h.value}</p>)}</dd>
                </div>
              )}
            </dl>
            <Button href="/quote" className="mt-8 w-full sm:w-auto">Request a Quote</Button>
          </div>
          <MapSection />
        </div>
      </section>
    </>
  );
}
