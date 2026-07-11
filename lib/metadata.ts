import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

type MetadataProps = {
  title?: string;
  description?: string;
  image?: string;
};

export function createMetadata({
  title,
  description,
  image,
}: MetadataProps = {}): Metadata {
  const metaTitle = title
    ? siteConfig.title.template.replace("%s", title)
    : siteConfig.title.default;

  const metaDescription =
    description ?? siteConfig.description;

  const metaImage = image ?? siteConfig.ogImage;

  return {
    title: metaTitle,
    description: metaDescription,

    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [metaImage],
      locale: siteConfig.locale,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
  };
}
