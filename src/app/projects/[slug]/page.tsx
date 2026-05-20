import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { caseStudyProjects, getProjectBySlug } from "@/content/projects";
import { projectCaseStudies } from "@/content/project-case-studies";
import { CaseStudyLayout } from "@/components/case-studies/case-study-layout";

type ProjectCaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectCaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found | Charlie Cook",
    };
  }

  return {
    title: `${project.title} | Case Study | Charlie Cook`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectCaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const CaseStudy = projectCaseStudies[slug];

  if (!project || !CaseStudy) {
    notFound();
  }

  return (
    <main>
      <CaseStudyLayout project={project}>
        <CaseStudy />
      </CaseStudyLayout>
    </main>
  );
}
