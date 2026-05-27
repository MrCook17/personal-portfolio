import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { featuredProjects } from "@/content/home";

export function FeaturedProjectsSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="featured-projects">
      <Container size="lg">
        <SectionHeading
          eyebrow="Project evidence"
          title="Featured software, backend and commercial web projects"
          description="A focused selection of projects that show backend/API work, commercial SEO, debugging, database-backed software, and practical technical decision-making."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card key={project.title} className="flex flex-col bg-card/70">
              <CardHeader>
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">{project.type}</Badge>
                  <Badge variant="outline">{project.status}</Badge>
                </div>

                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-base leading-7">
                  {project.summary}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 space-y-5">
                <div className="rounded-2xl border bg-background/50 p-4">
                  <p className="text-sm font-medium text-foreground">
                    What this shows
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {project.proof}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                <Button asChild>
                  <Link href={project.primaryHref}>
                    {project.primaryLabel}
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </Link>
                </Button>

                {project.secondaryHref ? (
                  <Button asChild variant="outline">
                    <Link
                      href={project.secondaryHref}
                      target={project.secondaryExternal ? "_blank" : undefined}
                      rel={project.secondaryExternal ? "noreferrer" : undefined}
                    >
                      {project.secondaryLabel}
                      {project.secondaryExternal ? (
                        <ExternalLink
                          className="ml-2 size-4"
                          aria-hidden="true"
                        />
                      ) : null}
                    </Link>
                  </Button>
                ) : null}
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
