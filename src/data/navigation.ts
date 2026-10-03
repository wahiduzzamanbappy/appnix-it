import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Industries", href: "/industries" }, { label: "Success Stories", href: "/success-stories" }, { label: "Insights", href: "/insights" }] },
  { title: "Solutions", links: [
    { label: "Software", href: "/solutions/software-development" }, { label: "AI", href: "/solutions/artificial-intelligence" },
    { label: "Cloud", href: "/solutions/cloud" }, { label: "Cybersecurity", href: "/solutions/cybersecurity" },
    { label: "E-commerce", href: "/solutions/ecommerce" } ] },
  { title: "Products", links: [
    { label: "Care Connect", href: "/products/care-connect" }, { label: "PMS", href: "/products/pms" },
    { label: "SuperShop Billing", href: "/products/supershop-billing" }, { label: "Pharmacy Module", href: "/products/pharmacy-module" },
    { label: "E-commerce", href: "/products/ecommerce" } ] },
  { title: "Contact", links: [{ label: "Contact", href: "/contact" }, { label: "Let's Talk", href: "/contact" }] },
];

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];
