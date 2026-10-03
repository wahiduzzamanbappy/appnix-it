import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { aboutCopy } from "@/data/company";

export function AboutSection() {
  return (
    <section className="bg-paper py-24 lg:py-36">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-display-lg font-semibold text-balance text-ink">{aboutCopy.heading}</h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-graphite">{aboutCopy.body}</p>
            <div className="mt-10"><Button href="/about" variant="outlineDark" track="home_about">Discover Appnix IT</Button></div>
          </Reveal>

          {/* abstract composition: possibilities (scattered) resolving into progress (aligned) */}
          <Reveal delay={0.15} className="lg:col-span-5">
            <div role="img" aria-label="Abstract graphic: scattered points resolving into an ordered rising line" className="relative aspect-[4/5] overflow-hidden rounded-sm bg-ink">
              <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="ab-g" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#FF7A00" /><stop offset="1" stopColor="#FFB000" /></linearGradient>
                  <pattern id="ab-p" width="25" height="25" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#fff" fillOpacity="0.18" /></pattern>
                </defs>
                <rect width="400" height="500" fill="url(#ab-p)" />
                {Array.from({ length: 26 }, (_, i) => {
                  const t = i / 25;
                  const x = 30 + t * 340, y = 440 - t * t * 340 - (1 - t) * 40;
                  const jitter = (1 - t) * 60 * Math.sin(i * 12.9898);
                  return <circle key={i} cx={x} cy={y + jitter} r={2 + t * 4} fill={t > 0.55 ? "url(#ab-g)" : "#8A8F98"} fillOpacity={0.5 + t * 0.5} />;
                })}
                <path d="M30 440 C 160 420, 260 330, 370 100" stroke="url(#ab-g)" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M30 460 C 170 450, 280 380, 370 150" stroke="#fff" strokeOpacity="0.15" />
              </svg>
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-orange/30 blur-[80px]" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
