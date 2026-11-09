import type { Metadata } from "next";
import Script from "next/script";
import { IBM_Plex_Mono, Inter_Tight } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CookieBanner from "@/components/CookieBanner";
import SiteScripts from "@/components/SiteScripts";
import Motion from "@/components/Motion";
import { SITE_URL, WHATSAPP_NUMBER } from "@/lib/site";
import "./globals.css";

const interTight = Inter_Tight({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-inter-tight" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-plex-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Private Morocco Transfers — Fixed Price Chauffeur Services",
    template: "%s | Private Morocco Transfers",
  },
  description:
    "Reliable private transfers across Morocco at guaranteed fixed prices. Airport pickups, intercity routes, and day trips. Licensed drivers, 24/7 WhatsApp booking.",
  keywords: [
    "Morocco private transfers",
    "private driver Morocco",
    "Marrakech airport transfer",
    "Casablanca to Marrakech transfer",
    "Morocco chauffeur service",
    "Essaouira to Marrakech taxi",
    "private taxi Morocco",
  ],
  openGraph: {
    siteName: "Private Morocco Transfers",
    type: "website",
    url: SITE_URL,
    title: "Private Morocco Transfers — Guaranteed Fixed Price Chauffeur Services",
    description:
      "Door-to-door private transfers and chauffeur service across Morocco. All-inclusive flat rates, licensed English-speaking drivers, 24/7 WhatsApp confirmation.",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Private Morocco Transfers — Chauffeur Services in Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Morocco Transfers — Fixed Price Chauffeurs",
    description: "Door-to-door private transfers across Morocco. Instant WhatsApp booking.",
    images: ["/img/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["TaxiService", "LocalBusiness"],
      "@id": `${SITE_URL}/#service`,
      name: "Private Morocco Transfers",
      alternateName: "Morocco Private Transfers",
      url: SITE_URL,
      telephone: `+${WHATSAPP_NUMBER}`,
      email: "contact@privatemoroccotransfers.com",
      image: `${SITE_URL}/brand/logo-gold.svg`,
      priceRange: "€30 - €380",
      currenciesAccepted: "EUR, MAD, USD, GBP",
      paymentAccepted: "Cash, Credit Card",
      areaServed: [
        {
          "@type": "Country",
          name: "Morocco",
        },
        {
          "@type": "AdministrativeArea",
          name: "Marrakech-Safi",
        },
        {
          "@type": "AdministrativeArea",
          name: "Casablanca-Settat",
        },
        {
          "@type": "AdministrativeArea",
          name: "Fès-Meknès",
        },
        {
          "@type": "AdministrativeArea",
          name: "Tanger-Tétouan-Al Hoceïma",
        },
        {
          "@type": "AdministrativeArea",
          name: "Souss-Massa",
        },
        {
          "@type": "AdministrativeArea",
          name: "Rabat-Salé-Kénitra",
        },
        {
          "@type": "AdministrativeArea",
          name: "Drâa-Tafilalet",
        },
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 31.6295,
        longitude: -7.9811,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Marrakech",
        addressRegion: "Marrakech-Safi",
        addressCountry: "MA",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Private Transfers in Morocco",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Airport Transfers",
              description: "Door-to-door airport pickups with flight tracking and 45-min free waiting.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "City-to-City Intercity Transfers",
              description: "Private highway transfers between all Moroccan cities with scenic photo stops.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Day Excursions & Day Trips",
              description: "Private full-day trips to Ourika Valley, Ouzoud Waterfalls, Essaouira, and Agafay.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Private Morocco Transfers",
      description: "Fixed-price private transfers and chauffeur service across Morocco.",
      publisher: {
        "@id": `${SITE_URL}/#service`,
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${plexMono.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-TM2P4CWT"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8GZHQFFZ4Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8GZHQFFZ4Z', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TM2P4CWT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CookieBanner />
        <SiteScripts />
        <Motion />
      </body>
    </html>
  );
}
