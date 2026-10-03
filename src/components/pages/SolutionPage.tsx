import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/components/ui/FAQ";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/pages/PageHero";
import { PairGrid, CheckList, LinkList } from "@/components/pages/Blocks";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { CTASection } from "@/components/home/CTASection";
import { TechVisual } from "@/components/visuals/TechVisual";
import { defaultSolutionFaqs } from "@/data/company";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import type { Service } from "@/types";

export function SolutionPage({ service }: { service: Service }) {
  const relProducts = products.filter((p) => service.relatedProducts.includes(p.slug));
  const relIndustries = industries.filter((i) => service.relatedIndustries.includes(i.slug));

  return (
    <>
      <PageHero
        eyebrow="Solution" title={service.name} description={service.tagline}
        crumbs={[{ label: "Solutions", href: "/solutions" }, { label: service.name, href: `/solutions/${service.slug}` }]}
        primary={{ label: "Start a Conversation", href: "/contact", track: `solution_${service.slug}_cta` }}
        secondary={{ label: "All solutions", href: "/solutions" }}
        visual={<TechVisual kind={service.visual} className="h-full w-full text-white opacity-40" />}
      />

      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5"><SectionHeading size="md" tone="light" eyebrow="Overview" title={service.summary} /></Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7"><p className="text-xl leading-relaxed text-graphite">{service.overview}</p></Reveal>
          </div>
        </Container>
      </section>

      <PairGrid title="What we deliver" eyebrow="Capabilities" items={service.capabilities} tone="dark" />
      <CheckList title="What this means for your business" eyebrow="Business benefits" items={service.benefits} />

      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading size="md" eyebrow="Use cases" title="Where it fits." />
              <ul className="mt-8">{service.useCases.map((u) => <li key={u} className="border-t border-white/10 py-4 text-lg text-white/85">{u}</li>)}</ul>
            </div>
            <div>
              <SectionHeading size="md" eyebrow="Technology categories" title="What we work with." />
              <ul className="mt-8">{service.technologies.map((t) => <li key={t} className="border-t border-white/10 py-4 text-lg text-white/85">{t}</li>)}</ul>
            </div>
          </div>
        </Container>
      </section>

      <ProcessTimeline />

      {(relProducts.length > 0 || relIndustries.length > 0) && (
        <section className="bg-white py-20 lg:py-24">
          <Container>
            <div className="grid gap-12 md:grid-cols-2">
              <LinkList title="Related products" items={relProducts.map((p) => ({ label: p.name, href: `/products/${p.slug}`, hint: p.category }))} />
              <LinkList title="Related industries" items={relIndustries.map((i) => ({ label: i.name, href: "/industries" }))} />
            </div>
          </Container>
        </section>
      )}

      <section className="bg-paper py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4"><SectionHeading size="md" tone="light" eyebrow="FAQ" title="Common questions." /></div>
            <div className="lg:col-span-8"><FAQ items={defaultSolutionFaqs} /></div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
