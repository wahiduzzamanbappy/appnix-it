import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/visuals/HeroVisual";
import { heroDomains } from "@/data/company";

/** Server component with CSS-only entrance so the headline paints immediately (LCP). */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-ink">
      <HeroVisual className="pointer-events-none absolute inset-y-0 right-[-30%] -z-0 w-[130%] opacity-70 sm:right-[-12%] sm:w-[85%] sm:opacity-100 lg:right-0 lg:w-[62%]" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent sm:via-ink/60" />

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-10 pt-36 lg:pb-14">
        <div className="max-w-4xl">
          <h1 id="hero-title" className="font-display text-display-xl font-semibold text-white">
            <span className="block animate-rise">Where</span>
            <span className="block animate-rise [animation-delay:120ms]">Ideas</span>
            <span className="block animate-rise [animation-delay:240ms]">Reborn<span className="text-orange">.</span></span>
          </h1>
          <p className="mt-8 max-w-xl animate-rise text-lg leading-relaxed text-white/75 [animation-delay:380ms] sm:text-xl">
            Turning bold ideas into intelligent digital products, scalable technology and meaningful business solutions.
          </p>
          <div className="mt-10 flex animate-rise flex-col gap-3 [animation-delay:500ms] sm:flex-row">
            <Button href="/contact" size="lg" track="hero_start_conversation">Start a Conversation</Button>
            <Button href="/solutions" variant="outline" size="lg" track="hero_explore_solutions">Explore Our Solutions</Button>
          </div>
        </div>

        <dl className="mt-16 grid animate-rise grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-6 [animation-delay:700ms] lg:mt-24 lg:grid-cols-4">
          {heroDomains.map(([title, text]) => (
            <div key={title}>
              <dt className="font-display text-lg font-medium text-white">{title}</dt>
              <dd className="mt-1 text-sm text-muted">{text}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
