import { expect, test } from "@playwright/test";

test.describe("main navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/");
  });

  test("navigates to the main portfolio pages", async ({ page }) => {
    const navigation = page.getByRole("navigation");

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
});
