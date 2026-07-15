import type { Metadata } from "next";

import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/seo/urls";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

type ArticleMetadataOptions = PageMetadataOptions & {
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
};

export const defaultOpenGraphImage = {
  url: "/images/profile_pic.webp",
  width: 800,
  height: 800,
  alt: "Charlie Cook wearing a suit and yellow tie outdoors",
};

const sharedMetadata = ({ title, description, path }: PageMetadataOptions) => {
  const canonicalUrl = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    twitter: {
      card: "summary" as const,
      title,
      description,
      images: [absoluteUrl(defaultOpenGraphImage.url)],
    },
  };
};

export function createWebsiteMetadata(options: PageMetadataOptions): Metadata {
  return {
    ...sharedMetadata(options),
    openGraph: {
      title: options.title,
      description: options.description,
      url: absoluteUrl(options.path),
      siteName: siteConfig.name,
      locale: "en_GB",
      type: "website",
      images: [defaultOpenGraphImage],
    },
  };
}

export function createArticleMetadata(
  options: ArticleMetadataOptions,
): Metadata {
  return {
    ...sharedMetadata(options),
    openGraph: {
      title: options.title,
      description: options.description,
      url: absoluteUrl(options.path),
      siteName: siteConfig.name,
      locale: "en_GB",
      type: "article",
      publishedTime: options.publishedTime,
      modifiedTime: options.modifiedTime,
      tags: options.tags,
      images: [defaultOpenGraphImage],
    },
  };
}
