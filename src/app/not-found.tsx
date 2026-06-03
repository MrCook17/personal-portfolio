import type { Metadata } from "next";
import Link from "next/link";

import { Button, ButtonGroup } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageContent } from "@/components/ui/page-layout";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Page Not Found | Charlie Cook",
  description:
    "The page could not be found on Charlie Cook's software developer portfolio.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFoundPage() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="Page Not Found"
        description="The page you are looking for may have moved, been removed, or never existed."
      />

      <PageContent size="md">
        <Card>
          <CardContent className="space-y-6 p-6 md:p-8">
            <p className="leading-7 text-muted-foreground">
              Use one of the links below to get back to the main portfolio
              pages.
            </p>

            <ButtonGroup>
              <Button asChild>
                <Link href="/">Go home</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/projects">View projects</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact me</Link>
              </Button>
            </ButtonGroup>
          </CardContent>
        </Card>
      </PageContent>
    </>
  );
}
