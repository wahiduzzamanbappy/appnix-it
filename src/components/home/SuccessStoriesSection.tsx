import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/home/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";

export function SuccessStoriesSection() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal><SectionHeading eyebrow="Success stories" title="Featured work, built and ready to explore." /></Reveal>
          <Button href="/success-stories" variant="outline" track="home_view_success_stories">View Success Stories</Button>
        </div>
        <ul className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.slice(0, 3).map((c, i) => <li key={c.slug}><Reveal delay={i * 0.08} className="h-full"><CaseStudyCard study={c} /></Reveal></li>)}
        </ul>
      </Container>
    </section>
  );
}
