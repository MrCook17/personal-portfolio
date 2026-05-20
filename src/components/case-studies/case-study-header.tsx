import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

import type { Project } from "@/types/project";
import { GitHubIcon } from "@/components/icons/brand-icons";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { CaseStudyMeta } from "@/components/case-studies/case-study-meta";

type CaseStudyHeaderProps = {
  project: Project;
};

export function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  return (
    <header className="space-y-8 py-12 md:py-16">
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

      <div className="flex flex-wrap gap-3">
        {project.githubUrl ? (
          <Button asChild>
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <GitHubIcon className="mr-2 size-4" aria-hidden="true" />
              View GitHub
            </a>
          </Button>
        ) : null}

        {project.liveUrl ? (
          <Button asChild variant="outline">
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="mr-2 size-4" aria-hidden="true" />
              View live page
            </a>
          </Button>
        ) : null}
      </div>

      <CaseStudyMeta project={project} />
    </header>
  );
}
