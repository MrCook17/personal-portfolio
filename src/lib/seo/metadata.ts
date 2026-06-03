import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

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

const sharedMetadata = ({ title, description, path }: PageMetadataOptions) => ({
  title,
  description,
  alternates: {
    canonical: path,
  },
  twitter: {
    card: "summary" as const,
    title,
    description,
  },
});

export function createWebsiteMetadata(options: PageMetadataOptions): Metadata {
  return {
    ...sharedMetadata(options),
    openGraph: {
      title: options.title,
      description: options.description,
      url: options.path,
      siteName: siteConfig.name,
      locale: "en_GB",
      type: "website",
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
      url: options.path,
      siteName: siteConfig.name,
      locale: "en_GB",
      type: "article",
      publishedTime: options.publishedTime,
      modifiedTime: options.modifiedTime,
      tags: options.tags,
    },
  };
}
