import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import Link from "next/link";
import type { PropsWithChildren } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
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

        <div className="mt-10 space-y-6 rounded-2xl border border-border/70 bg-card/45 p-6 leading-7 shadow-sm md:p-8 [&_a]:font-medium [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline [&_blockquote]:border-l-2 [&_blockquote]:border-primary/60 [&_blockquote]:pl-4 [&_blockquote]:text-muted-foreground [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_li]:mt-2 [&_ol]:ml-5 [&_ol]:list-decimal [&_p]:text-muted-foreground [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-border [&_pre]:bg-muted/70 [&_pre]:p-4 [&_strong]:text-foreground [&_ul]:ml-5 [&_ul]:list-disc">
          {children}
        </div>

        <div className="mt-10 rounded-2xl border border-border/70 bg-muted/20 p-6">
          <h2 className="text-xl font-semibold text-foreground">
            Keep exploring
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            These notes support the project case studies, but the main portfolio
            evidence still lives in the projects and experience pages.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/projects">View projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/experience">View experience</Link>
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
