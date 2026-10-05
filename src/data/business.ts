/**
 * Single source of truth for business details.
 * Empty strings mean "not confirmed yet": the UI hides or adapts those items.
 * Fill them in here (or via environment variables) once Elgyboat confirms them.
 */
export const businessConfig = {
  name: "Elgyboat Enterprise",
  shortName: "Elgyboat",
  tagline: "Building Tomorrow's Legacy Today",
  brandLine: "Nyame Nsa", // appears under the name on the logo
  positioning: "Building materials, construction, roofing and civil engineering",

  // TO CONFIRM: final domain
  website: process.env.NEXT_PUBLIC_SITE_URL ?? "https://elgyboat-enterprise.vercel.app",

  // TO CONFIRM: all contact values. Digits only for whatsapp (e.g. "233XXXXXXXXX").
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+233 20 584 9263", // confirmed by client
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "233555360660", // +233 55 536 0660, confirmed by client
  email: process.env.NEXT_PUBLIC_EMAIL ?? "elgyboat@gmail.com",

  address: {
    // TO CONFIRM: street / landmark. Town, region and country come from the brief.
    street: "Traffic light, Magazine Road", // from the Google listing
    locality: "Techiman",
    region: "Bono East",
    country: "Ghana",
    countryCode: "GH",
  },

  // Google Business Profile link supplied by the client.
  googleMapsUrl: "https://share.google/l24NjgeZzOiDR4kA6",
  // Short share links cannot be embedded. This search-based embed is a stand-in:
  // TO CONFIRM: replace with the "Embed a map" URL from the Google Business Profile.
  googleMapsEmbedUrl: "https://www.google.com/maps?q=Elgyboat+Enterprise+Techiman+Ghana&output=embed",

  // TO CONFIRM: opening hours. Leave null to hide.
  hours: null as null | { label: string; value: string }[],

  // TO CONFIRM: only add accounts that are verified.
  social: { facebook: "", instagram: "", tiktok: "", linkedin: "" } as Record<string, string>,

  // Reviews: fill with verified values from the Google Business Profile.
  reviews: {
    rating: 4.8 as number | null, // Google listing, seen 4 Oct 2026. Re-check before launch.
    reviewCount: 65 as number | null,
    reviewUrl: "https://share.google/l24NjgeZzOiDR4kA6",
  },
};

export const fullAddress = () => {
  const a = businessConfig.address;
  return [a.street, a.locality, a.region, a.country].filter(Boolean).join(", ");
};

/** Shown in the README and handy for a handover checklist. */
export const needsConfirmation = [
  "Full street address (listing shows: Traffic light, Magazine Road)",
  "Opening hours",
  "Final domain name",
  "Social media accounts",
  "Google rating and review count are current (taken from the listing on 4 Oct 2026)",
  "Exact list of materials in stock and services offered",
  "Real project photos and project details",
];
