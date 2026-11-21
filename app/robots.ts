import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Don't block /_next/: it holds the CSS and JS search engines need to render pages.
        disallow: ["/api/"],
      },
      {
        userAgent: ["Google-Extended", "GPTBot", "PerplexityBot", "ClaudeBot", "Amazonbot"],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: "https://www.privatemoroccotransfers.com",
  };
}
