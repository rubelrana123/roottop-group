import type { Metadata } from "next";
 
import JsonLd from "@/components/common/JsonLd";
import {
  breadcrumbJsonLd,
  pageMetadata,
  webpageJsonLd,
} from "@/lib/seo";
import LicenseAwardsSection from "@/components/common/LicenseAward";
import AboutUsContent from "@/components/common/about/AboutUsContent";
import OurClients from "@/components/common/home/OurClients";
import MissionVisionValues from "@/components/common/MissionVisionValues";

export const metadata: Metadata = pageMetadata.about;

export default function AboutUs() {
  return (
    <>
      <JsonLd
        data={[
          webpageJsonLd({
            title: "About RootTOP Group",
            description:
              "Corporate profile, mission, vision, and values of RootTOP Group in Bangladesh.",
            path: "/about-us",
            type: "AboutPage",
          }),
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about-us" },
          ]),
        ]}
      />
      <AboutUsContent />
      <MissionVisionValues/>
      <LicenseAwardsSection/>
      <OurClients />
    </>
  );
}
