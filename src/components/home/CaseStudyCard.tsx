import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductMockup } from "@/components/visuals/ProductMockup";
import { getProduct } from "@/data/products";
import type { CaseStudy } from "@/types";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const product = getProduct(study.productSlug);
  return (
    <Link href={`/success-stories/${study.slug}`} className="group flex h-full flex-col rounded-xl border border-white/10 bg-surface p-5 transition-colors duration-300 hover:border-orange/50">
      {product && <ProductMockup kind={product.mockup} label={study.title} className="pointer-events-none [&>div:last-child]:!h-[200px]" />}
      <div className="flex flex-1 flex-col pt-6">
        <p className="text-sm text-gold">{study.category}</p>
        <h3 className="mt-1 flex items-center justify-between font-display text-2xl font-semibold text-white">
          {study.title}
          <ArrowUpRight aria-hidden="true" className="h-5 w-5 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange" />
        </h3>
        <dl className="mt-4 space-y-3 text-sm">
          <div><dt className="font-medium text-white">Challenge</dt><dd className="mt-0.5 text-muted">{study.challenge}</dd></div>
          <div><dt className="font-medium text-white">Solution</dt><dd className="mt-0.5 text-muted">{study.solution}</dd></div>
        </dl>
      </div>
    </Link>
  );
}
