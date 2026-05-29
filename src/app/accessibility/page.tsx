import type { Metadata } from "next";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageContent } from "@/components/ui/page-layout";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Accessibility | Charlie Cook",
  description:
    "Accessibility information for Charlie Cook's software developer portfolio, including current approach and feedback details.",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Accessibility"
        title="Accessibility"
        description="How this portfolio is being built and checked for accessibility."
      />

      <PageContent size="md">
        <Card>
          <CardHeader>
            <CardTitle as="h2">Accessibility statement</CardTitle>
          </CardHeader>

          <CardContent className="space-y-8 text-sm leading-7 text-muted-foreground">
            <section className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">
                Accessibility approach
              </h3>
              <p>
                This portfolio is built with accessibility in mind, including
                semantic HTML, keyboard-friendly navigation, visible focus
                states and readable page structure. The site aims to support
                users across desktop, tablet and mobile devices.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">
                Design and development considerations
              </h3>
              <p>
                The site uses labelled form fields, clear link text, structured
                headings and accessible buttons. I aim to keep colour contrast
                readable, avoid relying on colour alone, and support
                reduced-motion preferences where animation is used.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">
                Current status
              </h3>
              <p>
                This is a personal portfolio website under active development. I
                aim to follow WCAG 2.2 principles where practical, but I am not
                claiming formal WCAG compliance until the site has been fully
                reviewed and tested.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">
                Feedback
              </h3>
              <p>
                If you find an accessibility issue or have trouble using part of
                the site, contact me using the{" "}
                <Link
                  href="/contact"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  contact page
                </Link>
                .
              </p>
            </section>

            <p className="border-t border-border pt-6 text-xs">
              Last updated: May 2026.
            </p>
          </CardContent>
        </Card>
      </PageContent>
    </>
  );
}
