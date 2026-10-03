import Script from "next/script";
import { siteConfig } from "@/config/site";

/** Renders only when NEXT_PUBLIC_GA_ID is set. Loaded after interaction so it never blocks rendering. */
export function Analytics() {
  const id = siteConfig.analytics.gaId;
  if (!id) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config',${JSON.stringify(id)});`}</Script>
    </>
  );
}
