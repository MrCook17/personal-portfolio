import { expect, test } from "@playwright/test";

test.describe("Contact page", () => {
  test("loads the contact page with accessible form fields and links", async ({
    page,
  }) => {
    await page.goto("/contact");

    await expect(
      page.getByRole("heading", { name: "Contact Me" }),
    ).toBeVisible();

    await expect(page.getByLabel("Name")).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Message")).toBeVisible();

    await expect(page.getByRole("link", { name: /email/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /github/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /linkedin/i })).toBeVisible();

    await expect(page.locator('input[name="website"]')).toHaveAttribute(
      "tabindex",
      "-1",
    );
  });

  test("shows validation errors for an empty form", async ({ page }) => {
    await page.goto("/contact");

    await page.getByRole("button", { name: /send message/i }).click();

    await expect(page.getByText("Name is required.")).toBeVisible();
    await expect(page.getByText("Enter a valid email address.")).toBeVisible();
    await expect(
      page.getByText("Message must be at least 10 characters."),
    ).toBeVisible();
  });

  test("shows validation errors for invalid email and short message", async ({
    page,
  }) => {
    await page.goto("/contact");

    await page.getByLabel("Name").fill("Charlie");
    await page.getByLabel("Email").fill("not-an-email");
    await page.getByLabel("Message").fill("Hi");

    await page.getByRole("button", { name: /send message/i }).click();

    await expect(page.getByText("Enter a valid email address.")).toBeVisible();
    await expect(
      page.getByText("Message must be at least 10 characters."),
    ).toBeVisible();
  });

  test("shows success state after a valid submission", async ({ page }) => {
    await page.route("**/api/contact", async (route) => {
      await expect(route.request().method()).toBe("POST");

      await route.fulfill({
        status: 201,
        contentType: "application/json",
        body: JSON.stringify({
          ok: true,
          message: "Thanks — your message has been sent successfully.",
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
      page.getByText("Thanks — your message has been sent successfully."),
    ).toBeVisible();
  });

  test("shows error state when the server fails", async ({ page }) => {
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

    await page.goto("/contact");

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
