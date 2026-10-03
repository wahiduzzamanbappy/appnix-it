import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/pages/PageHero";
import { Container } from "@/components/ui/Container";
import { InsightCard } from "@/components/home/InsightCard";
import { EmptyState } from "@/components/ui/States";
import { CTASection } from "@/components/home/CTASection";
import { insights, insightCategories } from "@/data/insights";

export const metadata = buildMetadata({ title: "Insights", description: "Perspectives from Appnix IT on technology, AI, cybersecurity, cloud, software development, digital transformation and e-commerce.", path: "/insights" });

export default function InsightsPage() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Perspectives on building what's next." description={`Topics we write about: ${insightCategories.join(", ")}.`} crumbs={[{ label: "Insights", href: "/insights" }]} />
      <section className="bg-paper py-20 lg:py-28">
        <Container>
          {insights.length ? <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{insights.map((i) => <li key={i.slug}><InsightCard insight={i} /></li>)}</ul>
            : <EmptyState title="Articles are on the way" message="We're preparing our first insights. In the meantime, explore our solutions or get in touch." />}
        </Container>
      </section>
      <CTASection />
    </>
  );
}
