/**
 * Central site configuration. Leave contact/social values empty until real
 * details are available: empty values are omitted from the UI and from schema.
 */
export const siteConfig = {
  name: "Appnix IT",
  tagline: "Where ideas Reborn.",
  description:
    "Appnix IT turns ideas into intelligent digital products, scalable technology and practical business solutions: software, AI, cloud, cybersecurity, ERP and e-commerce.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  locale: "en_US",

  /**
   * Replace /public/brand/appnix-logo.svg with the official logo file and set its
   * real pixel dimensions here so the proportions are preserved.
   */
  logo: { src: "/brand/appnix-logo.svg", width: 176, height: 48, alt: "Appnix IT" },

  contact: {
    email: "",
    phone: "",
    office: "",
    address: "",
    hours: "",
  },

  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    youtube: "",
  },

  seo: {
    defaultTitle: "Appnix IT | Where ideas Reborn.",
    titleTemplate: "%s | Appnix IT",
    keywords: [
      "software development", "web development", "mobile apps", "AI solutions",
      "cloud", "cybersecurity", "ERP", "e-commerce", "IT consultancy", "digital transformation",
    ],
    twitterHandle: "",
  },

  analytics: { gaId: process.env.NEXT_PUBLIC_GA_ID ?? "" },
};

export type SocialKey = keyof typeof siteConfig.social;
