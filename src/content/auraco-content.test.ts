import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { getPublishedBlogPostBySlug } from "@/content/blog-posts";
import { getProjectBySlug } from "@/content/projects";

function readContentFile(path: string) {
  return readFileSync(join(process.cwd(), path), "utf8");
}

describe("Aura Co Merchant Center content", () => {
  it("registers the project and case-study component", () => {
    const project = getProjectBySlug("auraco-google-merchant-center-recovery");
    const projectCaseStudies = readContentFile(
      "src/content/project-case-studies.ts",
    );

    expect(project).toMatchObject({
      title: "Aura Co Google Merchant Center Suspension Recovery",
      status: "Finished",
      type: "Ecommerce platform and technical SEO",
      caseStudyUrl: "/projects/auraco-google-merchant-center-recovery",
      liveUrl: "https://auraco.org.uk",
    });
    expect(projectCaseStudies).toContain(
      '"auraco-google-merchant-center-recovery": AuracoGoogleMerchantCenterRecovery',
    );
  });

  it("registers the supporting Merchant Center blog post", () => {
    const post = getPublishedBlogPostBySlug(
      "google-merchant-center-misrepresentation-shopify",
    );
    const blogPostComponents = readContentFile(
      "src/content/blog-post-components.ts",
    );

    expect(post).toMatchObject({
      title: "How I Fixed Google Merchant Center Misrepresentation on Shopify",
      href: "/blog/google-merchant-center-misrepresentation-shopify",
      date: "2026-07-15",
      tags: [
        "Google Merchant Center",
        "Shopify",
        "Ecommerce SEO",
        "Product Feeds",
        "Troubleshooting",
      ],
    });
    expect(blogPostComponents).toContain(
      '"google-merchant-center-misrepresentation-shopify":',
    );
    expect(blogPostComponents).toContain(
      "GoogleMerchantCenterMisrepresentationPost",
    );
  });

  it("keeps the approved outcome wording and privacy boundaries", () => {
    const caseStudy = readContentFile(
      "src/content/case-studies/auraco-google-merchant-center-recovery.mdx",
    );
    const blog = readContentFile(
      "src/content/blog/google-merchant-center-misrepresentation-shopify.mdx",
    );
    const combinedContent = `${caseStudy}\n${blog}`;

    expect(caseStudy).toContain(
      "Google removed the suspension on 15 July 2026 and cleared the mismatched online store URL problem for all 1,709 affected products. Other lower-priority product issues were outside this recovery phase and were not presented as resolved.",
    );
    expect(combinedContent).toContain(
      "It is not a guarantee that the same steps will reinstate every suspended account.",
    );
    expect(combinedContent).not.toContain("aura-co-4671");
    expect(combinedContent).not.toMatch(/merchant[- ]?id/i);
    expect(combinedContent).not.toMatch(
      /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    );
  });
});
