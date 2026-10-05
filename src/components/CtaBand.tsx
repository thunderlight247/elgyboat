import { FanMark } from "./FanMark";
import { Button } from "./ui/Button";
import { businessConfig } from "@/data/business";
import { hasWhatsApp, whatsappHref, DEFAULT_ENQUIRY } from "@/lib/contact";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <FanMark className="pointer-events-none absolute -bottom-8 right-2 h-52 w-52 opacity-30 md:right-20 md:h-80 md:w-80" />
      <div className="container-page relative py-14 md:py-20">
        <h2 className="max-w-2xl text-3xl font-extrabold leading-tight md:text-4xl">
          Planning to build, roof or renovate?
        </h2>
        <p className="mt-3 max-w-xl text-lg text-white/85">
          Tell {businessConfig.shortName} what you need. Your request goes straight to WhatsApp.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button href="/quote" variant="teal">Request a Quote</Button>
          {hasWhatsApp() ? (
            <Button href={whatsappHref(DEFAULT_ENQUIRY)} variant="outlineLight" external>Chat on WhatsApp</Button>
          ) : (
            <Button href="/contact" variant="outlineLight">Contact us</Button>
          )}
        </div>
      </div>
    </section>
  );
}
