import type { Insight } from "@/types";
import { showDevContent } from "@/lib/utils";

export const insightCategories = [
  "Technology", "AI", "Cybersecurity", "Cloud", "Software Development", "Digital Transformation", "E-commerce",
] as const;

/**
 * MDX / CMS READY: replace this array with a loader (MDX files, Sanity, Contentful…) that returns `Insight[]`.
 * Entries flagged isDevelopmentContent are layout samples and are hidden in production by default.
 * They intentionally have no author, statistics or quotes.
 */
const allInsights: Insight[] = [
  {
    slug: "digital-transformation", title: "Where to start with digital transformation", category: "Digital Transformation",
    excerpt: "Development sample: a practical way to choose a first project that builds momentum.",
    publishedAt: "2026-01-01", readingMinutes: 4, isDevelopmentContent: true,
    body: [
      { type: "p", text: "This is development content used to preview article layout. Replace it with a published article." },
      { type: "h2", text: "Start with a process, not a platform" },
      { type: "p", text: "Pick one process that is slow, manual or error-prone and improve it end to end before widening scope." },
      { type: "ul", items: ["Map the current process", "Agree one measurable goal", "Deliver a small first release"] },
    ],
  },
  {
    slug: "secure-by-design", title: "Secure by design: habits for safer software", category: "Cybersecurity",
    excerpt: "Development sample: security practices that fit into everyday delivery.",
    publishedAt: "2026-01-02", readingMinutes: 5, isDevelopmentContent: true,
    body: [
      { type: "p", text: "This is development content used to preview article layout. Replace it with a published article." },
      { type: "h2", text: "Make the safe path the easy path" },
      { type: "p", text: "Defaults, code review and dependency checks catch more than occasional audits do." },
    ],
  },
  {
    slug: "ai-in-everyday-workflows", title: "Putting AI to work in everyday workflows", category: "AI",
    excerpt: "Development sample: how to pick AI use cases that earn their place.",
    publishedAt: "2026-01-03", readingMinutes: 4, isDevelopmentContent: true,
    body: [
      { type: "p", text: "This is development content used to preview article layout. Replace it with a published article." },
      { type: "h2", text: "Keep people in the loop" },
      { type: "p", text: "Automate the routine steps and leave judgement calls with the people who understand the context." },
    ],
  },
];

export const insights: Insight[] = allInsights.filter((i) => showDevContent || !i.isDevelopmentContent);
export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);
