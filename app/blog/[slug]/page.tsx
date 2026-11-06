import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import * as AirportTransfer from "@/content/blog/airport-transfer";
import * as DayTrips from "@/content/blog/day-trips";
import * as DriverCost from "@/content/blog/driver-cost";
import * as GrandTaxiVsPrivateDriver from "@/content/blog/grand-taxi-vs-private-driver";
import * as MarrakechEssaouira from "@/content/blog/marrakech-essaouira";
import * as SaharaMerzouga from "@/content/blog/sahara-merzouga";
import * as GettingAroundMorocco from "@/content/blog/getting-around-morocco";
import * as FesTanneriesGuide from "@/content/blog/fes-tanneries-guide";

const PAGES = {
  "airport-transfer": AirportTransfer,
  "day-trips": DayTrips,
  "driver-cost": DriverCost,
  "grand-taxi-vs-private-driver": GrandTaxiVsPrivateDriver,
  "marrakech-essaouira": MarrakechEssaouira,
  "sahara-merzouga": SaharaMerzouga,
  "getting-around-morocco": GettingAroundMorocco,
  "fes-tanneries-guide": FesTanneriesGuide,
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
  const canonicalUrl = `${SITE_URL}/blog/${slug}`;
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
      type: "article",
      images: [`/img/blog/${slug}.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [`/img/blog/${slug}.jpg`],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = PAGES[slug as Slug];
  if (!page) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Journal", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: page.title.split(" | ")[0], item: `${SITE_URL}/blog/${slug}` },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: page.title.split(" | ")[0],
        description: page.description,
        url: `${SITE_URL}/blog/${slug}`,
        image: `${SITE_URL}/img/blog/${slug}.jpg`,
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
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
