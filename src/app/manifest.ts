import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Apollon",
    short_name: "Apollon",
    start_url: "/",
    theme_color: "#006FFD",
    background_color: "#FAFBFF",
    display: "fullscreen",
    icons: [
      {
        src: "icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
