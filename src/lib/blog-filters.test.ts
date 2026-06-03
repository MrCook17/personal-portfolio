import { describe, expect, it } from "vitest";

import {
  blogPostMatchesSearch,
  filterBlogPosts,
  type SearchableBlogPost,
} from "@/lib/blog-filters";
import type { BlogTag } from "@/types/blog";

const posts: SearchableBlogPost[] = [
  {
    title: "Building my portfolio with Next.js and TypeScript",
    slug: "building-my-portfolio-nextjs-typescript",
    description: "Reusable components and recruiter-focused evidence.",
    tags: ["Next.js", "TypeScript", "Portfolio Build"] as BlogTag[],
  },
  {
    title: "What I learned from building a Go REST API",
    slug: "building-a-go-rest-api",
    description: "Concurrency, timeouts and structured JSON results.",
    tags: ["Go", "Backend", "REST API"] as BlogTag[],
  },
  {
    title: "Improving ecommerce SEO pages in a real CMS",
    slug: "ecommerce-seo-lessons-real-cms",
    description: "Metadata, internal links and CMS constraints.",
    tags: ["SEO", "Analytics", "CMS"] as BlogTag[],
  },
];

describe("blogPostMatchesSearch", () => {
  it("matches by title", () => {
    expect(blogPostMatchesSearch(posts[0], "portfolio")).toBe(true);
  });

  it("matches by description", () => {
    expect(blogPostMatchesSearch(posts[1], "timeouts")).toBe(true);
  });

  it("matches by tag", () => {
    expect(blogPostMatchesSearch(posts[2], "analytics")).toBe(true);
  });

  it("matches by slug", () => {
    expect(blogPostMatchesSearch(posts[1], "go-rest-api")).toBe(true);
  });

  it("returns false when no searchable field matches", () => {
    expect(blogPostMatchesSearch(posts[0], "shopify")).toBe(false);
  });

  it("returns true for an empty search query", () => {
    expect(blogPostMatchesSearch(posts[0], "")).toBe(true);
  });
});

describe("filterBlogPosts", () => {
  it("returns all posts when no filters are active", () => {
    expect(filterBlogPosts(posts)).toHaveLength(3);
  });

  it("filters by tag", () => {
    const result = filterBlogPosts(posts, {
      tag: "Backend" as BlogTag,
    });

    expect(result).toHaveLength(1);
    expect(result[0].slug).toBe("building-a-go-rest-api");
  });

  it("combines search and tag filters", () => {
    const result = filterBlogPosts(posts, {
      query: "cms",
      tag: "SEO" as BlogTag,
    });

    expect(result).toHaveLength(1);
    expect(result[0].slug).toBe("ecommerce-seo-lessons-real-cms");
  });

  it("returns an empty array when nothing matches", () => {
    const result = filterBlogPosts(posts, {
      query: "cms",
      tag: "Backend" as BlogTag,
    });

    expect(result).toEqual([]);
  });
});
