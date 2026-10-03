import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { siteConfig, type SocialKey } from "@/config/site";
import { footerNav, legalNav } from "@/data/navigation";

const socialIcons: Record<SocialKey, { icon: LucideIcon; label: string }> = {
  linkedin: { icon: Linkedin, label: "LinkedIn" },
  facebook: { icon: Facebook, label: "Facebook" },
  instagram: { icon: Instagram, label: "Instagram" },
  youtube: { icon: Youtube, label: "YouTube" },
};

export function Footer() {
  const { contact, social } = siteConfig;
  const socials = (Object.keys(social) as SocialKey[]).filter((k) => social[k]);

  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 font-display text-2xl font-medium tracking-tight">{siteConfig.tagline}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">Software, AI, cloud, cybersecurity and commerce solutions for organisations ready to build what&apos;s next.</p>

            <ul className="mt-6 space-y-2 text-sm text-muted">
              {contact.email && <li className="flex items-center gap-2"><Mail aria-hidden="true" className="h-4 w-4 text-orange" /><a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a></li>}
              {contact.phone && <li className="flex items-center gap-2"><Phone aria-hidden="true" className="h-4 w-4 text-orange" /><a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-white">{contact.phone}</a></li>}
              {(contact.address || contact.office) && <li className="flex items-start gap-2"><MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 text-orange" /><span>{contact.office} {contact.address}</span></li>}
            </ul>

            {socials.length > 0 && (
              <ul className="mt-6 flex gap-3" aria-label="Social media">
                {socials.map((key) => {
                  const { icon: Cmp, label } = socialIcons[key];
                  return (
                    <li key={key}>
                      <a href={social[key]} target="_blank" rel="noopener noreferrer" aria-label={`${siteConfig.name} on ${label}`}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-orange hover:text-orange">
                        <Cmp aria-hidden="true" className="h-4 w-4" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-8 lg:pl-10">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h2 className="mb-4 font-display text-base font-semibold text-white">{col.title}</h2>
                <ul className="space-y-1">
                  {col.links.map((l) => (
                    <li key={l.label}><Link href={l.href} className="inline-block py-1.5 text-sm text-muted transition-colors hover:text-orange">{l.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-sm text-muted">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
            {legalNav.map((l) => <li key={l.href}><Link href={l.href} className="inline-block py-1.5 hover:text-white">{l.label}</Link></li>)}
          </ul>
          <Button href="/contact" variant="outline" arrow={false} className="hidden md:inline-flex" track="footer_lets_talk">Let&apos;s Talk</Button>
        </div>
      </Container>
    </footer>
  );
}
