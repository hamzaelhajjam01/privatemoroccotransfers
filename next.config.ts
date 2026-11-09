import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    cpus: 4,
  },
  // Old .html links keep working after the move to Next.js
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "privatemoroccotransfers.com",
          },
        ],
        destination: "https://www.privatemoroccotransfers.com/:path*",
        permanent: true,
      },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/city-to-city.html", destination: "/city-to-city", permanent: true },
      { source: "/city-:slug.html", destination: "/cities/:slug", permanent: true },
      { source: "/blog-:slug.html", destination: "/blog/:slug", permanent: true },
      { source: "/:page.html", destination: "/:page", permanent: true },
    ];
  },
};

export default nextConfig;
