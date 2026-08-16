import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RootTOP Group",
    short_name: "RootTOP",
    description:
      "RootTOP Group is a diversified business conglomerate in Bangladesh serving construction, engineering, IT, agriculture, consultancy, and international trade.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fbfbfb",
    theme_color: "#68D53A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
