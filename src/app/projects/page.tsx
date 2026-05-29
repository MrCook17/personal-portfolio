import type { Metadata } from "next";

import { sortedProjects } from "@/content/projects";
import { ProjectExplorer } from "@/components/projects/project-explorer";
import { PageContent } from "@/components/ui/page-layout";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Software Development Projects | Charlie Cook",
  description:
    "Backend, software, analytics, SEO and commercial web projects from Charlie Cook, a UK Computer Science student and software developer.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Project evidence"
        title="Software Development Projects"
        description="A searchable collection of backend, commercial software, ecommerce SEO, analytics, and university projects. Each card highlights the problem, proof point, technologies, and available case study evidence."
      />

      <PageContent size="lg">
        <section aria-labelledby="project-explorer-heading">
          <h2 id="project-explorer-heading" className="sr-only">
            Search and filter projects
          </h2>
          <ProjectExplorer projects={sortedProjects} />
        </section>
      </PageContent>
    </>
  );
}
