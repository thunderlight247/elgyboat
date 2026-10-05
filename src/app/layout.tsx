import type { Metadata, Viewport } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { JsonLd } from "@/components/JsonLd";
import { businessConfig } from "@/data/business";
import { siteSeo } from "@/data/seo";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/jsonld";

const display = Archivo({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display", display: "swap" });
const body = Public_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(businessConfig.website),
  title: { default: siteSeo.titleDefault, template: siteSeo.titleTemplate },
  description: siteSeo.description,
  keywords: siteSeo.keywords,
  applicationName: businessConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: businessConfig.name,
    title: siteSeo.titleDefault,
    description: siteSeo.description,
    url: "/",
    images: [{ url: "/logo.png", alt: `${businessConfig.name} logo` }],
  },
  twitter: { card: "summary", title: siteSeo.titleDefault, description: siteSeo.description, images: ["/logo.png"] },
};

export const viewport: Viewport = { themeColor: "#17506B", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="pb-[4.5rem] md:pb-0">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <JsonLd data={localBusinessJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
