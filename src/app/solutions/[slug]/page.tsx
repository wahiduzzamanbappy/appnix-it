import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getService } from "@/data/services";
import { SolutionPage } from "@/components/pages/SolutionPage";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return buildMetadata({ title: service.name, description: service.summary, path: `/solutions/${service.slug}` });
}

export default async function Page({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();
  return <SolutionPage service={service} />;
}
