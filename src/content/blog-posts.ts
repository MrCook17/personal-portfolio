import { getReadingTimeFromWordCount } from "@/lib/reading-time";
import type { BlogPost } from "@/types/blog";

type BlogPostInput = Omit<BlogPost, "href" | "readingTime">;

const blogPostData: BlogPostInput[] = [
  {
    title: "Building my portfolio with Next.js and TypeScript",
    slug: "building-my-portfolio-nextjs-typescript",
    description:
      "How I planned and built a portfolio around reusable components, structured content, MDX case studies and recruiter-focused project evidence.",
    date: "2026-05-20",
    tags: ["Next.js", "TypeScript", "React", "Portfolio Build", "Learning"],
    wordCount: 1040,
    published: true,
    featured: true,
  },
  {
    title: "What I learned from building a Go REST API",
    slug: "building-a-go-rest-api",
    description:
      "A short note on building a Go API that checks website availability, handles timeouts, runs checks concurrently and returns structured JSON results.",
    date: "2026-05-20",
    tags: ["Go", "Backend", "REST API", "Learning"],
    wordCount: 1080,
    published: true,
  },
  {
    title: "What I learned from improving ecommerce SEO pages in a real CMS",
    slug: "ecommerce-seo-lessons-real-cms",
    description:
      "Practical lessons from improving ecommerce pages with metadata, page structure, internal links, image optimisation and CMS constraints.",
    date: "2026-05-20",
    tags: ["SEO", "Analytics", "CMS", "Commercial Web", "Learning"],
    wordCount: 1010,
    published: true,
  },
];

export const blogPosts: BlogPost[] = blogPostData.map((post) => ({
  ...post,
  href: `/blog/${post.slug}`,
  readingTime: getReadingTimeFromWordCount(post.wordCount),
}));

export function getPublishedBlogPosts() {
  return blogPosts
    .filter((post) => post.published)
    .sort(
      (firstPost, secondPost) =>
        new Date(secondPost.date).getTime() -
        new Date(firstPost.date).getTime(),
    );
}

export function getFeaturedBlogPost() {
  const publishedPosts = getPublishedBlogPosts();

  return publishedPosts.find((post) => post.featured) ?? publishedPosts[0];
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPublishedBlogPostBySlug(slug: string) {
  const post = getBlogPostBySlug(slug);

  if (!post?.published) {
    return undefined;
  }

  return post;
}

export function getBlogTags() {
  return Array.from(
    new Set(getPublishedBlogPosts().flatMap((post) => post.tags)),
  ).sort();
}
