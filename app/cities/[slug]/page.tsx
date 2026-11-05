import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_NAME, SITE_URL, WHATSAPP_NUMBER } from "@/lib/site";
import * as Agadir from "@/content/cities/agadir";
import * as Casablanca from "@/content/cities/casablanca";
import * as Essaouira from "@/content/cities/essaouira";
import * as Fes from "@/content/cities/fes";
import * as Marrakech from "@/content/cities/marrakech";
import * as Rabat from "@/content/cities/rabat";
import * as Tangier from "@/content/cities/tangier";

const PAGES = {
  "agadir": Agadir,
  "casablanca": Casablanca,
  "essaouira": Essaouira,
  "fes": Fes,
  "marrakech": Marrakech,
  "rabat": Rabat,
  "tangier": Tangier,
} as const;

type Slug = keyof typeof PAGES;
type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = PAGES[slug as Slug];
  if (!page) return {};
  const canonicalUrl = `${SITE_URL}/cities/${slug}`;
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: ["/img/og-image.jpg"],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = PAGES[slug as Slug];
  if (!page) notFound();

  const cityName = slug.charAt(0).toUpperCase() + slug.slice(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: `Private Driver in ${cityName}`, item: `${SITE_URL}/cities/${slug}` },
        ],
      },
      {
        "@type": "TaxiService",
        name: `Private Driver & Transfers in ${cityName}`,
        provider: { "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL, telephone: `+${WHATSAPP_NUMBER}` },
        areaServed: cityName,
        description: page.description,
      },
    ],
  };

  const Content = page.default;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Content />
    </>
  );
}
