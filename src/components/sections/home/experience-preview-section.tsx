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
import { PageSection } from "@/components/ui/page-layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { experiencePreview, homeLinks } from "@/content/home";

export function ExperiencePreviewSection() {
  return (
    <PageSection aria-labelledby="experience-preview">
      <Container size="lg">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="experience-preview"
            eyebrow="Commercial experience"
            title="Software engineering and ecommerce web experience"
            description="A snapshot of my current commercial roles across software development, existing codebases, SEO, analytics, CMS workflows, and business-facing web work."
            align="left"
          />

          <Button asChild variant="outline" className="w-fit">
            <Link href={homeLinks.experience}>
              View full experience
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {experiencePreview.map((role) => (
            <Card key={`${role.role}-${role.company}`} className="bg-card/70">
              <CardHeader>
                <Badge variant="outline" className="w-fit">
                  {role.location}
                </Badge>
                <CardTitle>{role.role}</CardTitle>
                <CardDescription>
                  {role.company} · {role.dates}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">
                <p className="leading-7 text-muted-foreground">
                  {role.summary}
                </p>

                <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {role.techStack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </PageSection>
  );
}
