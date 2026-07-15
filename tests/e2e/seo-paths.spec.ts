import { expect, test } from "@playwright/test";

const viewports = [
  { name: "desktop", width: 1280, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

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
        cta.getByRole("link", { name: /download my cv/i }),
      ).toHaveAttribute("href", "/Charlie-Cook-CV.pdf");
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
    mobileNavigation.getByRole("link", { name: "Download CV" }),
  ).toHaveAttribute("href", "/Charlie-Cook-CV.pdf");
});
