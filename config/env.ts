// config/env.ts

export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  appName: process.env.NEXT_PUBLIC_APP_NAME || "Product Lab",

  vercelAnalytics:
    process.env.NEXT_PUBLIC_VERCEL_ANALYTICS === "true",
};
