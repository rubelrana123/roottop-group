import type { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import JsonLd from "@/components/common/JsonLd";
import ServicesHero from "@/components/common/service/ServiceHero";
import ServicesSection from "@/components/common/service/ServicesSection";
import { pageMetadata, webpageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata.services;
 
export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={webpageJsonLd({
          title: "RootTOP Group Business Services",
          description:
            "Construction, consultancy, electrical and mechanical engineering, agriculture, import-export, and IT services by RootTOP Group.",
          path: "/services",
        })}
      />
      <ServicesHero />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
      <ServicesSection />
    </>
  );
}
