 
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Providers from "@/providers";
import JsonLd from "@/components/common/JsonLd";

import {
  organizationJsonLd,
  pageMetadata,
  websiteJsonLd,
} from "@/lib/seo";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = pageMetadata.home;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#fbfbfb",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#111827",
    },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Providers>
          <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
 