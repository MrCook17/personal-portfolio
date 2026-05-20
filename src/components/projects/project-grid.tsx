import type { Project } from "@/types/project";
import { ProjectCard } from "@/components/projects/project-card";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-3xl border border-border bg-card/80 p-8 text-center">
        <h2 className="text-lg font-semibold text-foreground">
          No projects match this search.
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Try changing the keyword, project type, or status filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
