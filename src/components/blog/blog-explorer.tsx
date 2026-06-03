"use client";

import { useMemo, useState } from "react";

import { BlogCard } from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { filterBlogPosts } from "@/lib/blog-filters";
import type { BlogPost, BlogTag } from "@/types/blog";

type BlogExplorerProps = {
  posts: BlogPost[];
  tags: BlogTag[];
  featuredPostSlug?: string;
};

const ALL_TAGS_LABEL = "All";

export function BlogExplorer({
  posts,
  tags,
  featuredPostSlug,
}: BlogExplorerProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState<typeof ALL_TAGS_LABEL | BlogTag>(
    ALL_TAGS_LABEL,
  );

  const hasActiveFilters =
    searchTerm.trim().length > 0 || activeTag !== ALL_TAGS_LABEL;

  const filteredPosts = useMemo(() => {
    const matchingPosts = filterBlogPosts(posts, {
      query: searchTerm,
      tag: activeTag,
    });

    if (hasActiveFilters || !featuredPostSlug) {
      return matchingPosts;
    }

    return matchingPosts.filter((post) => post.slug !== featuredPostSlug);
  }, [activeTag, featuredPostSlug, hasActiveFilters, posts, searchTerm]);

  function resetFilters() {
    setSearchTerm("");
    setActiveTag(ALL_TAGS_LABEL);
  }

  return (
    <section className="space-y-8" aria-labelledby="all-blog-posts-heading">
      <Card className="bg-card/80">
        <CardContent className="space-y-6 p-5 md:p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                id="all-blog-posts-heading"
                className="text-lg font-semibold text-foreground"
              >
                Browse notes
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Search by title, description, tag, or slug.
              </p>
            </div>

            {hasActiveFilters ? (
              <Button type="button" variant="outline" onClick={resetFilters}>
                Reset filters
              </Button>
            ) : null}
          </div>

          <div className="w-full">
            <label htmlFor="blog-search" className="sr-only">
              Search blog posts
            </label>
            <input
              id="blog-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by note, topic, tag, or slug..."
              className="h-12 w-full rounded-2xl border border-border bg-card px-4 text-sm text-foreground shadow-sm transition-colors outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              Filter by tag
            </p>
            <div
              className="flex flex-wrap gap-2"
              aria-label="Filter blog posts by tag"
            >
              <Button
                type="button"
                size="sm"
                variant={activeTag === ALL_TAGS_LABEL ? "default" : "outline"}
                className="h-auto py-2 text-left whitespace-normal"
                aria-pressed={activeTag === ALL_TAGS_LABEL}
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
                  className="h-auto py-2 text-left whitespace-normal"
                  aria-pressed={activeTag === tag}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-medium text-foreground">
              {filteredPosts.length}
            </span>{" "}
            of{" "}
            <span className="font-medium text-foreground">{posts.length}</span>{" "}
            notes.
          </p>
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
          <CardContent className="space-y-2 p-6">
            <h3 className="text-base font-semibold text-foreground">
              No notes found
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              No blog posts match that search and tag combination yet.
            </p>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
