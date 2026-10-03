import type { IconName, Pair, Stat } from "@/types";

/**
 * Statistics are PLACEHOLDERS (verified: false). They render only in development
 * (or when NEXT_PUBLIC_SHOW_DEV_CONTENT=true). Set `verified: true` once figures are confirmed.
 */
export const stats: Stat[] = [
  { value: 1, suffix: "+", label: "Years of innovation", verified: false },
  { value: 10, suffix: "+", label: "Projects delivered", verified: false },
  { value: 50, suffix: "+", label: "Business clients", verified: false },
  { value: 20, suffix: "+", label: "Technology solutions", verified: false },
];

export const aboutCopy = {
  heading: "Technology that turns possibilities into progress.",
  body: "Appnix IT helps organizations transform ideas into practical digital solutions through software, AI, cloud, cybersecurity, enterprise systems and modern digital experiences.",
};

export const heroDomains: Pair[] = [
  ["Software & apps", "Web, mobile and custom systems"],
  ["AI & automation", "Intelligence built into workflows"],
  ["Cloud & security", "Infrastructure you can rely on"],
  ["Commerce & ERP", "Operations and selling, connected"],
];

export const whyAppnix: { title: string; text: string }[] = [
  { title: "Business-focused thinking", text: "We start with the problem your organisation is trying to solve, then choose the technology." },
  { title: "Technology expertise", text: "Software, AI, cloud, security and enterprise systems under one roof." },
  { title: "Scalable solutions", text: "Architecture that starts small and grows with your users and data." },
  { title: "Modern digital experiences", text: "Fast, accessible interfaces designed to be easy for real people to use." },
  { title: "Security-conscious development", text: "Secure defaults, validated input and careful data handling in every build." },
  { title: "Long-term technology partnership", text: "Support after launch, and a roadmap for what comes next." },
];

export const processSteps: Pair[] = [
  ["Discover", "We listen first: goals, users, constraints and what success should look like."],
  ["Define", "We turn findings into scope, priorities and a plan you can approve."],
  ["Design", "Flows, interfaces and architecture are shaped and tested before build."],
  ["Develop", "Iterative delivery with regular demos, testing and review."],
  ["Deliver & Evolve", "Launch, support and improve as your needs change."],
];

export const technologyCategories: { name: string; icon: IconName; areas: string[] }[] = [
  { name: "Web", icon: "Globe", areas: ["Front-end frameworks", "Content management", "Progressive web apps"] },
  { name: "Mobile", icon: "Smartphone", areas: ["iOS and Android", "Cross-platform", "Offline sync"] },
  { name: "Cloud", icon: "Cloud", areas: ["Infrastructure as code", "Containers", "CI/CD"] },
  { name: "AI", icon: "BrainCircuit", areas: ["Language models", "Machine learning", "Automation"] },
  { name: "Data", icon: "Database", areas: ["Relational databases", "Analytics", "Reporting"] },
  { name: "Security", icon: "Lock", areas: ["Identity and access", "Encryption", "Monitoring"] },
  { name: "Enterprise", icon: "Layers", areas: ["ERP", "Integration", "Workflow engines"] },
  { name: "Commerce", icon: "ShoppingCart", areas: ["Storefronts", "Payments", "Order management"] },
];

export const defaultSolutionFaqs = [
  { question: "How do we get started?", answer: "Send an inquiry describing what you want to achieve. We will follow up to understand your goals, constraints and timeline before proposing an approach." },
  { question: "Can you work with our existing systems?", answer: "In most cases yes. Tell us what you use today and we will assess the best way to integrate, extend or replace it." },
  { question: "Do you offer support after launch?", answer: "Maintenance and support can be agreed as part of a project. Select Maintenance / Support in the contact form to discuss it." },
];
