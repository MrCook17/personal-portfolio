import { fireEvent, render, screen, within } from "@testing-library/react";
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
    expect(
      screen.queryByRole("heading", { name: "Experience focus" }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^contact me$/i })).toHaveAttribute(
      "href",
      "/contact",
    );
    expect(
      screen.getByRole("link", { name: /^view my projects$/i }),
    ).toHaveAttribute("href", "/projects");
    expect(
      screen.getByRole("link", { name: /^open pdf in a new tab$/i }),
    ).toHaveAttribute("href", siteConfig.cvPdfHref);

    const downloadLink = screen.getByRole("link", {
      name: /^download cv \(pdf\)$/i,
    });

    expect(downloadLink).toHaveAttribute("href", siteConfig.cvPdfHref);
    expect(downloadLink).toHaveAttribute("download");
  });

  it("renders one static image preview for each CV page", () => {
    render(<CvPage />);

    const previewList = screen.getByRole("list", {
      name: "Charlie Cook CV pages",
    });
    const previewImages = within(previewList).getAllByRole("img");

    expect(previewImages).toHaveLength(2);
    expect(previewImages[0]).toHaveAttribute(
      "alt",
      "Page 1 of Charlie Cook's software developer CV",
    );
    expect(previewImages[0]).toHaveAttribute(
      "src",
      expect.stringContaining("charlie-cook-cv-page-1.png"),
    );
    expect(previewImages[0]).toHaveAttribute("width", "1588");
    expect(previewImages[0]).toHaveAttribute("height", "2246");
    expect(
      screen.getByText("Page 1 of Charlie Cook's CV."),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        "Your browser cannot display the embedded CV PDF here.",
      ),
    ).not.toBeInTheDocument();
  });

  it("does not track viewing the CV page or opening the PDF as a download", () => {
    vi.mocked(trackEvent).mockClear();
    render(<CvPage />);

    expect(trackEvent).not.toHaveBeenCalled();

    fireEvent.click(
      screen.getByRole("link", { name: /^open pdf in a new tab$/i }),
    );
    fireEvent.click(screen.getByRole("link", { name: /^contact me$/i }));

    expect(trackEvent).not.toHaveBeenCalled();
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
