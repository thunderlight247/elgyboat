import { businessConfig, fullAddress } from "@/data/business";
import { allServices } from "@/data/services";
import { hasEmail, hasPhone } from "./contact";

const url = businessConfig.website;
const sameAs = Object.values(businessConfig.social).filter(Boolean);

/** Only fields with confirmed values are emitted. No ratings, hours or coordinates are invented. */
export const localBusinessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${url}/#business`,
  name: businessConfig.name,
  slogan: businessConfig.tagline,
  url,
  logo: `${url}/logo.png`,
  image: `${url}/logo.png`,
  description: `${businessConfig.positioning} in ${fullAddress()}.`,
  ...(hasPhone() && { telephone: businessConfig.phone }),
  ...(hasEmail() && { email: businessConfig.email }),
  address: {
    "@type": "PostalAddress",
    ...(businessConfig.address.street && { streetAddress: businessConfig.address.street }),
    addressLocality: businessConfig.address.locality,
    addressRegion: businessConfig.address.region,
    addressCountry: businessConfig.address.countryCode,
  },
  areaServed: { "@type": "AdministrativeArea", name: `${businessConfig.address.region}, ${businessConfig.address.country}` },
  hasMap: businessConfig.googleMapsUrl,
  ...(sameAs.length > 0 && { sameAs }),
  ...(businessConfig.reviews.rating && businessConfig.reviews.reviewCount
    ? { aggregateRating: { "@type": "AggregateRating", ratingValue: businessConfig.reviews.rating, reviewCount: businessConfig.reviews.reviewCount } }
    : {}),
});

export const websiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${url}/#website`,
  url,
  name: businessConfig.name,
  publisher: { "@id": `${url}/#business` },
});

export const servicesJsonLd = () => ({
  "@context": "https://schema.org",
  "@graph": allServices.map((s) => ({
    "@type": "Service",
    name: s.title,
    description: s.summary,
    provider: { "@id": `${url}/#business` },
    areaServed: businessConfig.address.region + ", " + businessConfig.address.country,
  })),
});

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${url}${it.path === "/" ? "" : it.path}`,
  })),
});
