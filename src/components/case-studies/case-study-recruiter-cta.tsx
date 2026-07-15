import Link from "next/link";
import { BriefcaseBusiness, FileText, Mail } from "lucide-react";

import { TrackedAnchor } from "@/components/analytics/tracked-link";
import { Button, ButtonGroup } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/content/site";
import type { Project } from "@/types/project";

type CaseStudyRecruiterCtaProps = {
  project: Project;
};

export function CaseStudyRecruiterCta({ project }: CaseStudyRecruiterCtaProps) {
  const eventParams = {
    location: "case_study_cta",
    project_slug: project.slug,
    project_title: project.title,
  };

  return (
    <section aria-labelledby={`case-study-recruiter-cta-${project.slug}`}>
      <Card className="border-primary/30 bg-card/80">
        <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="space-y-2">
            <h2
              id={`case-study-recruiter-cta-${project.slug}`}
              className="text-2xl font-semibold tracking-tight text-foreground"
            >
              Interested in my software and web experience?
            </h2>
            <p className="max-w-2xl leading-7 text-muted-foreground">
              Get in touch, read the wider work history, or view the CV for a
              concise recruiter overview.
            </p>
          </div>

          <ButtonGroup stackOnMobile className="md:justify-end">
            <Button asChild>
              <TrackedAnchor
                href="/contact"
                eventName="click_contact"
                eventParams={eventParams}
              >
                Contact me
                <Mail className="ml-2 size-4" aria-hidden="true" />
              </TrackedAnchor>
            </Button>

            <Button asChild variant="outline">
              <TrackedAnchor
                href="/experience"
                eventName="click_experience"
                eventParams={eventParams}
              >
                View my experience
                <BriefcaseBusiness className="ml-2 size-4" aria-hidden="true" />
              </TrackedAnchor>
            </Button>

            <Button asChild variant="outline">
              <Link href={siteConfig.cvPageHref}>
                View my CV
                <FileText className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </section>
  );
}
