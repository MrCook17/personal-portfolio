import type { Metadata } from "next";
import Link from "next/link";

import { education } from "@/content/experience";

import { AboutIntroSection } from "@/components/about/about-intro-section";
import { CurrentFocusSection } from "@/components/about/current-focus-section";
import { EducationCard } from "@/components/about/education-card";
import { InterestsSection } from "@/components/about/interests-section";
import { SkillsAndToolsSection } from "@/components/about/skills-and-tools-section";
import { WorkingStyleSection } from "@/components/about/working-style-section";
import { Button, ButtonGroup } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageContent, PageSections } from "@/components/ui/page-layout";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProfileImage } from "@/components/about/profile-image";

export const metadata: Metadata = {
  title: "About | Charlie Cook",
  description:
    "About Charlie Cook, a UK Computer Science student and software developer with commercial software, SEO, web operations and backend experience.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About Me"
        description="UK Computer Science student and software developer with commercial experience in software engineering, web operations, SEO, analytics and backend development."
        visual={<ProfileImage />}
      />

      <PageContent size="lg">
        <PageSections>
          <AboutIntroSection />

          <CurrentFocusSection />

          <SkillsAndToolsSection />

          <section aria-labelledby="about-education">
            <SectionHeading
              id="about-education"
              eyebrow="Education"
              title="University and coursework"
              description="My degree gives the technical foundation behind the commercial work and portfolio projects."
            />

            <div className="mt-8">
              <EducationCard education={education} />
            </div>
          </section>

          <WorkingStyleSection />

          <InterestsSection />

          <section aria-labelledby="about-cta">
            <Card className="overflow-hidden border-primary/30 bg-card/80">
              <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
                <div className="space-y-2">
                  <h2
                    id="about-cta"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    Continue through the portfolio
                  </h2>
                  <p className="max-w-2xl text-muted-foreground">
                    View the project case studies, commercial experience or
                    contact page for the strongest employer-facing evidence.
                  </p>
                </div>

                <ButtonGroup>
                  <Button asChild>
                    <Link href="/projects">View projects</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/experience">View experience</Link>
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
