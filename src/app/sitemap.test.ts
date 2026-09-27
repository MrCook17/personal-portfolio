import { describe, expect, it } from "vitest";

import sitemap from "@/app/sitemap";

describe("sitemap", () => {
  it("returns the intended canonical HTML page inventory", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toEqual([
      "https://charliecook.dev",
      "https://charliecook.dev/projects",
      "https://charliecook.dev/experience",
      "https://charliecook.dev/about",
      "https://charliecook.dev/blog",
      "https://charliecook.dev/contact",
      "https://charliecook.dev/cv",
      "https://charliecook.dev/privacy",
      "https://charliecook.dev/accessibility",
      "https://charliecook.dev/projects/automating-ecommerce-seo-product-management-cromartie",
      "https://charliecook.dev/projects/go-website-health-check-api",
      "https://charliecook.dev/projects/cromartie-tie-dye-page-rebuild",
      "https://charliecook.dev/projects/auraco-google-merchant-center-recovery",
      "https://charliecook.dev/projects/analytics-tracking-drop-investigation",
      "https://charliecook.dev/projects/internal-records-management-desktop-application",
      "https://charliecook.dev/blog/google-merchant-center-misrepresentation-shopify",
      "https://charliecook.dev/blog/building-my-portfolio-nextjs-typescript",
      "https://charliecook.dev/blog/building-a-go-rest-api",
      "https://charliecook.dev/blog/ecommerce-seo-lessons-real-cms",
    ]);
    expect(urls).toHaveLength(19);
  });

  it("excludes internal, API, removed and PDF routes", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls.some((url) => url.includes("/api/"))).toBe(false);
    expect(urls.some((url) => url.includes("/_next/"))).toBe(false);
    expect(urls.some((url) => url.includes("/cv/"))).toBe(false);
    expect(urls.some((url) => url.endsWith(".svg"))).toBe(false);
    expect(urls.some((url) => url.endsWith(".png"))).toBe(false);
    expect(urls).not.toContain("https://charliecook.dev/style-guide");
    expect(urls).not.toContain("https://charliecook.dev/Charlie-Cook-CV.pdf");
  });
});
