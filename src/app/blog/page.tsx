import type { Metadata } from "next";

import { BlogExplorer } from "@/components/blog/blog-explorer";
import { FeaturedBlogCard } from "@/components/blog/featured-blog-card";
import { Callout } from "@/components/ui/callout";
import { PageContent } from "@/components/ui/page-layout";
import { PageHeader } from "@/components/ui/page-header";
import {
  getBlogTags,
  getFeaturedBlogPost,
  getPublishedBlogPosts,
} from "@/content/blog-posts";
import { createWebsiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createWebsiteMetadata({
  title: "Software Development Notes | Charlie Cook",
  description:
    "Software development notes on Next.js, TypeScript, backend APIs, ecommerce SEO, analytics, debugging and portfolio learning.",
  path: "/blog",
});

export default function BlogPage() {
  const publishedPosts = getPublishedBlogPosts();
  const featuredPost = getFeaturedBlogPost();
  const tags = getBlogTags();

  return (
    <>
      <PageHeader
        eyebrow="Blog & learning notes"
        title="Software Development Notes"
        description="Short write-ups about projects, technical decisions, lessons learned and practical development work."
      />

      <PageContent size="lg" className="space-y-10 md:space-y-12">
        {publishedPosts.length >= 2 ? (
          <>
            {featuredPost ? <FeaturedBlogCard post={featuredPost} /> : null}

            <BlogExplorer
              posts={publishedPosts}
              tags={tags}
              featuredPostSlug={featuredPost?.slug}
            />
          </>
        ) : (
          <Callout title="Blog notes are being prepared" variant="note">
            The blog structure is ready, but posts should only be promoted once
            there are at least two useful notes available.
          </Callout>
        )}
      </PageContent>
    </>
  );
}
