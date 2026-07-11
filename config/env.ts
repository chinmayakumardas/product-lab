// config/env.ts

export const env = {
  APP_NAME:
    process.env.NEXT_PUBLIC_APP_NAME ??
    "Product Lab",

  SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000",

  VERCEL_ANALYTICS:
    process.env.NEXT_PUBLIC_VERCEL_ANALYTICS ===
    "true",
};
