import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/pages/PageHero";
import { Container } from "@/components/ui/Container";
import { CaseStudyCard } from "@/components/home/CaseStudyCard";
import { CTASection } from "@/components/home/CTASection";
import { caseStudies } from "@/data/case-studies";

export const metadata = buildMetadata({ title: "Success Stories", description: "Featured work from Appnix IT: Care Connect, PMS, SuperShop Billing, Pharmacy Module and E-commerce.", path: "/success-stories" });

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero eyebrow="Success stories" title="Featured work." description="The products and solutions Appnix IT has built, shown with the challenge, solution and capabilities behind each." crumbs={[{ label: "Success Stories", href: "/success-stories" }]} />
      <section className="bg-ink pb-24 lg:pb-32">
        <Container><ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{caseStudies.map((c) => <li key={c.slug}><CaseStudyCard study={c} /></li>)}</ul></Container>
      </section>
      <CTASection />
    </>
  );
}
