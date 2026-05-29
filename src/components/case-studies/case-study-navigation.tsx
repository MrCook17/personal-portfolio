import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import { caseStudyProjects } from "@/content/projects";
import { Button } from "@/components/ui/button";

type CaseStudyNavigationProps = {
  currentSlug: string;
};

export function CaseStudyNavigation({ currentSlug }: CaseStudyNavigationProps) {
  const currentIndex = caseStudyProjects.findIndex(
    (project) => project.slug === currentSlug,
  );

  const previousProject =
    currentIndex > 0 ? caseStudyProjects[currentIndex - 1] : undefined;

  const nextProject =
    currentIndex >= 0 && currentIndex < caseStudyProjects.length - 1
      ? caseStudyProjects[currentIndex + 1]
      : undefined;

  return (
    <nav
      aria-label="Case study navigation"
      className="mt-12 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between"
    >
      <div className="min-w-0">
        {previousProject?.caseStudyUrl ? (
          <Button
            asChild
            variant="outline"
            className="h-auto max-w-full py-2 text-left whitespace-normal"
          >
            <Link href={previousProject.caseStudyUrl}>
              <ArrowLeft className="mr-2 size-4" aria-hidden="true" />
              {previousProject.title}
            </Link>
          </Button>
        ) : (
          <span />
        )}
      </div>

      <div className="flex min-w-0 justify-start md:justify-end">
        {nextProject?.caseStudyUrl ? (
          <Button
            asChild
            className="h-auto max-w-full py-2 text-left whitespace-normal"
          >
            <Link href={nextProject.caseStudyUrl}>
              {nextProject.title}
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </Link>
          </Button>
        ) : (
          <Button asChild>
            <Link href="/contact">Contact me</Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
