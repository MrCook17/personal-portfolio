import type { Project } from "@/types/project";
import { ProjectStatusBadge } from "@/components/projects/project-status-badge";
import { Badge } from "@/components/ui/badge";

type CaseStudyMetaProps = {
  project: Project;
};

export function CaseStudyMeta({ project }: CaseStudyMetaProps) {
  const metaItems = [
    {
      label: "Role",
      value: project.caseStudy?.role ?? "Project contributor",
    },
    {
      label: "Timeline",
      value: project.caseStudy?.timeline ?? "Portfolio case study",
    },
    {
      label: "Type",
      value: project.type,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {metaItems.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-border bg-card/70 p-4"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            {item.label}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{item.value}</p>
        </div>
      ))}

      <div className="flex flex-wrap gap-2 md:col-span-3">
        <Badge variant="secondary">{project.type}</Badge>
        <ProjectStatusBadge status={project.status} />
      </div>
    </div>
  );
}
