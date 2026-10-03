import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { InsightCard } from "@/components/home/InsightCard";
import { EmptyState } from "@/components/ui/States";
import { insights } from "@/data/insights";

export function InsightsSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading tone="light" eyebrow="Insights" title="Perspectives on building what's next." />
          <Button href="/insights" variant="outlineDark" track="home_read_insights">Read Insights</Button>
        </div>
        <div className="mt-14">
          {insights.length ? (
            <ul className="grid gap-5 md:grid-cols-3">{insights.slice(0, 3).map((i) => <li key={i.slug}><InsightCard insight={i} /></li>)}</ul>
          ) : (
            <EmptyState title="Articles are on the way" message="We're preparing our first insights on technology, AI, cloud and security. Check back soon." />
          )}
        </div>
      </Container>
    </section>
  );
}
