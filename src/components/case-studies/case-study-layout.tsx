import type { ReactNode } from "react";

import type { Project } from "@/types/project";
import { CaseStudyHeader } from "@/components/case-studies/case-study-header";
import { CaseStudyNavigation } from "@/components/case-studies/case-study-navigation";
import { CaseStudySummaryCards } from "@/components/case-studies/case-study-summary-cards";
import { Container } from "@/components/ui/container";

type CaseStudyLayoutProps = {
  project: Project;
  children: ReactNode;
};

export function CaseStudyLayout({ project, children }: CaseStudyLayoutProps) {
  return (
    <Container size="lg">
      <CaseStudyHeader project={project} />

      <div className="space-y-10 pb-16">
        {project.caseStudy ? (
          <CaseStudySummaryCards summary={project.caseStudy} />
        ) : null}

        <article className="rounded-3xl border border-border bg-card/70 p-6 shadow-sm md:p-10">
          {children}
        </article>

        <CaseStudyNavigation currentSlug={project.slug} />
      </div>
    </Container>
  );
}
