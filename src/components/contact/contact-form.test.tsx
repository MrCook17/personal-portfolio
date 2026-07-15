import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { ContactForm } from "@/components/contact/contact-form";
import { trackEvent } from "@/lib/analytics/ga";

vi.mock("@/lib/analytics/ga", () => ({
  trackEvent: vi.fn(),
}));

const successMessage = "Thanks - your message has been sent successfully.";

function mockFetchResponse(response: {
  ok: boolean;
  body: Record<string, unknown>;
}) {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({
      ok: response.ok,
      json: async () => response.body,
    }),
  );
}

async function submitValidForm() {
  fireEvent.change(screen.getByLabelText("Name"), {
    target: { value: "Test User" },
  });
  fireEvent.change(screen.getByLabelText("Email"), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(screen.getByLabelText("Message"), {
    target: { value: "This is a valid test message for the contact form." },
  });

  fireEvent.click(screen.getByRole("button", { name: /send message/i }));
}

describe("ContactForm analytics", () => {
  beforeEach(() => {
    vi.mocked(trackEvent).mockClear();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("fires contact_form_submit once after a stored successful submission", async () => {
    mockFetchResponse({
      ok: true,
      body: {
        ok: true,
        stored: true,
        message: successMessage,
      },
    });

    render(<ContactForm />);

    await submitValidForm();

    await waitFor(() => {
      expect(trackEvent).toHaveBeenCalledTimes(1);
    });
    expect(trackEvent).toHaveBeenCalledWith("contact_form_submit", {
      location: "contact_page",
      page_path: "/contact",
    });
  });

  it("does not fire contact_form_submit when a success body was not stored", async () => {
    mockFetchResponse({
      ok: true,
      body: {
        ok: true,
        stored: false,
        message: successMessage,
      },
    });

    render(<ContactForm />);

    await submitValidForm();

    await waitFor(() => {
      expect(screen.getByText(successMessage)).toBeInTheDocument();
    });
    expect(trackEvent).not.toHaveBeenCalled();
  });

  it("does not fire contact_form_submit after a failed API response", async () => {
    mockFetchResponse({
      ok: false,
      body: {
        ok: false,
        message:
          "Something went wrong. Please try again or contact me directly by email.",
      },
    });

    render(<ContactForm />);

    await submitValidForm();

    await waitFor(() => {
      expect(
        screen.getByText(
          "Something went wrong. Please try again or contact me directly by email.",
        ),
      ).toBeInTheDocument();
    });
    expect(trackEvent).not.toHaveBeenCalled();
  });
});
