import type { MetadataRoute } from "next";

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
  ];

  const projectRoutes = sortedProjects
    .filter((project) => project.caseStudyUrl)
    .map((project) => project.caseStudyUrl as string);

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/projects/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/projects/") ? 0.8 : 0.7,
  }));
}
