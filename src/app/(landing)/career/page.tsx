import type { Metadata } from "next";
import CareerBenefits from "@/components/common/career/CareerBenifits";
import CareerOpening from "@/components/common/career/CareerOpening";
import JsonLd from "@/components/common/JsonLd";
import PageHero from "@/components/common/PageHero";
import { breadcrumbJsonLd, pageMetadata, webpageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata.career;

export default function CareerPage() {
  return (
    <>
      <JsonLd
        data={[
          webpageJsonLd({
            title: "Careers at RootTOP Group",
            description:
              "Current job openings at RootTOP Group in Bangladesh.",
            path: "/career",
            type: "CollectionPage",
          }),
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "Career", href: "/career" },
          ]),
        ]}
      />

      <PageHero
        title="Career"
        subtitle="Join Our Team"
        description="We're always looking for creative, talented self-starters to join the RootTOP Group family."
        image="/hiring.avif"
        imageAlt="RootTOP Group team hiring for open positions"
      />

      <CareerOpening />
      <CareerBenefits />
    </>
  );
}
