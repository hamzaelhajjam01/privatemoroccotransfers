import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { preload } from "react-dom";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import * as AirportTransfer from "@/content/blog/airport-transfer";
import * as DayTrips from "@/content/blog/day-trips";
import * as DriverCost from "@/content/blog/driver-cost";
import * as GrandTaxiVsPrivateDriver from "@/content/blog/grand-taxi-vs-private-driver";
import * as MarrakechEssaouira from "@/content/blog/marrakech-essaouira";
import * as SaharaMerzouga from "@/content/blog/sahara-merzouga";
import * as GettingAroundMorocco from "@/content/blog/getting-around-morocco";
import * as FesTanneriesGuide from "@/content/blog/fes-tanneries-guide";
import * as AgafayDesert from "@/content/blog/agafay-desert";
import * as OurikaValley from "@/content/blog/ourika-valley";

const PAGES = {
  "airport-transfer": AirportTransfer,
  "day-trips": DayTrips,
  "driver-cost": DriverCost,
  "grand-taxi-vs-private-driver": GrandTaxiVsPrivateDriver,
  "marrakech-essaouira": MarrakechEssaouira,
  "sahara-merzouga": SaharaMerzouga,
  "getting-around-morocco": GettingAroundMorocco,
  "fes-tanneries-guide": FesTanneriesGuide,
  "agafay-desert": AgafayDesert,
  "ourika-valley": OurikaValley,
} as const;

type Slug = keyof typeof PAGES;

/**
 * Publication data for article schema and Open Graph. "modified" is the date of
 * the last real content change (2026-11-14: tables of contents and internal
 * links added to every post).
 */
const POST_META: Record<Slug, { published: string; modified: string; section: string }> = {
  "airport-transfer": { published: "2026-10-10", modified: "2026-11-14", section: "Airport Guides" },
  "day-trips": { published: "2026-10-20", modified: "2026-11-14", section: "Day Trips" },
  "driver-cost": { published: "2026-10-28", modified: "2026-11-14", section: "Driver FAQ" },
  "grand-taxi-vs-private-driver": { published: "2026-11-06", modified: "2026-11-14", section: "Morocco Tips" },
  "marrakech-essaouira": { published: "2026-11-01", modified: "2026-11-14", section: "Route Guides" },
  "sahara-merzouga": { published: "2026-10-15", modified: "2026-11-14", section: "Route Guides" },
  "getting-around-morocco": { published: "2026-11-06", modified: "2026-11-14", section: "Morocco Tips" },
  "fes-tanneries-guide": { published: "2026-11-06", modified: "2026-11-14", section: "Morocco Tips" },
  "agafay-desert": { published: "2026-11-14", modified: "2026-11-14", section: "Day Trips" },
  "ourika-valley": { published: "2026-11-14", modified: "2026-11-14", section: "Day Trips" },
};
/** Times are stated at midday Morocco time so the calendar date is the same in every timezone. */
const iso = (d: string) => `${d}T12:00:00+01:00`;
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
  const rawBlogTitle = page.title.replace(/\s*\|\s*Private Morocco Transfers$/i, "").trim();
  const metaTitle =
    rawBlogTitle.length <= 65
      ? rawBlogTitle
      : rawBlogTitle.includes(":") && rawBlogTitle.split(":")[0].trim().length >= 30 && rawBlogTitle.split(":")[0].trim().length <= 65
      ? rawBlogTitle.split(":")[0].trim()
      : `${rawBlogTitle.slice(0, 62).trimEnd()}...`;
  return {
    title: { absolute: metaTitle },
    description: page.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: page.description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: iso(POST_META[slug as Slug].published),
      modifiedTime: iso(POST_META[slug as Slug].modified),
      section: POST_META[slug as Slug].section,
      authors: [SITE_URL],
      images: [{ url: `/img/blog/${slug}.webp`, width: 1600, height: 900 }],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: page.description,
      images: [`/img/blog/${slug}.webp`],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = PAGES[slug as Slug];
  if (!page) notFound();
  const meta = POST_META[slug as Slug];
  // The feature photo is a CSS background (found late by the browser) and is the
  // largest element on the page, so fetch it first.
  preload(`/img/blog/${slug}.webp`, { as: "image", fetchPriority: "high" });

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
        "@id": `${SITE_URL}/blog/${slug}#article`,
        headline: page.title.split(" | ")[0],
        description: page.description,
        url: `${SITE_URL}/blog/${slug}`,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
        image: { "@type": "ImageObject", url: `${SITE_URL}/img/blog/${slug}.webp`, width: 1600, height: 900 },
        datePublished: iso(meta.published),
        dateModified: iso(meta.modified),
        articleSection: meta.section,
        inLanguage: "en",
        // The business writes the guides; no invented personal author.
        author: { "@type": "Organization", "@id": `${SITE_URL}/#service`, name: SITE_NAME, url: SITE_URL },
        publisher: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#service`,
          name: SITE_NAME,
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/brand/logo-gold.svg` },
        },
        isPartOf: { "@type": "Blog", "@id": `${SITE_URL}/blog#blog`, name: `${SITE_NAME} Journal`, url: `${SITE_URL}/blog` },
      },
      // Guides that export FAQs also get FAQPage data (shown on the page as "Quick answers").
      ...("faqs" in page && page.faqs.length
        ? [{
            "@type": "FAQPage",
            mainEntity: page.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }]
        : []),
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
