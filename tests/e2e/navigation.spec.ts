import { expect, test } from "@playwright/test";

test.describe("main navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/");
  });

  test("navigates to the main portfolio pages", async ({ page }) => {
    const navigation = page.getByRole("banner").getByRole("navigation");

    await navigation.getByRole("link", { name: /^Projects$/ }).click();
    await expect(page).toHaveURL(/\/projects$/);
    await expect(
      page.getByRole("heading", { name: /software development projects/i }),
    ).toBeVisible();

    await navigation.getByRole("link", { name: /^Experience$/ }).click();
    await expect(page).toHaveURL(/\/experience$/);
    await expect(
      page.getByRole("heading", {
        name: /commercial software & web experience/i,
      }),
    ).toBeVisible();

    await navigation.getByRole("link", { name: /^About$/ }).click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(
      page.getByRole("heading", { name: /about me/i }),
    ).toBeVisible();

    await navigation.getByRole("link", { name: /^Blog$/ }).click();
    await expect(page).toHaveURL(/\/blog$/);
    await expect(
      page.getByRole("heading", { name: /software development notes/i }),
    ).toBeVisible();

    await navigation.getByRole("link", { name: /^Contact$/ }).click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(
      page.getByRole("heading", { level: 1, name: "Contact Me" }),
    ).toBeVisible();
  });

  test("footer links to privacy and accessibility pages", async ({ page }) => {
    await page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Privacy" })
      .click();
    await expect(page).toHaveURL(/\/privacy$/);
    await expect(
      page.getByRole("heading", { level: 1, name: "Privacy" }),
    ).toBeVisible();

    await page.goto("/");

    await page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Accessibility" })
      .click();

    await expect(page).toHaveURL(/\/accessibility$/);
    await expect(
      page.getByRole("heading", { level: 1, name: "Accessibility" }),
    ).toBeVisible();
  });

  test("blog post footer links to adjacent notes", async ({ page }) => {
    await page.goto("/blog/building-my-portfolio-nextjs-typescript");

    const firstPostNavigation = page.getByRole("navigation", {
      name: "Blog post navigation",
    });

    await expect(
      firstPostNavigation.getByRole("link", {
        name: /next post: what i learned from building a go rest api/i,
      }),
    ).toHaveAttribute("href", "/blog/building-a-go-rest-api");
    await expect(
      firstPostNavigation.getByRole("link", { name: /previous post:/i }),
    ).toHaveCount(0);

    await page.goto("/blog/ecommerce-seo-lessons-real-cms");

    const lastPostNavigation = page.getByRole("navigation", {
      name: "Blog post navigation",
    });

    await expect(
      lastPostNavigation.getByRole("link", {
        name: /previous post: what i learned from building a go rest api/i,
      }),
    ).toHaveAttribute("href", "/blog/building-a-go-rest-api");
    await expect(
      lastPostNavigation.getByRole("link", { name: /next post:/i }),
    ).toHaveCount(0);
  });
});
