import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import CvPage, { metadata } from "@/app/cv/page";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/lib/analytics/ga";

vi.mock("@/lib/analytics/ga", () => ({
  trackEvent: vi.fn(),
}));

describe("CV page", () => {
  it("uses the HTML CV page as its canonical URL", () => {
    expect(siteConfig.cvPageHref).toBe("/cv");
    expect(siteConfig.cvPdfHref).toBe("/Charlie-Cook-CV.pdf");
    expect(metadata.alternates?.canonical).toBe("https://charliecook.dev/cv");
    expect(metadata.openGraph?.url).toBe("https://charliecook.dev/cv");
  });

  it("links normal recruiter routes to HTML pages and the download action to the PDF", () => {
    render(<CvPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Charlie Cook CV" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^contact me$/i })).toHaveAttribute(
      "href",
      "/contact",
    );
    expect(
      screen.getByRole("link", { name: /^view my projects$/i }),
    ).toHaveAttribute("href", "/projects");

    const downloadLink = screen.getByRole("link", {
      name: /^download cv \(pdf\)$/i,
    });

    expect(downloadLink).toHaveAttribute("href", siteConfig.cvPdfHref);
    expect(downloadLink).toHaveAttribute("download");
  });

  it("tracks only the explicit PDF download action as download_cv", () => {
    vi.mocked(trackEvent).mockClear();
    render(<CvPage />);

    fireEvent.click(
      screen.getByRole("link", { name: /^download cv \(pdf\)$/i }),
    );

    expect(trackEvent).toHaveBeenCalledTimes(1);
    expect(trackEvent).toHaveBeenCalledWith(
      "download_cv",
      expect.objectContaining({
        link_url: expect.stringContaining(siteConfig.cvPdfHref),
        link_text: "Download CV (PDF)",
        location: "cv_page",
        format: "pdf",
      }),
    );
  });
});
