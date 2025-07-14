/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  async headers() {
    return [
      // Aggressively cache static assets (1 year, immutable)
      {
        source: "/_next/static/(.*)", // Next.js build assets
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)\\.(webp|png|jpg|jpeg|svg|woff2?|css|js)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // HTML should not be cached for too long
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
