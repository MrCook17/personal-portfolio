import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { caseStudyProjects, getProjectBySlug } from "@/content/projects";
import { projectCaseStudies } from "@/content/project-case-studies";
import { CaseStudyLayout } from "@/components/case-studies/case-study-layout";
import { JsonLd } from "@/components/seo/json-ld";
import { createArticleMetadata } from "@/lib/seo/metadata";
import {
  getBreadcrumbListJsonLd,
  getCreativeWorkJsonLd,
} from "@/lib/seo/schema";

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

  const title =
    project.seo?.title ?? `${project.title} | Case Study | Charlie Cook`;
  const description = project.seo?.description ?? project.summary;
  const path = project.caseStudyUrl ?? `/projects/${project.slug}`;

  return createArticleMetadata({
    title,
    description,
    path,
    tags: project.seo?.keywords ?? project.keywords,
  });
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

  const path = project.caseStudyUrl ?? `/projects/${project.slug}`;

  return (
    <>
      <JsonLd
        data={[
          getCreativeWorkJsonLd(project),
          getBreadcrumbListJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path },
          ]),
        ]}
      />

      <CaseStudyLayout project={project}>
        <CaseStudy />
      </CaseStudyLayout>
    </>
  );
}
