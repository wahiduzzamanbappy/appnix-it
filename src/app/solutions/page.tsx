import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/pages/PageHero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { CTASection } from "@/components/home/CTASection";

export const metadata = buildMetadata({ title: "Solutions", description: "Website, software and mobile development, UI/UX, AI, cloud, cybersecurity, ERP, e-commerce, IT consultancy and business automation from Appnix IT.", path: "/solutions" });

export default function SolutionsPage() {
  return (
    <>
      <PageHero eyebrow="Solutions" title="Solutions built for the way business moves." description="Explore everything Appnix IT can design, build and run for your organization." crumbs={[{ label: "Solutions", href: "/solutions" }]} />
      <ServicesGrid withHeading={false} />
      <CTASection />
    </>
  );
}
