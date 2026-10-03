import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Hero } from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { FeaturedBento } from "@/components/home/FeaturedBento";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { IndustrySelector } from "@/components/home/IndustrySelector";
import { SuccessStoriesSection } from "@/components/home/SuccessStoriesSection";
import { WhySection } from "@/components/home/WhySection";
import { TechnologyGrid } from "@/components/home/TechnologyGrid";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { InsightsSection } from "@/components/home/InsightsSection";
import { CTASection } from "@/components/home/CTASection";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata = buildMetadata({ title: siteConfig.seo.defaultTitle, description: siteConfig.description, path: "/" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesGrid />
      <FeaturedBento />
      <ProductShowcase />
      <IndustrySelector />
      <SuccessStoriesSection />
      <WhySection />
      <TechnologyGrid />
      <ProcessTimeline />
      <InsightsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
