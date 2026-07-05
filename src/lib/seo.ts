import type { Metadata } from "next";
import { services } from "@/lib/data";

export const siteConfig = {
  name: "RootTOP Group",
  legalName: "RootTOP Group",
  url: "https://www.roottopltd.com",
  locale: "en_US",
  defaultImage: "/RootTOP.jpg",
  logo: "/logo.png",
  phone: "+8801746644478",
  email: "info@roottopltd.com",
  alternateEmail: "roottoplimited@gmail.com",
  address: {
    streetAddress: "House #263 (2nd Floor), Road #19, Mohakhali DOHS",
    addressLocality: "Dhaka Cantonment",
    addressRegion: "Dhaka",
    postalCode: "1206",
    addressCountry: "BD",
  },
  socialLinks: [
    "https://www.facebook.com/",
    "https://www.linkedin.com/",
    "https://www.youtube.com/",
  ],
};

const defaultKeywords = [
  "RootTOP Group",
  "Bangladesh corporate group",
  "construction company Bangladesh",
  "engineering services Bangladesh",
  "IT solutions Bangladesh",
  "agriculture business Bangladesh",
  "import export Bangladesh",
  "logistics consultancy Bangladesh",
];

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  category?: string;
  verification?: {
    google?: string;
  };
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.url).toString();
}

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = siteConfig.defaultImage,
  type = "website",
  category = "Corporate Business",
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    category,
    alternates: {
      canonical: url,
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon", type: "image/png", sizes: "32x32" },
      ],
      apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/manifest.webmanifest",
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "google-site-verification-placeholder",
      other: {
        "msvalidate.01": "bing-site-verification-placeholder",
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@roottopgroup",
      images: [imageUrl],
    },
  };
}

export const pageMetadata = {
  home: createMetadata({
    title: "RootTOP Group | Diversified Business Conglomerate in Bangladesh",
    description:
      "RootTOP Group delivers construction, engineering, IT, agriculture, consultancy, logistics, and import-export solutions for government, corporate, and private clients in Bangladesh.",
    path: "/",
    keywords: ["diversified conglomerate", "RootTOP Limited", "business group Dhaka"],

    verification: {
      google: "jw-gQKycM6N8_P0OayaS1qCUHlUzvrvkXWFYwJFoPDk",
    },
  }),
  about: createMetadata({
    title: "About RootTOP Group | Corporate Profile and Values",
    description:
      "Learn about RootTOP Group, a Bangladesh-based corporate group focused on quality construction, engineering, IT, agriculture, consultancy, and international trade services.",
    path: "/about-us",
    keywords: ["about RootTOP Group", "corporate profile", "mission vision values"],
    image: "/silderImage3.webp",
    category: "About Page",
  }),
  services: createMetadata({
    title: "Business Services | Construction, IT, Agriculture and Trade",
    description:
      "Explore RootTOP Group services across construction, consultancy, electrical and mechanical engineering, agriculture, information technology, and import-export operations.",
    path: "/services",
    keywords: ["business services Bangladesh", "construction services", "engineering services"],
    image: "/exportimport.jpg",
    category: "Services",
  }),
  sisterConcerns: createMetadata({
    title: "Sister Concerns | RootTOP Group Companies",
    description:
      "Discover the sister concerns and portfolio companies within RootTOP Group, serving construction, agriculture, trading, technology, and enterprise sectors in Bangladesh.",
    path: "/sister-concerns",
    keywords: ["RootTOP sister concerns", "group companies Bangladesh"],
    image: "/groupCompany.png",
    category: "Corporate Group",
  }),
  contact: createMetadata({
    title: "Contact RootTOP Group | Dhaka Office, Phone and Email",
    description:
      "Contact RootTOP Group in Mohakhali DOHS, Dhaka for construction, engineering, IT, agriculture, consultancy, logistics, and import-export business inquiries.",
    path: "/contact",
    keywords: ["contact RootTOP Group", "RootTOP Dhaka office", "business inquiry Bangladesh"],
    image: "/silderImage3.webp",
    category: "Contact Page",
  }),
};

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function createServiceMetadata(slug: string): Metadata {
  const service = getServiceBySlug(slug);

  if (!service) {
    return createMetadata({
      title: "Service Not Found | RootTOP Group",
      description: "The requested RootTOP Group service could not be found.",
      path: `/services/${slug}`,
    });
  }

  return createMetadata({
    title: `${service.title} Services | RootTOP Group Bangladesh`,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
    image: service.image,
    category: "Service",
    keywords: [
      `${service.title} services Bangladesh`,
      ...service.items,
    ],
  });
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "Corporation"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.defaultImage),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    sameAs: siteConfig.socialLinks,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "customer service",
      areaServed: "BD",
      availableLanguage: ["en", "bn"],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#local-business`,
    name: siteConfig.name,
    image: absoluteUrl(siteConfig.defaultImage),
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en",
  };
}

export function webpageJsonLd({
  title,
  description,
  path,
  type = "WebPage",
}: {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en",
  };
}

export function serviceJsonLd(slug: string) {
  const service = getServiceBySlug(slug);

  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: `${service.title} Services`,
    description: service.description,
    serviceType: service.title,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
    image: absoluteUrl(service.image),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Capabilities`,
      itemListElement: service.items.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item,
        },
      })),
    },
  };
}

export function imageObjectJsonLd({
  path,
  name,
  caption,
}: {
  path: string;
  name: string;
  caption: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: absoluteUrl(path),
    name,
    caption,
    creator: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}
