import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import JsonLd from "@/components/common/JsonLd";
import {
  organizationJsonLd,
  pageMetadata,
  websiteJsonLd,
} from "@/lib/seo";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
    { media: "(prefers-color-scheme: light)", color: "#fbfbfb" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth!" data-scroll-behavior="smooth" data-theme="light">
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="" />
        <link
          rel="preload"
          href="/logo.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
