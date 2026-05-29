import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import Link from "next/link";
import type { PropsWithChildren } from "react";

import { Badge } from "@/components/ui/badge";
import { Button, ButtonGroup } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MdxContent } from "@/components/ui/mdx-content";
import { Tag } from "@/components/ui/tag";
import type { BlogPost } from "@/types/blog";

type BlogPostLayoutProps = PropsWithChildren<{
  post: BlogPost;
}>;

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function BlogPostLayout({ post, children }: BlogPostLayoutProps) {
  const formattedDate = dateFormatter.format(
    new Date(`${post.date}T00:00:00Z`),
  );

  return (
    <article className="py-12 md:py-16">
      <Container size="md">
        <Button asChild variant="ghost" className="mb-8 -ml-3">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            Back to blog
          </Link>
        </Button>

        <header className="rounded-2xl border border-border/70 bg-card/75 p-6 shadow-lg shadow-primary/5 md:p-8">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <Badge>Learning note</Badge>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              {formattedDate}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
            {post.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </header>

        <MdxContent className="mt-10">{children}</MdxContent>

        <div className="mt-10 rounded-2xl border border-border/70 bg-muted/20 p-6">
          <h2 className="text-xl font-semibold text-foreground">
            Keep exploring
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            These notes support the project case studies, but the main portfolio
            evidence still lives in the projects and experience pages.
          </p>
          <ButtonGroup className="mt-5">
            <Button asChild>
              <Link href="/projects">View projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/experience">View experience</Link>
            </Button>
          </ButtonGroup>
        </div>
      </Container>
    </article>
  );
}
