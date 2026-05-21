import { describe, expect, it } from "vitest";

import {
  filterProjects,
  projectMatchesSearch,
  type SearchableProject,
} from "@/lib/project-filters";
import type { ProjectStatus, ProjectType } from "@/types/project";

const projects: SearchableProject[] = [
  {
    title: "Go Website Health Check REST API",
    summary:
      "Checks website availability with concurrency and timeout handling.",
    type: "Backend/API" as ProjectType,
    status: "Finished" as ProjectStatus,
    proofPoint:
      "Concurrency, timeout handling, validation, tests and benchmarks.",
    techStack: ["Go", "REST API", "Postman", "Testing"],
    keywords: ["backend", "api", "concurrency", "health check"],
  },
  {
    title: "Cromartie Tie Dye Techniques Page Rebuild",
    summary: "Commercial SEO and CMS page rebuild for an ecommerce website.",
    type: "Commercial SEO" as ProjectType,
    status: "Finished" as ProjectStatus,
    proofPoint:
      "Commercial SEO, CMS constraints, internal links and page structure.",
    techStack: ["HTML", "CSS", "SEO", "CMS"],
    keywords: ["ecommerce", "seo", "cromartie", "cms"],
  },
  {
    title: "Internal Records Management Desktop Application",
    summary: "Database-backed desktop workflow for commercial records.",
    type: "Software" as ProjectType,
    status: "Ongoing" as ProjectStatus,
    proofPoint: "Commercial software, C#, WinForms and SQL database workflows.",
    techStack: ["C#", "WinForms", "SQL"],
    keywords: ["desktop app", "database", "records", "commercial software"],
  },
];

describe("projectMatchesSearch", () => {
  it("matches by title", () => {
    expect(projectMatchesSearch(projects[0], "health check")).toBe(true);
  });

  it("matches by technology", () => {
    expect(projectMatchesSearch(projects[2], "sql")).toBe(true);
  });

  it("matches by type", () => {
    expect(projectMatchesSearch(projects[1], "commercial seo")).toBe(true);
  });

  it("matches by proof point", () => {
    expect(projectMatchesSearch(projects[0], "benchmarks")).toBe(true);
  });

  it("matches by keyword", () => {
    expect(projectMatchesSearch(projects[1], "ecommerce")).toBe(true);
  });

  it("returns false when no searchable field matches", () => {
    expect(projectMatchesSearch(projects[0], "shopify")).toBe(false);
  });

  it("returns true for an empty search query", () => {
    expect(projectMatchesSearch(projects[0], "")).toBe(true);
  });
});

describe("filterProjects", () => {
  it("returns all projects when no filters are active", () => {
    expect(filterProjects(projects)).toHaveLength(3);
  });

  it("filters by project type", () => {
    const result = filterProjects(projects, {
      type: "Backend/API" as ProjectType,
    });

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Go Website Health Check REST API");
  });

  it("filters by status", () => {
    const result = filterProjects(projects, {
      status: "Ongoing" as ProjectStatus,
    });

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe(
      "Internal Records Management Desktop Application",
    );
  });

  it("combines search and filters", () => {
    const result = filterProjects(projects, {
      query: "cms",
      type: "Commercial SEO" as ProjectType,
      status: "Finished" as ProjectStatus,
    });

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Cromartie Tie Dye Techniques Page Rebuild");
  });

  it("returns an empty array when nothing matches", () => {
    const result = filterProjects(projects, {
      query: "python",
      type: "Backend/API" as ProjectType,
    });

    expect(result).toEqual([]);
  });
});
