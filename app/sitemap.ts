import type { MetadataRoute } from "next";
import routesData from "@/content/routes.json";
import { LISTINGS } from "@/lib/listings";
import { SITE_URL } from "@/lib/site";

const ALL_ROUTES = routesData as Array<{ slug: string }>;

const STATIC_HUBS = [
  { path: "", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/fr", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/es", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/it", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/de", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/ar", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/pt", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/nl", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/transfers", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/fr/transfers", priority: 0.95, changeFrequency: "daily" as const },
  { path: "/airport-transfers", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/city-to-city", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/day-trips", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/multi-day-tours", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/calculator", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/fleet", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/trip-finder", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/become-a-driver", priority: 0.65, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/support", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/cookie", priority: 0.4, changeFrequency: "yearly" as const },
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
  "grand-taxi-vs-private-driver",
  "marrakech-essaouira",
  "sahara-merzouga",
  "getting-around-morocco",
  "fes-tanneries-guide",
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

  const LOCALIZED_HUBS = ["airport-transfers", "city-to-city", "day-trips", "multi-day-tours", "trip-finder", "fleet", "calculator", "faq", "about", "contact"];
  const ALL_LANGS = ["fr", "es", "it", "de", "ar", "pt", "nl"];

  const localizedHubEntries: MetadataRoute.Sitemap = ALL_LANGS.flatMap((lang) =>
    LOCALIZED_HUBS.map((hub) => ({
      url: `${SITE_URL}/${lang}/${hub}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }))
  );

  const OTHER_LANGS = ["es", "it", "de", "ar", "pt", "nl"];

  const localizedRoutes: MetadataRoute.Sitemap = OTHER_LANGS.flatMap((lang) => [
    {
      url: `${SITE_URL}/${lang}/transfers`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    ...ALL_ROUTES.map((r) => ({
      url: `${SITE_URL}/${lang}/transfers/${r.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ]);

  return [...hubs, ...localizedHubEntries, ...routes, ...frRoutes, ...localizedRoutes, ...frListings, ...cities, ...blogPosts];
}
