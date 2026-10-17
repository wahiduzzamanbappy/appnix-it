import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/pages/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { ProductMockup } from "@/components/visuals/ProductMockup";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { getProduct } from "@/data/products";
import type { CaseStudy } from "@/types";

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const product = getProduct(study.productSlug);
  const blocks: [string, string][] = [["Challenge", study.challenge], ["Solution", study.solution], ["Outcome", study.outcome]];
  return (
    <>
      <PageHero eyebrow={study.category} title={study.title} description={study.solution}
        crumbs={[{ label: "Success Stories", href: "/success-stories" }, { label: study.title, href: `/success-stories/${study.slug}` }]} />
      {study.screenshot
        ? <section className="bg-ink pb-20"><Container><Image src={study.screenshot} alt={`${study.title} website screenshot`} width={1440} height={1000} priority className="mx-auto w-full max-w-5xl rounded-xl border border-white/10" /></Container></section>
        : product && <section className="bg-ink pb-20"><Container><ProductMockup kind={product.mockup} label={study.title} className="mx-auto max-w-5xl" /></Container></section>}
      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-7">
              {blocks.map(([h, t]) => (
                <div key={h} className="border-t border-ink/15 pt-6">
                  <h2 className="font-display text-2xl font-semibold text-ink">{h}</h2>
                  <p className="mt-3 max-w-xl text-lg leading-relaxed text-graphite">{t}</p>
                </div>
              ))}
              {study.isPlaceholder && <p className="rounded-md border border-ink/15 bg-white px-4 py-3 text-sm text-graphite">Detailed project information will be added as it is verified and cleared for publication.</p>}
            </div>
            <aside className="lg:col-span-4 lg:col-start-9">
              {(study.projectTitle || study.developedBy || study.projectType || study.status) && (
                <dl className="mb-10 space-y-4 border-t border-ink/10 pt-4">
                  {study.projectTitle && <div><dt className="text-sm font-medium text-graphite">Project title</dt><dd className="mt-1 text-ink">{study.projectTitle}</dd></div>}
                  {study.developedBy && <div><dt className="text-sm font-medium text-graphite">Developed by</dt><dd className="mt-1 text-ink">{study.developedBy}</dd></div>}
                  {study.projectType && <div><dt className="text-sm font-medium text-graphite">Project type</dt><dd className="mt-1 text-ink">{study.projectType}</dd></div>}
                  {study.status && <div><dt className="text-sm font-medium text-graphite">Status</dt><dd className="mt-1 text-ink">{study.status}</dd></div>}
                </dl>
              )}
              <SectionHeading as="h2" size="md" tone="light" title="Capabilities" />
              <ul className="mt-6">{study.capabilities.map((c) => <li key={c} className="border-t border-ink/10 py-3 text-ink">{c}</li>)}</ul>
              {study.liveUrl && <div className="mt-8"><Button href={study.liveUrl} target="_blank" rel="noopener noreferrer">View Live Project</Button></div>}
              {product && !study.liveUrl && <div className="mt-8"><Button href={`/products/${product.slug}`} variant="outlineDark">Explore {product.name}</Button></div>}
              <p className="mt-6 text-sm"><Link href="/success-stories" className="text-ember underline underline-offset-4">All success stories</Link></p>
            </aside>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
