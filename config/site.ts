// config/site.ts

export const siteConfig = {
  name: "Product Lab",
  shortName: "Lab",

  title: {
    default: "Product Lab",
    template: "%s | Product Lab",
  },

  description:
    "A collection of production-ready MVPs built to validate business ideas and solve real-world problems.",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  ogImage: "/og/default.png",

  author: {
    name: "Chinmaya Kumar Das",
    website: "https://chinmayakumardas.com",
    email: "contact@chinmayakumardas.com",
  },

  keywords: [
    "AI",
    "Developer Tools",
    "Product Lab",
    "Next.js",
    "Business Tools",
    "Open Source",
    "Product Validation",
    "MVP",
    "Visualization",
    "Automation",
  ],

  links: {
    github: "https://github.com/chinmayakumardas/product-lab",
    portfolio: "https://chinmayakumardas.com",
    twitter: "",
    linkedin: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
