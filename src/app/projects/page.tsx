import type { Metadata } from "next";

import { sortedProjects } from "@/content/projects";
import { ProjectExplorer } from "@/components/projects/project-explorer";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Software Development Projects | Charlie Cook",
  description:
    "Backend, software, analytics, SEO and commercial web projects from Charlie Cook, a UK Computer Science student and software developer.",
};

export default function ProjectsPage() {
  return (
    <main>
      <Container size="lg" className="py-12 md:py-16">
        <PageHeader
          eyebrow="Project evidence"
          title="Software Development Projects"
          description="A searchable collection of backend, commercial software, ecommerce SEO, analytics, and university projects. Each card highlights the problem, proof point, technologies, and available case study evidence."
        />

        <section className="mt-10" aria-labelledby="project-explorer-heading">
          <h2 id="project-explorer-heading" className="sr-only">
            Search and filter projects
          </h2>
          <ProjectExplorer projects={sortedProjects} />
        </section>
      </Container>
    </main>
  );
}
