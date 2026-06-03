import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogPostLayout } from "@/components/blog/blog-post-layout";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPostComponents } from "@/content/blog-post-components";
import {
  getAdjacentBlogPosts,
  getPublishedBlogPostBySlug,
  getPublishedBlogPosts,
} from "@/content/blog-posts";
import { createArticleMetadata } from "@/lib/seo/metadata";
import { getArticleJsonLd, getBreadcrumbListJsonLd } from "@/lib/seo/schema";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getPublishedBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return createArticleMetadata({
    title: post.seo?.title ?? `${post.title} | Charlie Cook`,
    description: post.seo?.description ?? post.description,
    path: post.href,
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
    tags: post.seo?.keywords ?? post.tags,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPublishedBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const BlogPostContent = blogPostComponents[post.slug];
  const { previousPost, nextPost } = getAdjacentBlogPosts(post.slug);

  if (!BlogPostContent) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          getArticleJsonLd(post),
          getBreadcrumbListJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: post.href },
          ]),
        ]}
      />

      <BlogPostLayout
        post={post}
        previousPost={previousPost}
        nextPost={nextPost}
      >
        <BlogPostContent />
      </BlogPostLayout>
    </>
  );
}
