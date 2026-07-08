import type { Metadata } from "next";
 
import JsonLd from "@/components/common/JsonLd";
import {
  organizationJsonLd,
  pageMetadata,
  webpageJsonLd,
} from "@/lib/seo";
import LicenseAwardsSection from "@/components/common/LicenseAward";
import AboutUsContent from "@/components/common/AboutUsContent";
import OurClients from "@/components/common/home/OurClients";

export const metadata: Metadata = pageMetadata.about;

export default function AboutUs() {
  return (
    <>
      <JsonLd
        data={[
          organizationJsonLd(),
          webpageJsonLd({
            title: "About RootTOP Group",
            description:
              "Corporate profile, mission, vision, and values of RootTOP Group in Bangladesh.",
            path: "/about-us",
            type: "AboutPage",
          }),
        ]}
      />
      <AboutUsContent />
      <LicenseAwardsSection/>
      <OurClients />
    </>
  );
}
