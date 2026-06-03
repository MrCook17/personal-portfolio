import type { Metadata } from "next";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageContent } from "@/components/ui/page-layout";
import { PageHeader } from "@/components/ui/page-header";
import { createWebsiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createWebsiteMetadata({
  title: "Privacy | Charlie Cook",
  description:
    "How contact form submissions are collected, stored and used on Charlie Cook's software developer portfolio.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Privacy"
        description="A simple explanation of how contact form submissions are handled on this portfolio website."
      />

      <PageContent size="md">
        <Card>
          <CardHeader>
            <CardTitle as="h2">Contact form privacy summary</CardTitle>
          </CardHeader>

          <CardContent className="space-y-8 text-sm leading-7 text-muted-foreground">
            <section className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">
                What information I collect
              </h3>
              <p>
                When you use the contact form, I collect your name, email
                address and message. The form also uses basic anti-spam checks,
                but I do not intentionally collect unnecessary personal
                information through the contact form.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">
                Why I collect it
              </h3>
              <p>
                I use the information you provide to respond to your enquiry,
                such as a role opportunity, project question or
                portfolio-related message. Contact form submissions are not used
                for marketing.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">
                Where it is stored
              </h3>
              <p>
                Valid contact form submissions are stored in Supabase. A
                notification may also be sent through the configured email
                provider so I know a message has been received.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">
                Who it is shared with
              </h3>
              <p>
                Contact form data may be processed by Supabase for database
                storage and by the configured email provider for notification
                emails. I do not sell contact form submissions or share them for
                advertising purposes.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">
                How long I keep it
              </h3>
              <p>
                I only keep contact form submissions for as long as needed to
                respond to or manage the enquiry. As a practical approach, I aim
                to review and delete old submissions when they are no longer
                needed, usually within 6–12 months unless there is an ongoing
                conversation.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">
                Deletion or correction requests
              </h3>
              <p>
                If you want your contact form submission deleted or corrected,
                contact me using the{" "}
                <Link
                  href="/contact"
                  className="font-medium text-primary underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
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
