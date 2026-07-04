import type { Metadata } from "next";
import ContactPageContent from "@/components/common/ContactPageContent";
import JsonLd from "@/components/common/JsonLd";
import {
  localBusinessJsonLd,
  organizationJsonLd,
  pageMetadata,
  webpageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata.contact;

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          organizationJsonLd(),
          localBusinessJsonLd(),
          webpageJsonLd({
            title: "Contact RootTOP Group",
            description:
              "Contact RootTOP Group in Dhaka for construction, engineering, IT, agriculture, consultancy, logistics, and trade inquiries.",
            path: "/contact",
            type: "ContactPage",
          }),
        ]}
      />
      <ContactPageContent />
    </>
  );
}
