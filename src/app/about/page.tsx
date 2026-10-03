import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/pages/PageHero";
import { CheckList } from "@/components/pages/Blocks";
import { AboutSection } from "@/components/home/AboutSection";
import { WhySection } from "@/components/home/WhySection";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { CTASection } from "@/components/home/CTASection";
import { siteConfig } from "@/config/site";

export const metadata = buildMetadata({ title: "About", description: "Appnix IT helps organizations transform ideas into practical digital solutions through software, AI, cloud, cybersecurity and enterprise systems.", path: "/about" });

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="We turn ideas into technology that works." description={`${siteConfig.name} is a technology and digital solutions company serving organizations that want practical, scalable products.`} crumbs={[{ label: "About", href: "/about" }]} primary={{ label: "Start a Conversation", href: "/contact" }} />
      <AboutSection />
      <CheckList tone="dark" eyebrow="What we do" title="Twelve disciplines, one partner." items={["Software, web and mobile development", "AI solutions and business automation", "Cloud, infrastructure and cybersecurity", "ERP, e-commerce and digital marketing", "UI/UX design and IT consultancy"]} />
      <WhySection />
      <ProcessTimeline tone="dark" />
      <CTASection />
    </>
  );
}
