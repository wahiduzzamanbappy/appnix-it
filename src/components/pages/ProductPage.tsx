import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/components/ui/FAQ";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/pages/PageHero";
import { PairGrid, CheckList, LinkList } from "@/components/pages/Blocks";
import { CTASection } from "@/components/home/CTASection";
import { ProductMockup } from "@/components/visuals/ProductMockup";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { productSchema } from "@/lib/schema";
import type { Product } from "@/types";

export function ProductPage({ product }: { product: Product }) {
  const relIndustries = industries.filter((i) => product.industries.includes(i.slug));
  const relServices = services.filter((s) => product.services.includes(s.slug));

  return (
    <>
      <JsonLd data={productSchema(product)} />
      <PageHero
        eyebrow={product.category} title={product.name} description={product.summary}
        crumbs={[{ label: "Products", href: "/products" }, { label: product.name, href: `/products/${product.slug}` }]}
        primary={{ label: "Start a Conversation", href: "/contact", track: `product_${product.slug}_cta` }}
        secondary={{ label: "All products", href: "/products" }}
      />

      <section className="bg-ink pb-20 lg:pb-28">
        <Container><ProductMockup kind={product.mockup} label={product.name} className="mx-auto max-w-5xl [&>div:last-child]:!h-[320px] sm:[&>div:last-child]:!h-[420px]" /></Container>
      </section>

      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5"><SectionHeading size="md" tone="light" eyebrow="Overview" title={`What ${product.name} does.`} /></div>
            <p className="text-xl leading-relaxed text-graphite lg:col-span-6 lg:col-start-7">{product.overview}</p>
          </div>
        </Container>
      </section>

      <PairGrid title="Key capabilities" eyebrow="Capabilities" items={product.capabilities} tone="dark" />
      <CheckList title="Benefits" eyebrow="Why it matters" items={product.benefits} />

      <section className="bg-ink py-20 lg:py-28">
        <Container>
          <SectionHeading size="md" eyebrow="Features" title="Built-in features." />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-4 rounded-lg border border-white/10 bg-surface p-5 text-white">
                <Icon name={product.icon} className="h-5 w-5 shrink-0 text-orange" strokeWidth={1.5} />{f}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <PairGrid title="How it works" eyebrow="Workflow" items={product.workflow} tone="light" numbered />

      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div><SectionHeading size="md" eyebrow="Technology" title="Under the hood." />
              <ul className="mt-8">{product.technology.map((t) => <li key={t} className="border-t border-white/10 py-4 text-lg text-white/85">{t}</li>)}</ul></div>
            <div><SectionHeading size="md" eyebrow="Use cases" title="Where it fits." />
              <ul className="mt-8">{product.useCases.map((t) => <li key={t} className="border-t border-white/10 py-4 text-lg text-white/85">{t}</li>)}</ul></div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <LinkList title="Related industries" items={relIndustries.map((i) => ({ label: i.name, href: "/industries" }))} />
            <LinkList title="Related solutions" items={relServices.map((s) => ({ label: s.name, href: `/solutions/${s.slug}` }))} />
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4"><SectionHeading size="md" tone="light" eyebrow="FAQ" title="Common questions." /></div>
            <div className="lg:col-span-8"><FAQ items={product.faqs} /></div>
          </div>
        </Container>
      </section>

      <CTASection heading={`Interested in ${product.name}?`} text="Tell us about your requirements and we'll show you how it could fit." />
    </>
  );
}
