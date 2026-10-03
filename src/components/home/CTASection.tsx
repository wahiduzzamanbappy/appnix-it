import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTASection({ heading = "Have an idea worth building?", text = "Let's turn your vision into technology that creates real impact." }: { heading?: string; text?: string }) {
  return (
    <section className="relative isolate overflow-hidden border-t border-white/10 bg-ink py-28 lg:py-40">
      <div aria-hidden="true" className="absolute -bottom-1/2 left-1/2 -z-10 h-[120%] w-[90%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,122,0,0.38),rgba(255,176,0,0.08)_45%,transparent_70%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:linear-gradient(to_bottom,transparent,#000_60%)]" />
      <Container>
        <h2 className="max-w-5xl font-display text-display-xl font-semibold text-white text-balance">{heading}</h2>
        <p className="mt-8 max-w-xl text-xl text-white/75">{text}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" size="lg" track="cta_section_lets_talk">Let&apos;s Talk</Button>
          <Button href="/solutions" variant="outline" size="lg" track="cta_section_explore_solutions">Explore Solutions</Button>
        </div>
      </Container>
    </section>
  );
}
