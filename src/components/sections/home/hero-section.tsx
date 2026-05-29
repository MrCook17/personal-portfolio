import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons/brand-icons";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonGroup } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { homeLinks } from "@/content/home";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="absolute top-16 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl sm:h-96 sm:w-96" />

      <Container size="lg">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-6">
            UK-based Computer Science student and software developer
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Software developer and Computer Science student building practical
            web applications.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-pretty text-muted-foreground sm:text-lg">
            I’m a UK-based Computer Science student with commercial experience
            across software engineering, web operations, SEO, analytics, CMS
            systems, and database-backed development. I build maintainable
            software with TypeScript, React, Go, PHP, SQL, and modern web
            tooling.
          </p>

          <HeroActions />

          <div className="mt-10 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            <div className="flex items-center justify-center rounded-2xl border bg-card/60 px-4 py-3 text-center">
              Commercial software experience
            </div>
            <div className="flex items-center justify-center rounded-2xl border bg-card/60 px-4 py-3 text-center">
              Backend/API project evidence
            </div>
            <div className="flex items-center justify-center rounded-2xl border bg-card/60 px-4 py-3 text-center">
              SEO, analytics and ecommerce knowledge
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroActions() {
  return (
    <ButtonGroup align="center" stackOnMobile className="mt-8">
      <Button asChild size="lg">
        <Link href={homeLinks.projects}>
          View projects
          <ArrowRight className="ml-2 size-4" aria-hidden="true" />
        </Link>
      </Button>

      <Button asChild size="lg" variant="outline">
        <Link href={homeLinks.cv} target="_blank" rel="noopener noreferrer">
          Download CV
          <Download className="ml-2 size-4" aria-hidden="true" />
        </Link>
      </Button>

      <Button asChild size="lg" variant="ghost">
        <Link href={homeLinks.contact}>Contact me</Link>
      </Button>

      <div className="flex items-center gap-2 pt-2 sm:pt-0">
        <Button asChild size="icon" variant="ghost">
          <Link
            href={homeLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <GitHubIcon className="size-5" aria-hidden="true" />
          </Link>
        </Button>

        <Button asChild size="icon" variant="ghost">
          <Link
            href={homeLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon className="size-5" aria-hidden="true" />
          </Link>
        </Button>

        <Button asChild size="icon" variant="ghost">
          <Link href={homeLinks.email} aria-label="Email Charlie Cook">
            <Mail className="size-5" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </ButtonGroup>
  );
}
