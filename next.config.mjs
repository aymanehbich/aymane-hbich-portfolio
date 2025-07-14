/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  // async headers() {
  //   return [
  //     {
  //       // Cache all images, JS, CSS, fonts for 1 year
  //       source: "/(.*)\\.(js|css|webp|png|jpg|jpeg|svg|woff2?)",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=31536000, immutable",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
