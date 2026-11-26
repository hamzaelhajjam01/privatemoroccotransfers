import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't advertise the framework in an "x-powered-by: Next.js" header.
  poweredByHeader: false,
  // Basic security headers on every page. No strict Content-Security-Policy on purpose:
  // it would need tuning for Google Analytics, Google Ads and Tag Manager.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
        ],
      },
    ];
  },
  experimental: {
    cpus: 4,
    globalNotFound: true,
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
