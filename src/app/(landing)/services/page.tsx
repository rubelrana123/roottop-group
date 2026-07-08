import type { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import JsonLd from "@/components/common/JsonLd";

import ServicesSection from "@/components/common/service/ServicesSection";
import { pageMetadata, webpageJsonLd } from "@/lib/seo";
import PageHero from "@/components/common/PageHero";

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
      <PageHero
      title="Business Areas"
      subtitle="What We Do"
      description="Explore our comprehensive range of professional services, delivering quality, innovation, and sustainable solutions across multiple industries."
      image="/exportimport.avif"
      imageAlt="RootTOP Group professional business services"
    />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Business Areas", href: "/services" },
        ]}
      />
      <ServicesSection />
    </>
  );
}
