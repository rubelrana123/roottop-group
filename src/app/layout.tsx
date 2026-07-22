import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
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
      <head>
        <meta name="google-site-verification" content="A7tRAt27KqSlVpZqVI2Fo1wi-NDQg_mPYZjF0ynLNMY" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <Providers>
          <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
          {children}
        </Providers>
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RQFFX4Z1PN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RQFFX4Z1PN');
        `}
      </Script>
    </html>
  );
}
