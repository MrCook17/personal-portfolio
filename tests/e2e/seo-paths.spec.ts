import { expect, test, type Page } from "@playwright/test";

const viewports = [
  { name: "desktop", width: 1280, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

async function getJsonLdObjects(page: Page) {
  const scriptContents = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();

  return scriptContents.flatMap((content) => {
    const data = JSON.parse(content) as Record<string, unknown> | unknown[];

    return Array.isArray(data) ? data : [data];
  });
}

for (const viewport of viewports) {
  test.describe(`recruiter and related paths (${viewport.name})`, () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });
    });

    test("renders case-study breadcrumbs, reciprocal links and recruiter CTA", async ({
      page,
    }) => {
      await page.goto("/projects/go-website-health-check-api");

      await expect(
        page.getByRole("navigation", { name: "Breadcrumb" }),
      ).toBeVisible();
      await expect(
        page.getByRole("link", {
          name: /what i learned from building the go rest api/i,
        }),
      ).toHaveAttribute("href", "/blog/building-a-go-rest-api");
      await expect(
        page.getByRole("link", { name: /public github repository/i }),
      ).toHaveAttribute(
        "href",
        "https://github.com/MrCook17/URL-Health-Checker-API",
      );

      const cta = page
        .getByRole("heading", {
          name: /interested in my software and web experience/i,
        })
        .locator("..")
        .locator("..");

      await expect(
        cta.getByRole("link", { name: /contact me/i }),
      ).toHaveAttribute("href", "/contact");
      await expect(
        cta.getByRole("link", { name: /view my experience/i }),
      ).toHaveAttribute("href", "/experience");
      await expect(
        cta.getByRole("link", { name: /view my cv/i }),
      ).toHaveAttribute("href", "/cv");
    });

    test("renders blog reciprocal links", async ({ page }) => {
      await page.goto("/blog/ecommerce-seo-lessons-real-cms");

      await expect(
        page.getByRole("navigation", { name: "Breadcrumb" }),
      ).toBeVisible();
      await expect(
        page.getByRole("link", {
          name: /cromartie tie dye techniques page rebuild case study/i,
        }),
      ).toHaveAttribute("href", "/projects/cromartie-tie-dye-page-rebuild");

      await page.goto("/projects/cromartie-tie-dye-page-rebuild");
      await expect(
        page.getByRole("link", {
          name: /ecommerce seo lessons from working in a real cms/i,
        }),
      ).toHaveAttribute("href", "/blog/ecommerce-seo-lessons-real-cms");
    });

    test("renders Aura Co case study evidence, schema and reciprocal links", async ({
      page,
    }) => {
      await page.goto("/projects/auraco-google-merchant-center-recovery");

      await expect(
        page.getByRole("heading", {
          level: 1,
          name: "Aura Co Google Merchant Center Suspension Recovery",
        }),
      ).toBeVisible();
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
      await expect(
        page.getByRole("navigation", { name: "Breadcrumb" }),
      ).toBeVisible();
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        "https://charliecook.dev/projects/auraco-google-merchant-center-recovery",
      );
      await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
        "content",
        "https://charliecook.dev/projects/auraco-google-merchant-center-recovery",
      );

      await expect(
        page.getByRole("img", {
          name: /diagram representing the recovery of an ecommerce product feed/i,
        }),
      ).toHaveCount(0);

      await expect(
        page.getByText(
          "Initial Merchant Center issue counts recorded during the suspension:",
        ),
      ).toBeVisible();
      const initialIssuesTable = page.locator("article table").nth(0);
      await expect(
        initialIssuesTable.locator('thead th[scope="col"]'),
      ).toHaveCount(2);
      await expect(initialIssuesTable.locator("tbody tr")).toHaveCount(9);

      await expect(
        page.getByText("Before and after recovery outcome:"),
      ).toBeVisible();
      const outcomeTable = page.locator("article table").nth(3);
      await expect(outcomeTable.locator('thead th[scope="col"]')).toHaveCount(
        3,
      );
      await expect(outcomeTable.locator("tbody tr")).toHaveCount(6);

      await expect(
        page
          .getByText(
            /Google removed the suspension on 15 July 2026 and cleared the mismatched online store URL problem for all 1,709 affected products/i,
          )
          .first(),
      ).toBeVisible();
      await expect(
        page.getByRole("link", {
          name: /how i fixed google merchant center misrepresentation on shopify/i,
        }),
      ).toHaveAttribute(
        "href",
        "/blog/google-merchant-center-misrepresentation-shopify",
      );
      await expect(
        page.getByRole("link", { name: /^Aura Co website$/i }),
      ).toHaveAttribute("href", "https://auraco.org.uk");
      await expect(
        page.getByRole("link", { name: /^view my cv$/i }),
      ).toHaveAttribute("href", "/cv");
      await expect(page.getByText("aura-co-4671")).toHaveCount(0);

      const jsonLdObjects = await getJsonLdObjects(page);
      expect(jsonLdObjects).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            "@type": "CreativeWork",
            url: "https://charliecook.dev/projects/auraco-google-merchant-center-recovery",
          }),
          expect.objectContaining({
            "@type": "BreadcrumbList",
          }),
        ]),
      );
    });

    test("renders Merchant Center blog evidence, schema and related links", async ({
      page,
    }) => {
      await page.goto("/blog/google-merchant-center-misrepresentation-shopify");

      await expect(
        page.getByRole("heading", {
          level: 1,
          name: "How I Fixed Google Merchant Center Misrepresentation on Shopify",
        }),
      ).toBeVisible();
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
      await expect(
        page.getByRole("navigation", { name: "Breadcrumb" }),
      ).toBeVisible();
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        "https://charliecook.dev/blog/google-merchant-center-misrepresentation-shopify",
      );
      await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
        "content",
        "https://charliecook.dev/blog/google-merchant-center-misrepresentation-shopify",
      );

      await expect(
        page.getByRole("link", {
          name: /aura co google merchant center suspension recovery case study/i,
        }),
      ).toHaveAttribute(
        "href",
        "/projects/auraco-google-merchant-center-recovery",
      );
      await expect(
        page.getByRole("link", {
          name: /ecommerce seo lessons from working in a real cms/i,
        }),
      ).toHaveAttribute("href", "/blog/ecommerce-seo-lessons-real-cms");

      await expect(
        page.getByText(
          "Feed export findings used to prioritise the recovery work:",
        ),
      ).toBeVisible();
      const feedTable = page.locator("article table").nth(1);
      await expect(feedTable.locator('thead th[scope="col"]')).toHaveCount(2);
      await expect(feedTable.locator("tbody tr")).toHaveCount(8);

      await expect(
        page.getByText(/not a guarantee that the same steps will reinstate/i),
      ).toBeVisible();
      await expect(page.getByText("aura-co-4671")).toHaveCount(0);

      const jsonLdObjects = await getJsonLdObjects(page);
      expect(jsonLdObjects).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            "@type": "Article",
            url: "https://charliecook.dev/blog/google-merchant-center-misrepresentation-shopify",
          }),
          expect.objectContaining({
            "@type": "BreadcrumbList",
          }),
        ]),
      );
    });

    test("shows contact success and error states", async ({ page }) => {
      await page.route("**/api/contact", async (route) => {
        await route.fulfill({
          status: 201,
          contentType: "application/json",
          body: JSON.stringify({
            ok: true,
            stored: true,
            message: "Thanks - your message has been sent successfully.",
          }),
        });
      });

      await page.goto("/contact");
      await page.getByLabel("Name").fill("Test User");
      await page.getByLabel("Email").fill("test@example.com");
      await page
        .getByLabel("Message")
        .fill("This is a valid test message for the contact form.");
      await page.getByRole("button", { name: /send message/i }).click();
      await expect(
        page.getByText("Thanks - your message has been sent successfully."),
      ).toBeVisible();

      await page.unroute("**/api/contact");
      await page.route("**/api/contact", async (route) => {
        await route.fulfill({
          status: 500,
          contentType: "application/json",
          body: JSON.stringify({
            ok: false,
            message:
              "Something went wrong. Please try again or contact me directly by email.",
          }),
        });
      });

      await page.reload();
      await page.getByLabel("Name").fill("Test User");
      await page.getByLabel("Email").fill("test@example.com");
      await page
        .getByLabel("Message")
        .fill("This is a valid test message for the contact form.");
      await page.getByRole("button", { name: /send message/i }).click();
      await expect(
        page.getByText(
          "Something went wrong. Please try again or contact me directly by email.",
        ),
      ).toBeVisible();
    });

    test("renders recruiter CV page with PDF preview and supporting routes", async ({
      page,
    }) => {
      await page.goto("/cv");

      await expect(
        page.getByRole("heading", { level: 1, name: "Charlie Cook CV" }),
      ).toBeVisible();
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
      await expect(
        page.getByText(/commercial software engineering/i),
      ).toBeVisible();
      await expect(
        page.getByRole("link", { name: /^download cv \(pdf\)$/i }),
      ).toHaveAttribute("href", "/Charlie-Cook-CV.pdf");
      await expect(
        page.getByRole("link", { name: /^download cv \(pdf\)$/i }),
      ).toHaveAttribute("download", "");
      await expect(
        page.getByRole("link", { name: /^contact me$/i }),
      ).toHaveAttribute("href", "/contact");
      await expect(
        page.getByRole("link", { name: /^view my projects$/i }),
      ).toHaveAttribute("href", "/projects");
      await expect(
        page.getByRole("link", { name: /^open pdf in a new tab$/i }),
      ).toHaveAttribute("href", "/Charlie-Cook-CV.pdf");
      await expect(
        page.getByRole("link", { name: /^open pdf in a new tab$/i }),
      ).not.toHaveAttribute("download", "");

      const nextSteps = page.locator("section").filter({
        has: page.getByRole("heading", { name: /explore my work/i }),
      });

      await expect(
        nextSteps.getByRole("link", { name: /^experience$/i }),
      ).toHaveAttribute("href", "/experience");
      await expect(
        nextSteps.getByRole("link", { name: /^about$/i }),
      ).toHaveAttribute("href", "/about");
      await expect(
        nextSteps.getByRole("link", { name: /^github$/i }),
      ).toHaveAttribute("href", "https://github.com/MrCook17");
      await expect(
        nextSteps.getByRole("link", { name: /^linkedin$/i }),
      ).toHaveAttribute(
        "href",
        "https://www.linkedin.com/in/charles-james-cook/",
      );

      await expect(page.getByText("CV preview")).toBeVisible();
      await expect(
        page.getByText(
          /The preview is shown as page images for reliable browser support/i,
        ),
      ).toBeVisible();

      const previewImages = page
        .getByRole("list", { name: "Charlie Cook CV pages" })
        .getByRole("img");

      await expect(previewImages).toHaveCount(2);

      const firstPreviewImage = page.getByRole("img", {
        name: "Page 1 of Charlie Cook's software developer CV",
      });

      await expect(firstPreviewImage).toHaveAttribute(
        "src",
        /charlie-cook-cv-page-1\.png|%2Fcv%2Fcharlie-cook-cv-page-1\.png/,
      );
      await expect(firstPreviewImage).toHaveAttribute("width", "1588");
      await expect(firstPreviewImage).toHaveAttribute("height", "2246");
      await expect(
        page.getByText("Your browser cannot display the embedded CV PDF here."),
      ).toHaveCount(0);
      await expect(page.locator('object[type="application/pdf"]')).toHaveCount(
        0,
      );

      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        "https://charliecook.dev/cv",
      );
    });
  });
}

