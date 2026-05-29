import type { Metadata } from "next";
import Link from "next/link";

import {
  commercialWorkAreas,
  education,
  experienceRoles,
} from "@/content/experience";

import { EducationCard } from "@/components/about/education-card";
import { CommercialWorkCard } from "@/components/experience/commercial-work-card";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { Button, ButtonGroup } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageContent, PageSections } from "@/components/ui/page-layout";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Experience | Charlie Cook",
  description:
    "Commercial software engineering, web operations, SEO, analytics and database-backed development experience.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Commercial Software & Web Experience"
        description="A look at the commercial software and web work I’ve done alongside university, from desktop applications and existing codebases to SEO, analytics and CMS-based website improvements."
      />

      <PageContent size="lg">
        <PageSections>
          <section aria-labelledby="experience-timeline">
            <SectionHeading
              id="experience-timeline"
              eyebrow="Timeline"
              title="Work experience"
              description="I’ve put the Software Engineer role first because it is most relevant to the developer roles I’m working towards, while my Web Operator role adds useful experience across ecommerce, SEO and analytics."
            />

            <div className="mt-10">
              <ExperienceTimeline items={experienceRoles} />
            </div>
          </section>

          <section aria-labelledby="commercial-work">
            <SectionHeading
              id="commercial-work"
              eyebrow="Commercial work"
              title="What this experience proves"
              description="A clearer breakdown of the commercial skills behind the role titles, linked to case studies where public or anonymised evidence exists."
            />

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {commercialWorkAreas.map((area) => (
                <CommercialWorkCard key={area.title} area={area} />
              ))}
            </div>
          </section>

          <section aria-labelledby="experience-education">
            <SectionHeading
              id="experience-education"
              eyebrow="Education"
              title="Computer Science foundation"
              description="University work supports the commercial experience with software engineering, algorithms, databases, web technologies and backend/API coursework."
            />

            <div className="mt-8">
              <EducationCard education={education} />
            </div>
          </section>

          <section aria-labelledby="experience-confidentiality">
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="space-y-4 p-6 md:p-8">
                <h2
                  id="experience-confidentiality"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Confidentiality note
                </h2>
                <p className="max-w-3xl leading-7 text-muted-foreground">
                  Some commercial software work involves private client systems,
                  business data, internal databases and sensitive screenshots.
                  Those projects are described using anonymised case studies,
                  abstract workflow explanations and public-safe technical
                  summaries only.
                </p>
              </CardContent>
            </Card>
          </section>

          <section aria-labelledby="experience-cta">
            <Card className="overflow-hidden border-primary/30 bg-card/80">
              <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
                <div className="space-y-2">
                  <h2
                    id="experience-cta"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    Want to see the project evidence?
                  </h2>
                  <p className="max-w-2xl text-muted-foreground">
                    The projects page expands this experience into backend,
                    commercial SEO, analytics and anonymised software case
                    studies.
                  </p>
                </div>

                <ButtonGroup>
                  <Button asChild>
                    <Link href="/projects">View projects</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">Contact me</Link>
                  </Button>
                </ButtonGroup>
              </CardContent>
            </Card>
          </section>
        </PageSections>
      </PageContent>
    </>
  );
}
