import { siteConfig } from "@/config/site";

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path}`;
}

export function createCanonical(path = "") {
  return absoluteUrl(path);
}
