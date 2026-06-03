import type { MetadataRoute } from "next";

import { getPublishedBlogPosts } from "@/content/blog-posts";
import { sortedProjects } from "@/content/projects";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (siteConfig.url || "http://localhost:3000").replace(
    /\/$/,
    "",
  );

  const staticRoutes = [
    "",
    "/projects",
    "/experience",
    "/about",
    "/blog",
    "/contact",
    "/privacy",
    "/accessibility",
  ];

  const projectRoutes = sortedProjects
    .filter((project) => project.caseStudyUrl)
    .map((project) => project.caseStudyUrl as string);

  const pageRoutes = [...staticRoutes, ...projectRoutes].map(
    (route): MetadataRoute.Sitemap[number] => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route.startsWith("/projects/") ? "monthly" : "weekly",
      priority: route === "" ? 1 : route.startsWith("/projects/") ? 0.8 : 0.7,
    }),
  );

  const blogRoutes = getPublishedBlogPosts().map(
    (post): MetadataRoute.Sitemap[number] => ({
      url: `${baseUrl}${post.href}`,
      lastModified: new Date(post.updated ?? post.date),
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

  return [...pageRoutes, ...blogRoutes];
}
