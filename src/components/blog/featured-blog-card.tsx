import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import type { BlogPost } from "@/types/blog";

type FeaturedBlogCardProps = {
  post: BlogPost;
};

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  const formattedDate = dateFormatter.format(
    new Date(`${post.date}T00:00:00Z`),
  );

  return (
    <Card className="overflow-hidden border-primary/35 bg-card/80 shadow-lg shadow-primary/10">
      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <CardHeader className="space-y-5 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>Featured note</Badge>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              {formattedDate}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>

          <div className="space-y-3">
            <CardTitle className="text-2xl leading-tight md:text-3xl">
              <Link
                href={post.href}
                className="rounded-sm transition-colors outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {post.title}
              </Link>
            </CardTitle>
            <CardDescription className="max-w-2xl text-base leading-7">
              {post.description}
            </CardDescription>
          </div>

          <Button asChild className="w-fit">
            <Link href={post.href}>
              Read featured post
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </CardHeader>

        <CardContent className="flex flex-col justify-between gap-6 border-t border-border/70 bg-muted/20 p-6 md:p-8 lg:border-t-0 lg:border-l">
          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">
              What this post covers
            </p>
            <p className="text-sm leading-6 text-muted-foreground">
              A practical build note focused on decisions, trade-offs, content
              structure and what I learned while turning the portfolio into a
              stronger employer-facing project.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
