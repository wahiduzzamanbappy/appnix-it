import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/pages/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { CTASection } from "@/components/home/CTASection";
import { ProductMockup } from "@/components/visuals/ProductMockup";
import { products } from "@/data/products";

export const metadata = buildMetadata({ title: "Products", description: "Care Connect, PMS, SuperShop Billing, Pharmacy Module and E-commerce: products from Appnix IT designed to solve real business problems.", path: "/products" });

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Products" title="Products designed to solve real business problems." description="Ready-to-adapt solutions for healthcare, retail, operations and digital commerce." crumbs={[{ label: "Products", href: "/products" }]} />
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <ul className="space-y-20">
            {products.map((p, i) => (
              <li key={p.slug} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <div className={`lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}><ProductMockup kind={p.mockup} label={p.name} /></div>
                <div className={`lg:col-span-6 ${i % 2 ? "lg:order-1" : ""}`}>
                  <p className="flex items-center gap-2 text-sm text-gold"><Icon name={p.icon} className="h-4 w-4" />{p.category}</p>
                  <h2 className="mt-3 font-display text-display-md font-semibold text-white"><Link href={`/products/${p.slug}`} className="hover:text-orange">{p.name}</Link></h2>
                  <p className="mt-4 text-lg leading-relaxed text-white/75">{p.summary}</p>
                  <ul className="mt-6 space-y-2 text-white/80">{p.highlights.map((h) => <li key={h} className="flex gap-3"><span aria-hidden="true" className="mt-3 h-px w-4 bg-orange" />{h}</li>)}</ul>
                  <Link href={`/products/${p.slug}`} className="mt-8 inline-flex min-h-[44px] items-center text-orange underline underline-offset-4 hover:text-gold">Explore {p.name}</Link>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
