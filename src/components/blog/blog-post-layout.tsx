import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import Link from "next/link";
import type { PropsWithChildren } from "react";

import { BlogPostNavigation } from "@/components/blog/blog-post-navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MdxContent } from "@/components/ui/mdx-content";
import { Tag } from "@/components/ui/tag";
import type { BlogPost } from "@/types/blog";

type BlogPostLayoutProps = PropsWithChildren<{
  post: BlogPost;
  previousPost?: BlogPost;
  nextPost?: BlogPost;
}>;

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function BlogPostLayout({
  post,
  previousPost,
  nextPost,
  children,
}: BlogPostLayoutProps) {
  const formattedDate = dateFormatter.format(
    new Date(`${post.date}T00:00:00Z`),
  );

  return (
    <article>
      <Container size="lg" className="pb-16 md:pb-20 lg:pb-24">
        <header className="space-y-7 py-10 md:space-y-8 md:py-14 lg:py-16">
          <Button asChild variant="ghost" size="sm">
            <Link href="/blog">
              <ArrowLeft className="mr-2 size-4" aria-hidden="true" />
              Back to blog
            </Link>
          </Button>

          <div className="max-w-4xl space-y-5">
            <p className="text-sm font-semibold tracking-[0.22em] text-primary uppercase">
              Learning note
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              {post.title}
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">
              {post.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {formattedDate}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </header>

        <div className="space-y-8 md:space-y-10 lg:space-y-12">
          <MdxContent>{children}</MdxContent>

          <BlogPostNavigation previousPost={previousPost} nextPost={nextPost} />
        </div>
      </Container>
    </article>
  );
}
