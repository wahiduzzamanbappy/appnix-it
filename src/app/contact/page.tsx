import { buildMetadata } from "@/lib/seo";
import { ContactSection } from "@/components/home/ContactSection";
import { Container } from "@/components/ui/Container";
import { FAQ } from "@/components/ui/FAQ";
import { defaultSolutionFaqs } from "@/data/company";

export const metadata = buildMetadata({ title: "Contact", description: "Start a conversation with Appnix IT about software, AI, cloud, cybersecurity, ERP, e-commerce or your next digital project.", path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <div className="bg-ink pt-24" aria-hidden="true" />
      <ContactSection as="h1" />
      <section className="bg-white py-20">
        <Container><div className="mx-auto max-w-3xl"><h2 className="mb-8 font-display text-3xl font-semibold text-ink">Before you write</h2><FAQ items={defaultSolutionFaqs} /></div></Container>
      </section>
    </>
  );
}
