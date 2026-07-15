import { describe, expect, it } from "vitest";

import { siteConfig } from "@/content/site";
import {
  createArticleMetadata,
  createWebsiteMetadata,
} from "@/lib/seo/metadata";
import { absoluteUrl } from "@/lib/seo/urls";
import {
  getBreadcrumbListJsonLd,
  getPersonJsonLd,
  getWebSiteJsonLd,
} from "@/lib/seo/schema";

describe("SEO URL helpers", () => {
  it("uses the production canonical site URL", () => {
    expect(siteConfig.url).toBe("https://charliecook.dev");
    expect(absoluteUrl("/projects")).toBe("https://charliecook.dev/projects");
    expect(absoluteUrl("blog")).toBe("https://charliecook.dev/blog");
  });

  it("sets self-referencing canonical and Open Graph URLs", () => {
    const metadata = createWebsiteMetadata({
      title: "Projects",
      description: "Project page",
      path: "/projects",
    });

    expect(metadata.alternates?.canonical).toBe(
      "https://charliecook.dev/projects",
    );
    expect(metadata.openGraph?.url).toBe("https://charliecook.dev/projects");
  });

  it("sets article canonical and Open Graph URLs to the detail page", () => {
    const metadata = createArticleMetadata({
      title: "Go case study",
      description: "A case study",
      path: "/projects/go-website-health-check-api",
    });

    expect(metadata.alternates?.canonical).toBe(
      "https://charliecook.dev/projects/go-website-health-check-api",
    );
    expect(metadata.openGraph?.url).toBe(
      "https://charliecook.dev/projects/go-website-health-check-api",
    );
  });
});

describe("schema builders", () => {
  it("reuses stable Person and WebSite entity IDs", () => {
    expect(getPersonJsonLd()["@id"]).toBe("https://charliecook.dev/#person");
    expect(getWebSiteJsonLd()["@id"]).toBe("https://charliecook.dev/#website");
  });

  it("builds breadcrumb item URLs from canonical paths", () => {
    const breadcrumb = getBreadcrumbListJsonLd([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
    ]);

    expect(breadcrumb.itemListElement).toEqual([
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://charliecook.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://charliecook.dev/projects",
      },
    ]);
  });
});
