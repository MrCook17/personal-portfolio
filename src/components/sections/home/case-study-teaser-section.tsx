import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { caseStudyTeasers, homeLinks } from "@/content/home";

export function CaseStudyTeaserSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="case-study-teaser">
      <Container size="lg">
        <div className="rounded-3xl border bg-card/70 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Badge variant="outline">Detailed case studies</Badge>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Deeper project write-ups focused on decisions, constraints and
                evidence.
              </h2>

              <p className="mt-4 leading-7 text-muted-foreground">
                The strongest portfolio evidence is not just screenshots. The
                case studies will explain the problem, context, technical
                approach, constraints, results, and what I learned from each
                project.
              </p>

              <Button asChild className="mt-6">
                <Link href={homeLinks.projects}>
                  Browse all projects
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-4">
              {caseStudyTeasers.map((caseStudy) => (
                <Card key={caseStudy.title} className="bg-background/50">
                  <CardHeader>
                    <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
                    <CardDescription className="text-base leading-7">
                      {caseStudy.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
