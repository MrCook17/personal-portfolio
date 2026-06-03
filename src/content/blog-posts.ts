import { getReadingTimeFromWordCount } from "@/lib/reading-time";
import type { BlogPost } from "@/types/blog";

type BlogPostInput = Omit<BlogPost, "href" | "readingTime">;

const blogPostData: BlogPostInput[] = [
  {
    title: "Building my portfolio with Next.js and TypeScript",
    slug: "building-my-portfolio-nextjs-typescript",
    description:
      "How I planned and built a portfolio around reusable components, structured content, MDX case studies and recruiter-focused project evidence.",
    seo: {
      title: "Building My Portfolio with Next.js and TypeScript",
      description:
        "Notes on building a software developer portfolio with Next.js, TypeScript, reusable components, MDX, testing and deployment.",
      keywords: [
        "building a portfolio with Next.js and TypeScript",
        "Next.js TypeScript portfolio",
        "software developer portfolio site",
      ],
    },
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
    seo: {
      title: "What I Learned Building a Go REST API",
      description:
        "Technical notes from building a Go REST API with JSON endpoints, validation, concurrency, timeout handling, tests and benchmarks.",
      keywords: [
        "building a Go REST API",
        "Go REST API",
        "REST API good practice",
      ],
    },
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
    seo: {
      title: "Ecommerce SEO Lessons from a Real CMS",
      description:
        "Practical lessons from improving ecommerce SEO pages in a CMS, covering metadata, internal links, image optimisation and page structure.",
      keywords: [
        "ecommerce SEO CMS lessons",
        "CMS SEO case study",
        "ecommerce SEO page structure",
        "image SEO",
      ],
    },
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

export function getAdjacentBlogPosts(slug: string) {
  const publishedPosts = getPublishedBlogPosts();
  const currentIndex = publishedPosts.findIndex((post) => post.slug === slug);

  if (currentIndex === -1) {
    return {
      previousPost: undefined,
      nextPost: undefined,
    };
  }

  return {
    previousPost:
      currentIndex > 0 ? publishedPosts[currentIndex - 1] : undefined,
    nextPost:
      currentIndex < publishedPosts.length - 1
        ? publishedPosts[currentIndex + 1]
        : undefined,
  };
}

export function getBlogTags() {
  return Array.from(
    new Set(getPublishedBlogPosts().flatMap((post) => post.tags)),
  ).sort();
}
