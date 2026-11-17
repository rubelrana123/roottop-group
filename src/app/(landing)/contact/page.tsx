import type { Metadata } from "next";
 
import JsonLd from "@/components/common/JsonLd";
import {
  breadcrumbJsonLd,
  localBusinessJsonLd,
  pageMetadata,
  webpageJsonLd,
} from "@/lib/seo";
import ContactPageContent from "@/components/common/contact/ContactPageContent";

export const metadata: Metadata = pageMetadata.contact;

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          webpageJsonLd({
            title: "Contact RootTOP Group",
            description:
              "Contact RootTOP Group in Dhaka for construction, engineering, IT, agriculture, consultancy, logistics, and trade inquiries.",
            path: "/contact",
            type: "ContactPage",
          }),
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ]),
        ]}
      />
      <ContactPageContent />
    </>
  );
}
