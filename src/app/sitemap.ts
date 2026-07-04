import type { MetadataRoute } from "next";
import { services } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl("/RootTOP.jpg")],
    },
    {
      url: absoluteUrl("/about-us"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [absoluteUrl("/silderImage3.webp")],
    },
    {
      url: absoluteUrl("/services"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [absoluteUrl("/exportimport.jpg")],
    },
    {
      url: absoluteUrl("/sister-concerns"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [absoluteUrl("/groupCompany.png")],
    },
    {
      url: absoluteUrl("/media"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
      images: [absoluteUrl("/gallary-view/gallary1.jpeg")],
    },
    {
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [absoluteUrl("/silderImage3.webp")],
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
    images: [absoluteUrl(service.image)],
  }));

  return [...staticRoutes, ...serviceRoutes];
}
