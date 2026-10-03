import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

interface MetaInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noIndex?: boolean;
  publishedTime?: string;
}

export function buildMetadata({ title, description, path, type = "website", noIndex, publishedTime }: MetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title, description, url, siteName: siteConfig.name, locale: siteConfig.locale, type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image", title, description,
      ...(siteConfig.seo.twitterHandle ? { site: siteConfig.seo.twitterHandle } : {}),
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
