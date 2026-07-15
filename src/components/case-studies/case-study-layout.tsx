import type { ReactNode } from "react";

import type { Project } from "@/types/project";
import { CaseStudyViewTracker } from "@/components/analytics/case-study-view-tracker";
import { CaseStudyHeader } from "@/components/case-studies/case-study-header";
import { CaseStudyNavigation } from "@/components/case-studies/case-study-navigation";
import { CaseStudyRecruiterCta } from "@/components/case-studies/case-study-recruiter-cta";
import { CaseStudySummaryCards } from "@/components/case-studies/case-study-summary-cards";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { MdxContent } from "@/components/ui/mdx-content";

type CaseStudyLayoutProps = {
  project: Project;
  children: ReactNode;
};

export function CaseStudyLayout({ project, children }: CaseStudyLayoutProps) {
  const pagePath = project.caseStudyUrl ?? `/projects/${project.slug}`;

  return (
    <Container size="lg" className="pb-16 md:pb-20 lg:pb-24">
      <CaseStudyViewTracker
        pagePath={pagePath}
        projectSlug={project.slug}
        projectTitle={project.title}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title, href: pagePath },
        ]}
      />

      <CaseStudyHeader project={project} />

      <div className="space-y-8 md:space-y-10 lg:space-y-12">
        {project.caseStudy ? (
          <CaseStudySummaryCards summary={project.caseStudy} />
        ) : null}

        <article>
          <MdxContent>{children}</MdxContent>
        </article>

        <CaseStudyRecruiterCta project={project} />

        <CaseStudyNavigation currentSlug={project.slug} />
      </div>
    </Container>
  );
}
