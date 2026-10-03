export interface LegalDoc { slug: string; title: string; description: string; sections: { heading: string; body: string }[] }

/** PLACEHOLDER legal text. Replace with reviewed legal copy before launch. */
const notice = "This section is placeholder content and must be replaced with text reviewed by a qualified legal professional.";

export const legalDocs: Record<string, LegalDoc> = {
  "privacy-policy": { slug: "privacy-policy", title: "Privacy Policy", description: "How Appnix IT handles personal information.",
    sections: [
      { heading: "Information we collect", body: notice },
      { heading: "How we use information", body: notice },
      { heading: "Sharing and retention", body: notice },
      { heading: "Your rights and contact", body: notice },
    ] },
  "terms-and-conditions": { slug: "terms-and-conditions", title: "Terms & Conditions", description: "Terms for using the Appnix IT website.",
    sections: [
      { heading: "Use of this website", body: notice },
      { heading: "Intellectual property", body: notice },
      { heading: "Limitation of liability", body: notice },
      { heading: "Governing law", body: notice },
    ] },
  "cookie-policy": { slug: "cookie-policy", title: "Cookie Policy", description: "How Appnix IT uses cookies and similar technologies.",
    sections: [
      { heading: "What cookies are", body: notice },
      { heading: "Cookies we use", body: notice },
      { heading: "Managing cookies", body: notice },
    ] },
};
