import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/types/blog";

type BlogPostNavigationProps = {
  previousPost?: BlogPost;
  nextPost?: BlogPost;
};

export function BlogPostNavigation({
  previousPost,
  nextPost,
}: BlogPostNavigationProps) {
  const hasAdjacentPosts = Boolean(previousPost || nextPost);

  return (
    <nav aria-label="Blog post navigation" className="mt-12">
      {hasAdjacentPosts ? (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            {previousPost ? (
              <Button
                asChild
                variant="outline"
                className="h-auto max-w-full py-2 text-left whitespace-normal"
              >
                <Link
                  href={previousPost.href}
                  aria-label={`Previous post: ${previousPost.title}`}
                >
                  <ArrowLeft className="mr-2 size-4" aria-hidden="true" />
                  {previousPost.title}
                </Link>
              </Button>
            ) : (
              <span />
            )}
          </div>

          <div className="flex min-w-0 justify-start md:justify-end">
            {nextPost ? (
              <Button
                asChild
                className="h-auto max-w-full py-2 text-left whitespace-normal"
              >
                <Link
                  href={nextPost.href}
                  aria-label={`Next post: ${nextPost.title}`}
                >
                  {nextPost.title}
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
            ) : (
              <span />
            )}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
