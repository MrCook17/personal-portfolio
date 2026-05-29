"use client";

import { useMemo, useState } from "react";

import { BlogCard } from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost, BlogTag } from "@/types/blog";

type BlogExplorerProps = {
  posts: BlogPost[];
  tags: BlogTag[];
};

const ALL_TAGS_LABEL = "All";

export function BlogExplorer({ posts, tags }: BlogExplorerProps) {
  const [activeTag, setActiveTag] = useState<typeof ALL_TAGS_LABEL | BlogTag>(
    ALL_TAGS_LABEL,
  );

  const filteredPosts = useMemo(() => {
    if (activeTag === ALL_TAGS_LABEL) {
      return posts;
    }

    return posts.filter((post) => post.tags.includes(activeTag));
  }, [activeTag, posts]);

  return (
    <section className="space-y-8" aria-labelledby="all-blog-posts-heading">
      <Card>
        <CardContent className="space-y-5 p-5 md:p-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h2
                id="all-blog-posts-heading"
                className="text-lg font-semibold text-foreground"
              >
                Browse notes
              </h2>
              <p className="text-sm text-muted-foreground">
                Filter posts by topic, technology or learning area.
              </p>
            </div>

            {activeTag !== ALL_TAGS_LABEL ? (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setActiveTag(ALL_TAGS_LABEL)}
              >
                Reset filter
              </Button>
            ) : null}
          </div>

          <div
            className="flex flex-wrap gap-2"
            aria-label="Filter blog posts by tag"
          >
            <Button
              type="button"
              size="sm"
              variant={activeTag === ALL_TAGS_LABEL ? "default" : "outline"}
              onClick={() => setActiveTag(ALL_TAGS_LABEL)}
            >
              {ALL_TAGS_LABEL}
            </Button>

            {tags.map((tag) => (
              <Button
                key={tag}
                type="button"
                size="sm"
                variant={activeTag === tag ? "default" : "outline"}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {filteredPosts.length > 0 ? (
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-6 text-sm text-muted-foreground">
            No blog posts match this tag yet.
          </CardContent>
        </Card>
      )}
    </section>
  );
}
