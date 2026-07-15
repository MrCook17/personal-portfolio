import type { Metadata } from "next";
import Link from "next/link";
import {
  BriefcaseBusiness,
  Download,
  ExternalLink,
  FolderKanban,
  GraduationCap,
  Mail,
  UserRound,
} from "lucide-react";

import { TrackedAnchor } from "@/components/analytics/tracked-link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/brand-icons";
import { Button, ButtonGroup } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageContent, PageSections } from "@/components/ui/page-layout";
import { PageHeader } from "@/components/ui/page-header";
import { education, experienceRoles } from "@/content/experience";
import { siteConfig } from "@/content/site";
import { createWebsiteMetadata } from "@/lib/seo/metadata";

const title = "Charlie Cook CV | Software Developer";
const description =
  "View Charlie Cook's software developer CV, including commercial software engineering, web operations, backend, full-stack, SEO and Computer Science experience.";

export const metadata: Metadata = createWebsiteMetadata({
  title,
  description,
  path: siteConfig.cvPageHref,
});

const cvSummary = [
  {
    title: "Software developer",
    description:
      "UK-based Computer Science student building practical web, backend and commercial software projects.",
    icon: UserRound,
  },
  {
    title: "Commercial engineering",
    description:
      "Software Engineer at Cerberus Software Solutions Ltd, working with C#, SQL, PHP, JavaScript, APIs and existing business systems.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Web operations and SEO",
    description:
      "Web Operator at Cromartie Hobbycraft Ltd, improving ecommerce pages, CMS content, analytics and search-focused page structure.",
    icon: FolderKanban,
  },
  {
    title: "Computer Science",
    description: `${education.degree}, ${education.institution}, ${education.dates}.`,
    icon: GraduationCap,
  },
];

const focusAreas = [
  "Backend and full-stack development",
  "Commercial software maintenance",
  "Database-backed business workflows",
  "Ecommerce SEO and CMS implementation",
  "Testing, accessibility and deployment workflows",
];

