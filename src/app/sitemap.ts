import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/utils";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { caseStudies } from "@/data/case-studies";
import { insights } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const statics = ["/", "/about", "/solutions", "/products", "/industries", "/success-stories", "/insights", "/contact", "/privacy-policy", "/terms-and-conditions", "/cookie-policy"];
  return [
    ...statics.map((p) => ({ url: absoluteUrl(p), lastModified: now, changeFrequency: "monthly" as const, priority: p === "/" ? 1 : 0.7 })),
    ...services.map((s) => ({ url: absoluteUrl(`/solutions/${s.slug}`), lastModified: now, priority: 0.8 })),
    ...products.map((p) => ({ url: absoluteUrl(`/products/${p.slug}`), lastModified: now, priority: 0.8 })),
    ...caseStudies.map((c) => ({ url: absoluteUrl(`/success-stories/${c.slug}`), lastModified: now, priority: 0.6 })),
    ...insights.filter((i) => !i.isDevelopmentContent).map((i) => ({ url: absoluteUrl(`/insights/${i.slug}`), lastModified: new Date(i.publishedAt), priority: 0.6 })),
  ];
}
