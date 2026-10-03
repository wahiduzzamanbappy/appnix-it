import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { Analytics } from "@/components/layout/Analytics";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteConfig } from "@/config/site";
import { organizationSchema } from "@/lib/schema";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.seo.defaultTitle, template: siteConfig.seo.titleTemplate },
  description: siteConfig.description,
  keywords: [...siteConfig.seo.keywords],
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: siteConfig.name, locale: siteConfig.locale, title: siteConfig.seo.defaultTitle, description: siteConfig.description, url: siteConfig.url },
  twitter: { card: "summary_large_image", title: siteConfig.seo.defaultTitle, description: siteConfig.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#08090B", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {/* If JS is unavailable, make scroll-reveal content visible */}
        <noscript><style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style></noscript>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-orange focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
        <JsonLd data={organizationSchema()} />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MobileCTA />
        <Analytics />
      </body>
    </html>
  );
}
