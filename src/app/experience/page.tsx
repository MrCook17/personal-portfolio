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
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Experience | Charlie Cook",
  description:
    "Commercial software engineering, web operations, SEO, analytics and database-backed development experience.",
};

export default function ExperiencePage() {
  return (
    <main className="pb-24">
      <PageHeader
        eyebrow="Experience"
        title="Commercial Software & Web Experience"
        description="A timeline of software engineering, web operations, SEO, analytics, database-backed systems, debugging and practical business work."
      />

      <Container size="lg" className="mt-10 md:mt-12">
        <div className="space-y-20">
          <section aria-labelledby="experience-timeline">
            <SectionHeading
              eyebrow="Timeline"
              title="Work experience"
              description="Software engineering is positioned first because it is closest to the roles I am working towards, while ecommerce SEO and web operations remain an important commercial differentiator."
            />

            <div className="mt-10">
              <ExperienceTimeline items={experienceRoles} />
            </div>
          </section>

          <section aria-labelledby="commercial-work">
            <SectionHeading
              eyebrow="Commercial work"
              title="What this experience proves"
              description="A clearer breakdown of the commercial skills behind the role titles, linked to case studies where public or anonymised evidence exists."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {commercialWorkAreas.map((area) => (
                <CommercialWorkCard key={area.title} area={area} />
              ))}
            </div>
          </section>

          <section aria-labelledby="experience-education">
            <SectionHeading
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

                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/projects">View projects</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">Contact me</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </Container>
    </main>
  );
}
