import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogPostLayout } from "@/components/blog/blog-post-layout";
import { blogPostComponents } from "@/content/blog-post-components";
import {
  getPublishedBlogPostBySlug,
  getPublishedBlogPosts,
} from "@/content/blog-posts";

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

  return {
    title: `${post.title} | Charlie Cook`,
    description: post.description,
    alternates: {
      canonical: post.href,
    },
    openGraph: {
      title: `${post.title} | Charlie Cook`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPublishedBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const BlogPostContent = blogPostComponents[post.slug];

  if (!BlogPostContent) {
    notFound();
  }

  return (
    <BlogPostLayout post={post}>
      <BlogPostContent />
    </BlogPostLayout>
  );
}
