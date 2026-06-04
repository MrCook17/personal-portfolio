import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

import type { Project } from "@/types/project";
import { TrackedAnchor } from "@/components/analytics/tracked-link";
import { GitHubIcon } from "@/components/icons/brand-icons";
import { ProjectStatusBadge } from "@/components/projects/project-status-badge";
import { TechStackTag } from "@/components/projects/tech-stack-tag";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const visibleTech = project.techStack.slice(0, 6);
  const hiddenTechCount = project.techStack.length - visibleTech.length;

  return (
    <Card className="group flex h-full flex-col border-border/80 bg-card/80 transition-colors hover:border-primary/60">
      <CardHeader className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{project.type}</Badge>
          <ProjectStatusBadge status={project.status} />
        </div>

        <div className="space-y-3">
          <CardTitle className="text-xl leading-tight">
            {project.caseStudyUrl ? (
              <Link
                href={project.caseStudyUrl}
                className="transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {project.title}
              </Link>
            ) : (
              project.title
            )}
          </CardTitle>

          <p className="text-sm leading-7 text-muted-foreground">
            {project.summary}
          </p>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-5">
        <div className="rounded-2xl border border-border bg-background/40 p-4">
          <p className="text-sm font-semibold text-foreground">
            What this shows
          </p>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            {project.proofPoint}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {visibleTech.map((tech) => (
            <TechStackTag key={tech}>{tech}</TechStackTag>
          ))}

          {hiddenTechCount > 0 ? (
            <TechStackTag>{`+${hiddenTechCount} more`}</TechStackTag>
          ) : null}
        </div>
      </CardContent>

      <CardFooter className="mt-auto flex flex-wrap gap-3">
        {project.caseStudyUrl ? (
          <Button asChild>
            <Link href={project.caseStudyUrl}>
              View project details
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </Link>
          </Button>
        ) : null}

        {project.githubUrl ? (
          <Button asChild variant="outline">
            <TrackedAnchor
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              eventName="click_project_github"
              eventParams={{
                project_slug: project.slug,
                project_title: project.title,
                location: "project_card",
              }}
            >
              <GitHubIcon className="mr-2 size-4" aria-hidden="true" />
              GitHub
            </TrackedAnchor>
          </Button>
        ) : null}

        {project.liveUrl ? (
          <Button asChild variant="outline">
            <TrackedAnchor
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              eventName="click_live_project"
              eventParams={{
                project_slug: project.slug,
                project_title: project.title,
                location: "project_card",
              }}
            >
              <ExternalLink className="mr-2 size-4" aria-hidden="true" />
              Live page
            </TrackedAnchor>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}
