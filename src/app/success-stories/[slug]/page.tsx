import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { CaseStudyPage } from "@/components/pages/CaseStudyPage";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() { return caseStudies.map((c) => ({ slug: c.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  return buildMetadata({ title: `${study.title}: Success Story`, description: study.solution, path: `/success-stories/${study.slug}` });
}

export default async function Page({ params }: Props) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
