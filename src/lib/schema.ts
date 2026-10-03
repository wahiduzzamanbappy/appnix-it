import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";
import type { Insight, Product } from "@/types";

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  const sameAs = Object.values(siteConfig.social).filter(Boolean);
  const { email, phone } = siteConfig.contact;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo.src),
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    ...(sameAs.length ? { sameAs } : {}),
    ...(email || phone
      ? { contactPoint: { "@type": "ContactPoint", contactType: "sales", ...(email ? { email } : {}), ...(phone ? { telephone: phone } : {}) } }
      : {}),
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem", position: i + 1, name: item.label, item: absoluteUrl(item.href),
    })),
  };
}

export function productSchema(p: Product): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.summary,
    category: p.category,
    url: absoluteUrl(`/products/${p.slug}`),
    brand: { "@type": "Brand", name: siteConfig.name },
  };
}

export function articleSchema(a: Insight): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    datePublished: a.publishedAt,
    url: absoluteUrl(`/insights/${a.slug}`),
    author: a.author ? { "@type": "Person", name: a.author.name } : { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
}