test("mobile menu exposes primary navigation and CV link", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await page.getByRole("button", { name: "Open navigation menu" }).click();

  const mobileNavigation = page.getByRole("navigation", {
    name: "Mobile navigation",
  });

  await expect(
    mobileNavigation.getByRole("link", { name: "Projects" }),
  ).toHaveAttribute("href", "/projects");
  await expect(
    mobileNavigation.getByRole("link", { name: "View CV" }),
  ).toHaveAttribute("href", "/cv");
});

test("header CV link navigates to the HTML CV page", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/");

  const cvLink = page.getByRole("banner").getByRole("link", {
    name: "View CV",
  });

  await expect(cvLink).toHaveAttribute("href", "/cv");
  await expect(cvLink).not.toHaveAttribute("download", "");
});

test("PDF response advertises the CV page canonical", async ({ request }) => {
  const response = await request.get("/Charlie-Cook-CV.pdf");
  const contentDisposition = response.headers()["content-disposition"];

  expect(response.ok()).toBe(true);
  expect(response.headers()["link"]).toContain(
    '<https://charliecook.dev/cv>; rel="canonical"',
  );
  expect(response.headers()["content-type"]).toContain("application/pdf");
  expect(contentDisposition).toBe('inline; filename="Charlie-Cook-CV.pdf"');
  expect(contentDisposition).not.toContain("attachment");
});

test("security headers support the static CV preview policy", async ({
  request,
}) => {
  const response = await request.get("/cv");
  const csp = response.headers()["content-security-policy"];

  expect(csp).toContain("default-src 'self'");
  expect(csp).toContain("img-src 'self' data: blob: https:");
  expect(csp).toContain("object-src 'none'");
  expect(csp).not.toContain("object-src *");
  expect(csp).not.toContain("frame-src *");
});

test("sitemap includes the CV page and excludes the PDF", async ({
  request,
}) => {
  const response = await request.get("/sitemap.xml");
  const body = await response.text();

  expect(body).toContain("<loc>https://charliecook.dev/cv</loc>");
  expect(body).not.toContain("Charlie-Cook-CV.pdf");
});
