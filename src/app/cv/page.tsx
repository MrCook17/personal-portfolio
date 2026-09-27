import type { Metadata } from "next";
import Image from "next/image";
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
import { education } from "@/content/experience";
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
      "Former Web Operator at Cromartie Hobbycraft Ltd, where I improved ecommerce pages, CMS content, analytics and search-focused page structure.",
    icon: FolderKanban,
  },
  {
    title: "Computer Science",
    description: `${education.degree}, ${education.institution}, ${education.dates}.`,
    icon: GraduationCap,
  },
];

const cvPreviewPages = [
  {
    pageNumber: 1,
    src: "/cv/charlie-cook-cv-page-1-20260927.png",
    width: 1588,
    height: 2245,
    alt: "Page 1 of Charlie Cook's software developer CV",
  },
] as const;

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
              Open PDF in a new tab
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

          <section aria-labelledby="cv-preview">
            <div className="space-y-4">
              <div className="max-w-3xl space-y-3">
                <h2
                  id="cv-preview"
                  className="text-2xl font-semibold tracking-tight text-foreground"
                >
                  CV preview
                </h2>
                <p className="leading-7 text-muted-foreground">
                  The preview is shown as page images for reliable browser
                  support. You can also open or download the original PDF.
                </p>
              </div>

              <ol
                aria-label="Charlie Cook CV pages"
                className="mx-auto max-w-5xl space-y-8"
              >
                {cvPreviewPages.map((page, index) => (
                  <li key={page.src}>
                    <figure className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm shadow-black/15">
                      <div className="bg-white p-2 sm:p-4">
                        <Image
                          src={page.src}
                          alt={page.alt}
                          width={page.width}
                          height={page.height}
                          sizes="(min-width: 1024px) 960px, calc(100vw - 2rem)"
                          priority={index === 0}
                          className="h-auto w-full rounded-sm bg-white"
                        />
                      </div>
                      <figcaption className="border-t border-border bg-card/90 px-4 py-3 text-sm text-muted-foreground">
                        {`Page ${page.pageNumber} of Charlie Cook's CV.`}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section aria-labelledby="cv-next-steps">
            <Card className="border-primary/30">
              <CardContent className="grid gap-6 p-6 md:grid-cols-[0.85fr_1.15fr] md:p-8">
                <div className="max-w-3xl space-y-3">
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
