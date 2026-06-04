import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";

import { TrackedAnchor } from "@/components/analytics/tracked-link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/brand-icons";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonGroup } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { homeLinks } from "@/content/home";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-32 lg:pb-16">
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

          <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3 md:mt-10">
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
        <TrackedAnchor
          href={homeLinks.cv}
          download
          eventName="download_cv"
          eventParams={{ location: "homepage" }}
        >
          Download CV
          <Download className="ml-2 size-4" aria-hidden="true" />
        </TrackedAnchor>
      </Button>

      <Button asChild size="lg" variant="ghost">
        <Link href={homeLinks.contact}>Contact me</Link>
      </Button>

      <div className="flex items-center gap-2 pt-2 sm:pt-0">
        <Button asChild size="icon" variant="ghost">
          <TrackedAnchor
            href={homeLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            eventName="click_github"
            eventParams={{ location: "homepage" }}
          >
            <GitHubIcon className="size-5" aria-hidden="true" />
          </TrackedAnchor>
        </Button>

        <Button asChild size="icon" variant="ghost">
          <TrackedAnchor
            href={homeLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            eventName="click_linkedin"
            eventParams={{ location: "homepage" }}
          >
            <LinkedInIcon className="size-5" aria-hidden="true" />
          </TrackedAnchor>
        </Button>

        <Button asChild size="icon" variant="ghost">
          <TrackedAnchor
            href={homeLinks.email}
            aria-label="Email Charlie Cook"
            eventName="click_email"
            eventParams={{ location: "homepage" }}
          >
            <Mail className="size-5" aria-hidden="true" />
          </TrackedAnchor>
        </Button>
      </div>
    </ButtonGroup>
  );
}
