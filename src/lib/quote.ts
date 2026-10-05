import { businessConfig } from "@/data/business";

export type QuoteFields = {
  name: string;
  phone: string;
  email: string;
  location: string;
  requirement: string;
  category: string;
  quantity: string;
  timeline: string;
  details: string;
};

export const emptyQuote: QuoteFields = {
  name: "", phone: "", email: "", location: "", requirement: "",
  category: "", quantity: "", timeline: "", details: "",
};

/** Builds the structured WhatsApp text. Optional empty fields are skipped. */
export function buildQuoteMessage(f: QuoteFields): string {
  const line = (label: string, v: string) => (v.trim() ? `${label}: ${v.trim()}` : null);
  return [
    `Hello ${businessConfig.name},`,
    "",
    "I would like to request a quotation.",
    "",
    line("Name", f.name),
    line("Phone", f.phone),
    line("Email", f.email),
    line("Location", f.location),
    line("Requirement", f.requirement),
    line("Category", f.category),
    line("Quantity/Project size", f.quantity),
    line("Preferred timeline", f.timeline),
    line("Additional details", f.details),
    "",
    "Thank you.",
  ]
    .filter((l) => l !== null)
    .join("\n");
}
