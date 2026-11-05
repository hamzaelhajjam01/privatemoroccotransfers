import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old .html links keep working after the move to Next.js
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/city-to-city.html", destination: "/city-to-city", permanent: true },
      { source: "/city-:slug.html", destination: "/cities/:slug", permanent: true },
      { source: "/blog-:slug.html", destination: "/blog/:slug", permanent: true },
      { source: "/:page.html", destination: "/:page", permanent: true },
    ];
  },
};

export default nextConfig;
