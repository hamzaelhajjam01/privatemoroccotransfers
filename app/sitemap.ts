import type { MetadataRoute } from "next";
import routesData from "@/content/routes.json";
import { LISTINGS } from "@/lib/listings";
import { SITE_URL } from "@/lib/site";

const ALL_ROUTES = routesData as Array<{ slug: string }>;

const STATIC_HUBS = [
  { path: "", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/transfers", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/fr/transfers", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/airport-transfers", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/city-to-city", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/day-trips", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/multi-day-tours", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/calculator", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/fleet", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/cancellation", priority: 0.4, changeFrequency: "yearly" as const },
];

const CITIES = [
  "agadir",
  "casablanca",
  "essaouira",
  "fes",
  "marrakech",
  "rabat",
  "tangier",
];

const BLOG_SLUGS = [
  "airport-transfer",
  "day-trips",
  "driver-cost",
  "marrakech-essaouira",
  "sahara-merzouga",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const hubs: MetadataRoute.Sitemap = STATIC_HUBS.map((h) => ({
    url: `${SITE_URL}${h.path}`,
    lastModified: now,
    changeFrequency: h.changeFrequency,
    priority: h.priority,
  }));

  const routes: MetadataRoute.Sitemap = ALL_ROUTES.map((r) => ({
    url: `${SITE_URL}/transfers/${r.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const frRoutes: MetadataRoute.Sitemap = ALL_ROUTES.map((r) => ({
    url: `${SITE_URL}/fr/transfers/${r.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const frListings: MetadataRoute.Sitemap = LISTINGS.map((l) => ({
    url: `${SITE_URL}/fr/details/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const cities: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${SITE_URL}/cities/${c}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const blogPosts: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...hubs, ...routes, ...frRoutes, ...frListings, ...cities, ...blogPosts];
}
