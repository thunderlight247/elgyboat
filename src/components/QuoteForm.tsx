"use client";

import { useState } from "react";
import { businessConfig } from "@/data/business";
import { materialCategories } from "@/data/materials";
import { allServices } from "@/data/services";
import { buildQuoteMessage, emptyQuote, type QuoteFields } from "@/lib/quote";
import { hasWhatsApp, whatsappHref } from "@/lib/contact";

const categories = [
  ...materialCategories.map((m) => m.title),
  ...allServices.map((s) => s.title),
  "Something else",
];

const timelines = ["As soon as possible", "Within 2 weeks", "Within 1 to 3 months", "Just planning ahead"];

export function QuoteForm({ initialItem }: { initialItem?: string }) {
  const matches = initialItem && categories.includes(initialItem);
  const [f, setF] = useState<QuoteFields>({
    ...emptyQuote,
    category: matches ? (initialItem as string) : "",
    requirement: initialItem && !matches ? initialItem : "",
  });
  const [message, setMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const set = (k: keyof QuoteFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = buildQuoteMessage(f);
    setMessage(text);
    if (hasWhatsApp()) window.open(whatsappHref(text), "_blank", "noopener,noreferrer");
  }

  async function copy() {
    if (!message) return;
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const label = "mb-1.5 block text-base font-semibold";
  const optional = <span className="font-normal text-muted"> (optional)</span>;

  return (
    <div>
      <form onSubmit={onSubmit} className="grid gap-5" noValidate={false}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={label}>Your name</label>
            <input id="name" name="name" required autoComplete="name" className="field" value={f.name} onChange={set("name")} />
          </div>
          <div>
            <label htmlFor="phone" className={label}>Phone number</label>
            <input id="phone" name="phone" type="tel" inputMode="tel" required autoComplete="tel" className="field" value={f.phone} onChange={set("phone")} />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="location" className={label}>Your location</label>
            <input id="location" name="location" required autoComplete="address-level2" placeholder="Town or area" className="field" value={f.location} onChange={set("location")} />
          </div>
          <div>
            <label htmlFor="email" className={label}>Email{optional}</label>
            <input id="email" name="email" type="email" inputMode="email" autoComplete="email" className="field" value={f.email} onChange={set("email")} />
          </div>
        </div>

        <div>
          <label htmlFor="category" className={label}>Product or service{optional}</label>
          <select id="category" name="category" className="field" value={f.category} onChange={set("category")}>
            <option value="">Choose one</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="requirement" className={label}>What do you need?</label>
          <textarea id="requirement" name="requirement" required rows={3} placeholder="For example: cement for a 3-bedroom house foundation" className="field" value={f.requirement} onChange={set("requirement")} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="quantity" className={label}>Quantity or project size{optional}</label>
            <input id="quantity" name="quantity" className="field" value={f.quantity} onChange={set("quantity")} />
          </div>
          <div>
            <label htmlFor="timeline" className={label}>Preferred timeline{optional}</label>
            <select id="timeline" name="timeline" className="field" value={f.timeline} onChange={set("timeline")}>
              <option value="">Choose one</option>
              {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="details" className={label}>Additional details{optional}</label>
          <textarea id="details" name="details" rows={3} className="field" value={f.details} onChange={set("details")} />
        </div>

        <button type="submit" className="min-h-12 rounded-md bg-navy px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-ink">
          {hasWhatsApp() ? "Send request on WhatsApp" : "Prepare my request"}
        </button>
        <p className="text-sm text-muted">
          Your request opens in WhatsApp for you to send to {businessConfig.shortName}. Nothing is stored on this website.
        </p>
      </form>

      {message && (
        <div role="status" className="mt-8 rounded-md border border-line bg-mist p-5">
          <p className="font-semibold">
            {hasWhatsApp()
              ? "WhatsApp should have opened. If it did not, use the button below."
              : "Your request is ready. WhatsApp sending will be switched on once the business number is confirmed."}
          </p>
          <pre className="mt-3 whitespace-pre-wrap break-words rounded bg-white p-4 font-sans text-[0.95rem] leading-relaxed">{message}</pre>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            {hasWhatsApp() && (
              <a href={whatsappHref(message)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-md bg-teal-deep px-6 font-semibold text-white hover:bg-navy">
                Open WhatsApp
              </a>
            )}
            <button type="button" onClick={copy} className="inline-flex min-h-12 items-center justify-center rounded-md border border-navy px-6 font-semibold text-navy hover:bg-navy hover:text-white">
              {copied ? "Copied" : "Copy message"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
