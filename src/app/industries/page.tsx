import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/pages/PageHero";
import { IndustrySelector } from "@/components/home/IndustrySelector";
import { CTASection } from "@/components/home/CTASection";

export const metadata = buildMetadata({ title: "Industries", description: "Technology for corporate, SME, startup, government, banking, e-commerce, healthcare and retail organizations.", path: "/industries" });

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Technology for every stage of growth." description="Choose your sector to see the solutions, products and use cases most relevant to it." crumbs={[{ label: "Industries", href: "/industries" }]} />
      <IndustrySelector withHeading={false} />
      <CTASection />
    </>
  );
}
