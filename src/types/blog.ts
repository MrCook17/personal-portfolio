import type { ComponentType } from "react";

export const BLOG_TAGS = [
  "Next.js",
  "TypeScript",
  "React",
  "Go",
  "Backend",
  "REST API",
  "SEO",
  "Analytics",
  "CMS",
  "Learning",
  "Portfolio Build",
  "Commercial Web",
] as const;

export type BlogTag = (typeof BLOG_TAGS)[number];

export type BlogPost = {
  title: string;
  slug: string;
  href: `/blog/${string}`;
  description: string;
  date: string;
  updated?: string;
  tags: BlogTag[];
  readingTime: string;
  wordCount: number;
  published: boolean;
  featured?: boolean;
};

export type BlogPostComponent = ComponentType;
