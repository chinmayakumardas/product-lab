// config/site.ts

export const siteConfig = {
  // Application
  name: "Product Lab",
  shortName: "Lab",

  title: {
    default: "Product Lab",
    template: "%s | Product Lab",
  },

  description:
    "Production-ready MVPs focused on solving real-world business problems.",

  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000",

  ogImage: "/og/default.png",

  locale: "en_US",

  creator: {
    name: "Chinmaya Kumar Das",
    website: "https://chinmayakumardas.com",
    email: "contact@chinmayakumardas.com",
  },
};
