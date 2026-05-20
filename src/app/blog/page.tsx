import type { Metadata } from "next";

import { BlogExplorer } from "@/components/blog/blog-explorer";
import { FeaturedBlogCard } from "@/components/blog/featured-blog-card";
import { Callout } from "@/components/ui/callout";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import {
  getBlogTags,
  getFeaturedBlogPost,
  getPublishedBlogPosts,
} from "@/content/blog-posts";

export const metadata: Metadata = {
  title: "Software Development Notes | Charlie Cook",
  description:
    "Software development notes on Next.js, TypeScript, backend APIs, ecommerce SEO, analytics, debugging and portfolio learning.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Software Development Notes | Charlie Cook",
    description:
      "Notes on building projects, backend development, SEO, analytics, debugging and what I am learning.",
    type: "website",
  },
};

export default function BlogPage() {
  const publishedPosts = getPublishedBlogPosts();
  const featuredPost = getFeaturedBlogPost();
  const tags = getBlogTags();

  const nonFeaturedPosts = featuredPost
    ? publishedPosts.filter((post) => post.slug !== featuredPost.slug)
    : publishedPosts;

  return (
    <main className="py-12 md:py-16">
      <PageHeader
        eyebrow="Blog & learning notes"
        title="Software Development Notes"
        description="Notes on building projects, backend development, SEO, analytics, debugging and what I am learning while developing this portfolio and wider software projects."
      />

      <Container size="lg" className="mt-10 space-y-12 md:mt-12">
        {publishedPosts.length >= 2 ? (
          <>
            {featuredPost ? <FeaturedBlogCard post={featuredPost} /> : null}

            <BlogExplorer
              posts={featuredPost ? nonFeaturedPosts : publishedPosts}
              tags={tags}
            />
          </>
        ) : (
          <Callout title="Blog notes are being prepared" variant="note">
            The blog structure is ready, but posts should only be promoted once
            there are at least two useful notes available.
          </Callout>
        )}
      </Container>
    </main>
  );
}
