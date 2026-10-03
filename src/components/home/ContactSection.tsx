import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";

export function ContactSection({ as = "h2" }: { as?: "h1" | "h2" }) {
  const { email, phone, office, address, hours } = siteConfig.contact;
  const rows = [
    email && { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
    phone && { icon: Phone, label: "Phone", value: phone, href: `tel:${phone.replace(/\s/g, "")}` },
    (office || address) && { icon: MapPin, label: "Office", value: [office, address].filter(Boolean).join(", ") },
    hours && { icon: Clock, label: "Business hours", value: hours },
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href?: string }[];

  return (
    <section id="contact" className="bg-paper py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading as={as} tone="light" eyebrow="Contact" title="Let's build what's next." description="Tell us about your project. We'll follow up to understand your goals before suggesting an approach." />
            {rows.length > 0 && (
              <ul className="mt-10 space-y-5">
                {rows.map(({ icon: Cmp, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <Cmp aria-hidden="true" className="mt-1 h-5 w-5 text-ember" />
                    <div><p className="text-sm text-graphite">{label}</p>{href ? <a href={href} className="font-medium text-ink hover:text-ember">{value}</a> : <p className="font-medium text-ink">{value}</p>}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="lg:col-span-7"><ContactForm /></div>
        </div>
      </Container>
    </section>
  );
}
