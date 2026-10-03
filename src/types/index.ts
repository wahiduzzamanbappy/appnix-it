export type IconName =
  | "Globe" | "Code2" | "Smartphone" | "PenTool" | "Megaphone" | "BrainCircuit"
  | "Cloud" | "ShieldCheck" | "Compass" | "Boxes" | "ShoppingCart" | "Workflow"
  | "HeartPulse" | "KanbanSquare" | "Receipt" | "Pill" | "Store" | "Building2"
  | "Rocket" | "Landmark" | "Briefcase" | "Database" | "Layers" | "Lock";

export interface NavItem { label: string; href: string }
export interface FAQItem { question: string; answer: string }
export type Pair = [title: string, description: string];

export type VisualKind = "neural" | "stack" | "cloud" | "shield" | "commerce" | "flow";
export type MockupKind = "care" | "pms" | "billing" | "pharmacy" | "commerce";

export interface Service {
  slug: string;
  name: string;
  icon: IconName;
  visual: VisualKind;
  summary: string;
  tagline: string;
  overview: string;
  capabilities: Pair[];
  benefits: string[];
  useCases: string[];
  technologies: string[];
  relatedProducts: string[];
  relatedIndustries: string[];
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  icon: IconName;
  mockup: MockupKind;
  summary: string;
  overview: string;
  highlights: string[];
  capabilities: Pair[];
  benefits: string[];
  features: string[];
  workflow: Pair[];
  technology: string[];
  useCases: string[];
  industries: string[];
  services: string[];
  faqs: FAQItem[];
}

export interface Industry {
  slug: string;
  name: string;
  icon: IconName;
  description: string;
  services: string[];
  products: string[];
  useCases: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  productSlug: string;
  category: string;
  challenge: string;
  solution: string;
  capabilities: string[];
  outcome: string;
  /** true while text is editable placeholder copy */
  isPlaceholder: boolean;
}

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export interface Insight {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string; // ISO date
  readingMinutes: number;
  author?: { name: string; role?: string };
  image?: { src: string; alt: string };
  body: ContentBlock[];
  /** Layout/development content. Hidden in production unless NEXT_PUBLIC_SHOW_DEV_CONTENT=true */
  isDevelopmentContent: boolean;
}

export interface Stat { value: number; suffix?: string; label: string; verified: boolean }
