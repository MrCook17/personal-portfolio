import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

function readContentFile(path: string) {
  return readFileSync(join(process.cwd(), path), "utf8");
}

describe("reciprocal content links", () => {
  it("links the Go blog, Go case study and public repository", () => {
    const blog = readContentFile("src/content/blog/building-a-go-rest-api.mdx");
    const caseStudy = readContentFile(
      "src/content/case-studies/go-website-health-check-api.mdx",
    );

    expect(blog).toContain(
      "[Go Website Health Check REST API case study](/projects/go-website-health-check-api)",
    );
    expect(blog).toContain(
      "[public GitHub repository](https://github.com/MrCook17/URL-Health-Checker-API)",
    );
    expect(caseStudy).toContain(
      "[what I learned from building the Go REST API](/blog/building-a-go-rest-api)",
    );
  });

  it("links the ecommerce SEO blog and Tie Dye case study reciprocally", () => {
    const blog = readContentFile(
      "src/content/blog/ecommerce-seo-lessons-real-cms.mdx",
    );
    const caseStudy = readContentFile(
      "src/content/case-studies/cromartie-tie-dye-page-rebuild.mdx",
    );

    expect(blog).toContain(
      "[Cromartie Tie Dye Techniques Page Rebuild case study](/projects/cromartie-tie-dye-page-rebuild)",
    );
    expect(caseStudy).toContain(
      "[ecommerce SEO lessons from working in a real CMS](/blog/ecommerce-seo-lessons-real-cms)",
    );
  });
});
