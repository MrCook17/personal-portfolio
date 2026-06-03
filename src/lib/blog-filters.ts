import type { BlogPost, BlogTag } from "@/types/blog";

export type BlogFilterOptions = {
  query?: string;
  tag?: BlogTag | "All";
};

export type SearchableBlogPost = Pick<
  BlogPost,
  "title" | "description" | "tags" | "slug"
>;

function normalise(value: string) {
  return value.trim().toLowerCase();
}

export function blogPostMatchesSearch(
  post: SearchableBlogPost,
  query?: string,
) {
  const normalisedSearch = normalise(query ?? "");

  if (normalisedSearch.length === 0) {
    return true;
  }

  const searchableText = [post.title, post.description, post.slug, ...post.tags]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(normalisedSearch);
}

export function filterBlogPosts<TPost extends SearchableBlogPost>(
  posts: readonly TPost[],
  filters: BlogFilterOptions = {},
) {
  return posts.filter((post) => {
    const matchesSearch = blogPostMatchesSearch(post, filters.query);

    const matchesTag =
      filters.tag === undefined ||
      filters.tag === "All" ||
      post.tags.includes(filters.tag);

    return matchesSearch && matchesTag;
  });
}
