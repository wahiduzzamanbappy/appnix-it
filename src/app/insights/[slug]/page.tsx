import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { insights, getInsight } from "@/data/insights";
import { ArticlePage } from "@/components/pages/ArticlePage";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() { return insights.map((i) => ({ slug: i.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getInsight((await params).slug);
  if (!a) return {};
  return buildMetadata({ title: a.title, description: a.excerpt, path: `/insights/${a.slug}`, type: "article", publishedTime: a.publishedAt, noIndex: a.isDevelopmentContent });
}

export default async function Page({ params }: Props) {
  const a = getInsight((await params).slug);
  if (!a) notFound();
  return <ArticlePage article={a} />;
}