export default function CvPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recruiter CV"
        title="Charlie Cook CV"
        description="View my software developer CV, including commercial software engineering, web operations, backend development, ecommerce SEO and Computer Science experience."
      >
        <ButtonGroup stackOnMobile>
          <Button asChild size="lg">
            <TrackedAnchor
              href={siteConfig.cvPdfHref}
              download
              eventName="download_cv"
              eventParams={{ location: "cv_page", format: "pdf" }}
            >
              Download CV (PDF)
              <Download className="ml-2 size-4" aria-hidden="true" />
            </TrackedAnchor>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              Contact me
              <Mail className="ml-2 size-4" aria-hidden="true" />
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link href="/projects">
              View my projects
              <FolderKanban className="ml-2 size-4" aria-hidden="true" />
            </Link>
          </Button>

          <Button asChild size="lg" variant="ghost">
            <a
              href={siteConfig.cvPdfHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PDF
              <ExternalLink className="ml-2 size-4" aria-hidden="true" />
            </a>
          </Button>
        </ButtonGroup>
      </PageHeader>

      <PageContent size="lg">
        <PageSections className="space-y-12 md:space-y-14">
          <section aria-labelledby="cv-summary">
            <div className="space-y-6">
              <div className="max-w-3xl space-y-3">
                <h2
                  id="cv-summary"
                  className="text-2xl font-semibold tracking-tight text-foreground"
                >
                  Recruiter summary
                </h2>
                <p className="leading-7 text-muted-foreground">
                  My CV brings together current commercial software experience,
                  web operations work, portfolio project evidence and my BSc
                  Computer Science studies. I am focused on junior, graduate,
                  backend, full-stack and web developer opportunities across the
                  UK, especially remote or hybrid roles.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {cvSummary.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Card key={item.title}>
                      <CardHeader>
                        <div className="flex items-start gap-3">
                          <Icon
                            className="mt-1 size-5 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <div>
                            <CardTitle as="h3">{item.title}</CardTitle>
                            <CardDescription className="mt-1">
                              {item.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          <section aria-labelledby="cv-focus">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="space-y-3">
                <h2
                  id="cv-focus"
                  className="text-2xl font-semibold tracking-tight text-foreground"
                >
                  Experience focus
                </h2>
                <p className="leading-7 text-muted-foreground">
                  The page version gives a quick route into the work behind the
                  PDF. For fuller context, the experience and project pages show
                  the evidence in more detail.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <ul className="grid gap-3 sm:grid-cols-2" role="list">
                    {focusAreas.map((area) => (
                      <li
                        key={area}
                        className="rounded-xl border border-border/70 bg-background/40 px-4 py-3 text-sm font-medium text-foreground"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                    {experienceRoles.map((role) => (
                      <p key={role.company}>
                        <span className="font-medium text-foreground">
                          {role.role}
                        </span>
                        <br />
                        {role.company}, {role.dateLabel}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section aria-labelledby="cv-preview">
            <div className="space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-3xl space-y-3">
                  <h2
                    id="cv-preview"
                    className="text-2xl font-semibold tracking-tight text-foreground"
                  >
                    CV PDF preview
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    The embedded file is the same CV PDF used by the download
                    action. If your browser does not show the preview, use the
                    PDF links below.
                  </p>
                </div>

                <Button asChild variant="outline">
                  <a
                    href={siteConfig.cvPdfHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open PDF in a new tab
                    <ExternalLink className="ml-2 size-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>

              <figure className="overflow-hidden rounded-2xl border border-border bg-card/70">
                <object
                  data={`${siteConfig.cvPdfHref}#view=FitH`}
                  type="application/pdf"
                  title="Preview of Charlie Cook CV PDF"
                  aria-label="Preview of Charlie Cook CV PDF"
                  className="h-[72vh] min-h-[520px] w-full bg-background"
                >
                  <div className="space-y-4 p-6">
                    <p className="leading-7 text-muted-foreground">
                      Your browser cannot display the embedded CV PDF here.
                    </p>
                    <ButtonGroup stackOnMobile>
                      <Button asChild>
                        <a
                          href={siteConfig.cvPdfHref}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open PDF in a new tab
                          <ExternalLink
                            className="ml-2 size-4"
                            aria-hidden="true"
                          />
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <TrackedAnchor
                          href={siteConfig.cvPdfHref}
                          download
                          eventName="download_cv"
                          eventParams={{
                            location: "cv_page_fallback",
                            format: "pdf",
                          }}
                        >
                          Download the CV PDF
                          <Download
                            className="ml-2 size-4"
                            aria-hidden="true"
                          />
                        </TrackedAnchor>
                      </Button>
                    </ButtonGroup>
                  </div>
                </object>
                <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                  Preview of Charlie Cook&apos;s downloadable software developer
                  CV PDF.
                </figcaption>
              </figure>
            </div>
          </section>

          <section aria-labelledby="cv-next-steps">
            <Card className="border-primary/30">
              <CardContent className="grid gap-6 p-6 md:grid-cols-[0.85fr_1.15fr] md:p-8">
                <div className="space-y-3">
                  <h2
                    id="cv-next-steps"
                    className="text-2xl font-semibold tracking-tight text-foreground"
                  >
                    Explore my work
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    Use the CV as the overview, then follow the supporting pages
                    for project evidence, background, contact routes and public
                    profiles.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <Button asChild variant="outline">
                    <Link href="/projects">Projects</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/experience">Experience</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/about">About</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">Contact</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <TrackedAnchor
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      eventName="click_github"
                      eventParams={{ location: "cv_page" }}
                    >
                      GitHub
                      <GitHubIcon className="ml-2 size-4" aria-hidden="true" />
                    </TrackedAnchor>
                  </Button>
                  <Button asChild variant="outline">
                    <TrackedAnchor
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      eventName="click_linkedin"
                      eventParams={{ location: "cv_page" }}
                    >
                      LinkedIn
                      <LinkedInIcon
                        className="ml-2 size-4"
                        aria-hidden="true"
                      />
                    </TrackedAnchor>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </PageSections>
      </PageContent>
    </>
  );
}
