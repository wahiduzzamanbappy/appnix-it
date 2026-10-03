import type { CaseStudy } from "@/types";

/**
 * Featured work. Challenge/Solution/Capabilities are descriptive; Outcome is an editable placeholder.
 * Do not add client names, metrics or outcomes until they are verified.
 */
const pendingOutcome = "Verified outcomes for this project will be published here once they are confirmed.";

export const caseStudies: CaseStudy[] = [
  { slug: "care-connect", productSlug: "care-connect", title: "Care Connect", category: "Healthcare",
    challenge: "Healthcare teams juggle communication, scheduling and administration across disconnected tools.",
    solution: "A single digital solution that brings communication, service delivery and operational workflows together.",
    capabilities: ["Workflow design", "Web application", "Role-based access", "Reporting"], outcome: pendingOutcome, isPlaceholder: true },
  { slug: "pms", productSlug: "pms", title: "PMS", category: "Business management",
    challenge: "Operational records and processes are scattered, making work hard to track and report on.",
    solution: "A business management solution that centralises processes, data and workflow tracking.",
    capabilities: ["Process configuration", "Data management", "Dashboards", "Permissions"], outcome: pendingOutcome, isPlaceholder: true },
  { slug: "supershop-billing", productSlug: "supershop-billing", title: "SuperShop Billing", category: "Retail",
    challenge: "Retail counters need quick, accurate billing alongside up-to-date product and stock records.",
    solution: "A billing and management solution for efficient transaction processing and day-to-day retail operations.",
    capabilities: ["Point-of-sale billing", "Stock tracking", "Receipts", "Sales reporting"], outcome: pendingOutcome, isPlaceholder: true },
  { slug: "pharmacy-module", productSlug: "pharmacy-module", title: "Pharmacy Module", category: "Healthcare retail",
    challenge: "Pharmacies must track batches, expiry and sales while keeping day-to-day operations running smoothly.",
    solution: "A pharmacy-focused module supporting inventory, sales and operational management.",
    capabilities: ["Inventory tracking", "Sales and returns", "Supplier records", "Reporting"], outcome: pendingOutcome, isPlaceholder: true },
  { slug: "ecommerce", productSlug: "ecommerce", title: "E-commerce", category: "Digital commerce",
    challenge: "Businesses want to sell online without losing control of catalogue, orders and back-office processes.",
    solution: "Scalable digital commerce solutions covering storefront, checkout and operational integration.",
    capabilities: ["Storefront", "Catalogue management", "Payment integration", "Order management"], outcome: pendingOutcome, isPlaceholder: true },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
