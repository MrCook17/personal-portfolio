import type { Metadata } from "next";
import { BriefcaseBusiness, Download, Mail } from "lucide-react";

import { sortedProjects } from "@/content/projects";
import { TrackedAnchor } from "@/components/analytics/tracked-link";
import { ProjectExplorer } from "@/components/projects/project-explorer";
import { Button, ButtonGroup } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageContent } from "@/components/ui/page-layout";
import { PageHeader } from "@/components/ui/page-header";
import { siteConfig } from "@/content/site";
import { createWebsiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createWebsiteMetadata({
  title: "Software Developer Projects | Charlie Cook",
  description:
    "Explore software developer projects covering backend APIs, full-stack work, ecommerce SEO, analytics and commercial case studies.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Project evidence"
        title="Software Development Projects"
        description="A searchable collection of backend, commercial software, ecommerce SEO, analytics, and university projects. Each card highlights the problem, proof point, technologies, and available case study evidence."
      />

      <PageContent size="lg" className="space-y-10 md:space-y-12">
        <section aria-labelledby="project-explorer-heading">
          <h2 id="project-explorer-heading" className="sr-only">
            Search and filter projects
          </h2>
          <ProjectExplorer projects={sortedProjects} />
        </section>

        <section aria-labelledby="projects-recruiter-cta">
          <Card className="border-primary/30 bg-card/80">
            <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div className="space-y-2">
                <h2
                  id="projects-recruiter-cta"
                  className="text-2xl font-semibold tracking-tight text-foreground"
                >
                  Want the wider work context?
                </h2>
                <p className="max-w-2xl leading-7 text-muted-foreground">
                  The project case studies sit alongside commercial experience,
                  contact details and the CV PDF.
                </p>
              </div>

              <ButtonGroup stackOnMobile className="md:justify-end">
                <Button asChild>
                  <TrackedAnchor
                    href="/contact"
                    eventName="click_contact"
                    eventParams={{ location: "projects_page_cta" }}
                  >
                    Contact me
                    <Mail className="ml-2 size-4" aria-hidden="true" />
                  </TrackedAnchor>
                </Button>

                <Button asChild variant="outline">
                  <TrackedAnchor
                    href="/experience"
                    eventName="click_experience"
                    eventParams={{ location: "projects_page_cta" }}
                  >
                    View experience
                    <BriefcaseBusiness
                      className="ml-2 size-4"
                      aria-hidden="true"
                    />
                  </TrackedAnchor>
                </Button>

                <Button asChild variant="outline">
                  <TrackedAnchor
                    href={siteConfig.cvHref}
                    download
                    eventName="download_cv"
                    eventParams={{ location: "projects_page_cta" }}
                  >
                    Download CV
                    <Download className="ml-2 size-4" aria-hidden="true" />
                  </TrackedAnchor>
                </Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        </section>
      </PageContent>
    </>
  );
}
