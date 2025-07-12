import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aymane Hbich - Portfolio",
    short_name: "Aymane Portfolio",
    description: "Portfolio website of Aymane Hbich - Full Stack Developer",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#5474b4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
