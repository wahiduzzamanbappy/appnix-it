import type { FAQItem, Product } from "@/types";

/** Initial placeholder descriptions. Replace with verified product details as they become available. */
const commonFaqs = (name: string): FAQItem[] => [
  { question: `How can I learn more about ${name}?`, answer: "Send us an inquiry and we will arrange a conversation about your requirements and how the product could fit." },
  { question: "Can the product be adapted to our processes?", answer: "Scope and customisation options are discussed during consultation. Tell us how you work today and we will advise on the best approach." },
  { question: "Does it connect to other systems?", answer: "Integration needs vary by organisation. Share the tools you use and we will review what is practical." },
];

export const products: Product[] = [
  {
    slug: "care-connect", name: "Care Connect", category: "Healthcare", icon: "HeartPulse", mockup: "care",
    summary: "A healthcare-focused digital solution designed to streamline communication, service delivery and operational workflows.",
    overview: "Care Connect brings the moving parts of care delivery into one place, so patients and providers spend less time on coordination and more time on care.",
    highlights: ["Patient and provider communication", "Service and appointment workflows", "Operational visibility for teams"],
    capabilities: [
      ["Communication", "Keep patients, providers and staff informed through structured channels."],
      ["Service delivery", "Coordinate appointments, requests and follow-ups in one workflow."],
      ["Operations", "Give administrators a clear view of activity across the organisation."],
    ],
    benefits: ["Less coordination overhead", "Clearer handoffs between teams", "A consistent experience for patients", "Operational data in one place"],
    features: ["Role-based access", "Appointment and request tracking", "Notifications and reminders", "Activity reporting", "Secure data handling", "Admin configuration"],
    workflow: [["Intake", "Requests and enquiries are captured in one place."], ["Coordinate", "Teams assign and track work."], ["Deliver", "Services are delivered and recorded."], ["Review", "Reports highlight what needs attention."]],
    technology: ["Web application", "Mobile-ready interfaces", "Secure authentication", "Reporting layer"],
    useCases: ["Clinic and practice coordination", "Patient communication", "Service request management"],
    industries: ["healthcare"], services: ["software-development", "mobile-app-development", "artificial-intelligence"],
    faqs: commonFaqs("Care Connect"),
  },
  {
    slug: "pms", name: "PMS", category: "Business management", icon: "KanbanSquare", mockup: "pms",
    summary: "A business management solution designed to simplify operational processes, data management and business workflows.",
    overview: "PMS gives teams a structured way to run day-to-day operations, keep records consistent and see how work is progressing.",
    highlights: ["Operational process management", "Centralised business data", "Workflow tracking"],
    capabilities: [
      ["Process management", "Define and follow the steps that run your operations."],
      ["Data management", "Keep business records consistent and searchable."],
      ["Workflow tracking", "See what is in progress, blocked or complete."],
    ],
    benefits: ["One place for operational records", "Visible progress on work", "Consistent processes across teams", "Simpler reporting"],
    features: ["Configurable workflows", "User roles and permissions", "Search and filtering", "Dashboards", "Audit history", "Data export"],
    workflow: [["Capture", "Record work and data as it happens."], ["Organise", "Structure it into processes and records."], ["Track", "Follow progress and responsibilities."], ["Report", "Summarise performance for decisions."]],
    technology: ["Web application", "Relational data storage", "Role-based access", "Reporting and export"],
    useCases: ["Operations tracking", "Team task and record management", "Management reporting"],
    industries: ["corporate", "sme"], services: ["software-development", "erp", "business-automation"],
    faqs: commonFaqs("PMS"),
  },
  {
    slug: "supershop-billing", name: "SuperShop Billing", category: "Retail", icon: "Receipt", mockup: "billing",
    summary: "A retail billing and management solution designed for efficient transaction processing and business operations.",
    overview: "SuperShop Billing helps retail teams ring up sales quickly and keep products, stock and day-end figures organised.",
    highlights: ["Fast point-of-sale billing", "Product and stock records", "Daily sales reporting"],
    capabilities: [
      ["Billing", "Process transactions quickly at the counter."],
      ["Product management", "Maintain products, prices and stock in one list."],
      ["Reporting", "Review sales and activity by day, product or user."],
    ],
    benefits: ["Shorter queues at checkout", "Accurate product and price records", "Clear end-of-day figures", "Fewer manual calculations"],
    features: ["Barcode-friendly product lookup", "Receipt generation", "Stock tracking", "User accounts", "Sales reports", "Discount handling"],
    workflow: [["Add items", "Select or scan products."], ["Bill", "Apply discounts and take payment."], ["Record", "Sales and stock update automatically."], ["Review", "Check daily and periodic reports."]],
    technology: ["Web-based interface", "Receipt printing support", "Local and cloud data options", "Reporting"],
    useCases: ["Supershop and grocery billing", "Multi-counter retail", "Daily sales reconciliation"],
    industries: ["retail", "sme"], services: ["software-development", "erp", "ecommerce"],
    faqs: commonFaqs("SuperShop Billing"),
  },
  {
    slug: "pharmacy-module", name: "Pharmacy Module", category: "Healthcare retail", icon: "Pill", mockup: "pharmacy",
    summary: "A pharmacy-focused solution designed to support inventory, sales and operational management.",
    overview: "The Pharmacy Module helps pharmacies keep stock organised, process sales and monitor day-to-day operations.",
    highlights: ["Medicine inventory tracking", "Sales and billing", "Operational reporting"],
    capabilities: [
      ["Inventory", "Track medicine stock levels and batch details."],
      ["Sales", "Process pharmacy sales and receipts."],
      ["Operations", "Monitor purchasing, stock movement and activity."],
    ],
    benefits: ["Better visibility of stock", "Faster, more accurate sales", "Fewer manual stock checks", "Organised purchasing records"],
    features: ["Batch and expiry tracking", "Supplier records", "Sales and returns", "Low-stock indicators", "User roles", "Reports"],
    workflow: [["Receive", "Record incoming stock and supplier details."], ["Store", "Track batches and levels."], ["Sell", "Process sales and returns."], ["Reorder", "Spot low stock and plan purchasing."]],
    technology: ["Web application", "Relational data storage", "Role-based access", "Report generation"],
    useCases: ["Independent pharmacy management", "Pharmacy chain stock control", "Healthcare-linked retail"],
    industries: ["healthcare", "retail"], services: ["software-development", "erp"],
    faqs: commonFaqs("Pharmacy Module"),
  },
  {
    slug: "ecommerce", name: "E-commerce", category: "Digital commerce", icon: "ShoppingCart", mockup: "commerce",
    summary: "Scalable digital commerce solutions designed to help businesses build, operate and grow online.",
    overview: "Our e-commerce offering covers the storefront, catalogue, checkout and the back-office connections needed to run an online business.",
    highlights: ["Storefront and catalogue", "Checkout and payments", "Back-office integration"],
    capabilities: [
      ["Storefront", "A branded, mobile-friendly shopping experience."],
      ["Catalogue", "Manage products, categories and pricing."],
      ["Orders", "Take payment and manage fulfilment."],
    ],
    benefits: ["An online channel for your products", "Orders connected to your operations", "Fast, mobile-friendly shopping", "Room to grow the catalogue"],
    features: ["Product catalogue", "Cart and checkout", "Payment integration", "Order management", "Customer accounts", "Analytics hooks"],
    workflow: [["Discover", "Customers browse and search."], ["Order", "Cart, checkout and payment."], ["Fulfil", "Orders flow to your team."], ["Grow", "Analytics guide improvements."]],
    technology: ["Headless or packaged commerce", "Payment gateway integration", "Search", "Analytics"],
    useCases: ["Online retail store", "B2B ordering portal", "Multi-channel selling"],
    industries: ["ecommerce", "retail", "sme"], services: ["ecommerce", "website-development", "digital-marketing"],
    faqs: commonFaqs("our e-commerce solutions"),
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
