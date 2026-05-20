import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import Link from "next/link";

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

type BlogCardProps = {
  post: BlogPost;
};

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = dateFormatter.format(
    new Date(`${post.date}T00:00:00Z`),
  );

  return (
    <Card className="group flex h-full flex-col transition duration-200 hover:-translate-y-1 hover:border-primary/45 hover:shadow-lg hover:shadow-primary/10">
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {formattedDate}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {post.readingTime}
          </span>
        </div>

        <div className="space-y-3">
          <CardTitle className="text-xl leading-tight">
            <Link
              href={post.href}
              className="transition-colors outline-none hover:text-primary focus-visible:text-primary"
            >
              {post.title}
            </Link>
          </CardTitle>
          <CardDescription className="text-sm leading-6">
            {post.description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col justify-between gap-6">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <Button asChild variant="outline" className="w-fit">
          <Link href={post.href}>
            Read post
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
