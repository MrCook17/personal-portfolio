import type { ReactNode } from "react";

import type { Project } from "@/types/project";
import { CaseStudyHeader } from "@/components/case-studies/case-study-header";
import { CaseStudyNavigation } from "@/components/case-studies/case-study-navigation";
import { CaseStudySummaryCards } from "@/components/case-studies/case-study-summary-cards";
import { Container } from "@/components/ui/container";
import { MdxContent } from "@/components/ui/mdx-content";

type CaseStudyLayoutProps = {
  project: Project;
  children: ReactNode;
};

export function CaseStudyLayout({ project, children }: CaseStudyLayoutProps) {
  return (
    <Container size="lg" className="pb-16 md:pb-20 lg:pb-24">
      <CaseStudyHeader project={project} />

      <div className="space-y-8 md:space-y-10 lg:space-y-12">
        {project.caseStudy ? (
          <CaseStudySummaryCards summary={project.caseStudy} />
        ) : null}

        <article>
          <MdxContent>{children}</MdxContent>
        </article>

        <CaseStudyNavigation currentSlug={project.slug} />
      </div>
    </Container>
  );
}
