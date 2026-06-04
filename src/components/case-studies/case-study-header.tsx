import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

import type { Project } from "@/types/project";
import { TrackedAnchor } from "@/components/analytics/tracked-link";
import { GitHubIcon } from "@/components/icons/brand-icons";
import { Button, ButtonGroup } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { CaseStudyMeta } from "@/components/case-studies/case-study-meta";

type CaseStudyHeaderProps = {
  project: Project;
};

export function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  return (
    <header className="space-y-7 py-10 md:space-y-8 md:py-14 lg:py-16">
      <Button asChild variant="ghost" size="sm">
        <Link href="/projects">
          <ArrowLeft className="mr-2 size-4" aria-hidden="true" />
          Back to projects
        </Link>
      </Button>

      <div className="max-w-4xl space-y-5">
        <p className="text-sm font-semibold tracking-[0.22em] text-primary uppercase">
          Project case study
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          {project.title}
        </h1>
        <p className="text-lg leading-8 text-muted-foreground">
          {project.summary}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <ButtonGroup>
        {project.githubUrl ? (
          <Button asChild>
            <TrackedAnchor
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              eventName="click_project_github"
              eventParams={{
                project_slug: project.slug,
                project_title: project.title,
                location: "case_study_header",
              }}
            >
              <GitHubIcon className="mr-2 size-4" aria-hidden="true" />
              View GitHub
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
                location: "case_study_header",
              }}
            >
              <ExternalLink className="mr-2 size-4" aria-hidden="true" />
              View live page
            </TrackedAnchor>
          </Button>
        ) : null}
      </ButtonGroup>

      <CaseStudyMeta project={project} />
    </header>
  );
}
