import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  Search,
  Server,
} from "lucide-react";

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

const links = {
  projects: "/projects",
  experience: "/experience",
  contact: "/contact",
  cv: "/Charlie-Cook-CV.pdf",
  github: "https://github.com/MrCook17",
  linkedin: "https://www.linkedin.com/in/charles-james-cook/",
  email: "mailto:charlie_cook321@hotmail.com",
  goApiRepo: "https://github.com/MrCook17/URL-Health-Checker-API",
  tieDyePage:
    "https://www.cromartiehobbycraft.co.uk/AdditionalDepartments/Header-Content/Tie-Dye-Techniques",
};

const trustIndicators = [
  {
    title: "Computer Science student",
    detail: "Keele University · Software Engineering pathway",
    icon: GraduationCap,
  },
  {
    title: "Software Engineer",
    detail: "Cerberus Software Solutions · C#, SQL, PHP, APIs",
    icon: Code2,
  },
  {
    title: "Web Operator",
    detail: "Cromartie Hobbycraft · SEO, analytics, CMS, web content",
    icon: Search,
  },
  {
    title: "UK role focus",
    detail: "Open to remote, hybrid, junior and graduate opportunities",
    icon: BriefcaseBusiness,
  },
];

const featuredProjects = [
  {
    title: "Go Website Health Check REST API",
    type: "Backend/API",
    status: "Finished",
    summary:
      "A Go REST API that checks website availability, validates URLs, handles timeouts, stores completed jobs, and returns structured JSON results.",
    proof:
      "Shows REST API design, goroutines, timeout handling, tests, benchmarks, Postman evidence, and GitHub documentation.",
    techStack: ["Go", "REST API", "JSON", "Postman", "Testing", "Benchmarks"],
    primaryHref: links.projects,
    primaryLabel: "View project details",
    secondaryHref: links.goApiRepo,
    secondaryLabel: "GitHub",
    secondaryExternal: true,
  },
  {
    title: "Cromartie Tie Dye Techniques Page Rebuild",
    type: "Commercial SEO",
    status: "Finished",
    summary:
      "A public ecommerce page rebuild focused on SEO, content structure, internal linking, layout improvements, and CMS-friendly HTML/CSS.",
    proof:
      "Shows commercial web work, keyword research, ecommerce content planning, UX improvements, and practical CMS constraints.",
    techStack: ["HTML", "CSS", "CMS", "SEO", "Ubersuggest", "Content"],
    primaryHref: links.projects,
    primaryLabel: "View project details",
    secondaryHref: links.tieDyePage,
    secondaryLabel: "Live page",
    secondaryExternal: true,
  },
  {
    title: "Internal Records Management Desktop Application",
    type: "Commercial Software",
    status: "Ongoing",
    summary:
      "An anonymised commercial desktop software project involving C#, WinForms, SQL, debugging, and database-backed business workflows.",
    proof:
      "Shows commercial software engineering, existing codebase work, database-backed features, and real staff workflow support.",
    techStack: ["C#", "WinForms", "SQL", "Debugging", "Business Software"],
    primaryHref: links.projects,
    primaryLabel: "View project details",
  },
  {
    title: "Google Analytics Tracking Drop Investigation",
    type: "Analytics",
    status: "Finished",
    summary:
      "A debugging and analytics investigation into a sudden traffic drop, comparing GA4, Search Console, downtime, and tracking behaviour.",
    proof:
      "Shows problem-solving, technical investigation, data comparison, business awareness, and clear escalation.",
    techStack: ["GA4", "Search Console", "Analytics", "Debugging", "SEO"],
    primaryHref: links.projects,
    primaryLabel: "View project details",
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Cerberus Software Solutions",
    dates: "December 2024 – Present",
    location: "Part-time · Hybrid",
    summary:
      "Developing and maintaining commercial software and web projects across existing client systems.",
    bullets: [
      "Worked with C#, WinForms, SQL, PHP, JavaScript, APIs, HTML, CSS, Git, and debugging.",
      "Contributed to accountancy, ecommerce, and internal business software projects.",
      "Built experience reading existing codebases and working with real client requirements.",
    ],
    techStack: ["C#", "WinForms", "SQL", "PHP", "JavaScript", "Git"],
  },
  {
    role: "Web Operator",
    company: "Cromartie Hobbycraft",
    dates: "July 2025 – Present",
    location: "Part-time · Mainly remote",
    summary:
      "Improving SEO, analytics, content quality, and ecommerce pages across a live business website.",
    bullets: [
      "Optimised metadata, product descriptions, image SEO, internal links, and structured page content.",
      "Used Google Analytics, Google Search Console, Ubersuggest, Squoosh, Gob2b CMS, HTML, CSS, and JavaScript.",
      "Supported a live ecommerce website with thousands of products and practical commercial constraints.",
    ],
    techStack: ["SEO", "GA4", "GSC", "HTML", "CSS", "JavaScript", "CMS"],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Go",
      "PHP",
      "C#",
      "REST APIs",
      "Node.js",
      "Next.js Route Handlers",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL", "MySQL", "PostgreSQL", "Database-backed applications"],
  },
  {
    title: "Tools",
    icon: BriefcaseBusiness,
    skills: ["Git", "GitHub", "Postman", "Vercel", "Supabase", "VS Code"],
  },
  {
    title: "Web & SEO",
    icon: Search,
    skills: [
      "Technical SEO",
      "Google Analytics",
      "Search Console",
      "Metadata",
      "Keyword research",
      "Image optimisation",
    ],
  },
];

const caseStudyTeasers = [
  {
    title: "Go REST API case study",
    description:
      "A backend-focused case study covering endpoint design, validation, concurrency, timeout handling, testing, benchmarks, and technical trade-offs.",
    tags: ["Go", "REST API", "Concurrency", "Testing"],
  },
  {
    title: "Commercial SEO/frontend rebuild",
    description:
      "A public ecommerce case study covering page structure, CMS constraints, keyword research, internal linking, layout decisions, and user experience.",
    tags: ["SEO", "HTML", "CSS", "CMS"],
  },
];

type BlogPost = {
  title: string;
  description: string;
  href: string;
  date: string;
  readingTime: string;
  tags: string[];
};

const latestPosts: BlogPost[] = [];

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.87c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.29 9.29 0 0 1 12 7c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9v2.75c0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.25h4v11.5H3V9.25Zm6.25 0h3.83v1.57h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12v5.87h-4v-5.2c0-1.24-.02-2.83-1.73-2.83-1.73 0-2 1.35-2 2.74v5.29h-4V9.25Z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProjects />
      <ExperiencePreview />
      <SkillsOverview />
      <CaseStudyTeaser />
      <LatestBlogNotes />
      <ContactCTA />
    </>
  );
}

function Hero() {
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
            <div className="rounded-2xl border bg-card/60 px-4 py-3">
              Commercial software experience
            </div>
            <div className="rounded-2xl border bg-card/60 px-4 py-3">
              Backend/API project evidence
            </div>
            <div className="rounded-2xl border bg-card/60 px-4 py-3">
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
    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <Button asChild size="lg">
        <Link href={links.projects}>
          View projects
          <ArrowRight className="ml-2 size-4" aria-hidden="true" />
        </Link>
      </Button>

      <Button asChild size="lg" variant="outline">
        <Link href={links.cv}>
          Download CV
          <Download className="ml-2 size-4" aria-hidden="true" />
        </Link>
      </Button>

      <Button asChild size="lg" variant="ghost">
        <Link href={links.contact}>Contact me</Link>
      </Button>

      <div className="flex items-center gap-2 pt-2 sm:pt-0">
        <Button asChild size="icon" variant="ghost">
          <Link
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <GitHubIcon className="size-5" aria-hidden="true" />
          </Link>
        </Button>

        <Button asChild size="icon" variant="ghost">
          <Link
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon className="size-5" aria-hidden="true" />
          </Link>
        </Button>

        <Button asChild size="icon" variant="ghost">
          <Link href={links.email} aria-label="Email Charlie Cook">
            <Mail className="size-5" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

function TrustBar() {
  return (
    <section className="py-8">
      <Container size="lg">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title} className="bg-card/70">
                <CardHeader className="space-y-3">
                  <div className="flex size-10 items-center justify-center rounded-xl border bg-background/60">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {item.detail}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function FeaturedProjects() {
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
                    Proof point
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

function ExperiencePreview() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="experience-preview">
      <Container size="lg">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Commercial experience"
            title="Software engineering and ecommerce web experience"
            description="A snapshot of my current commercial roles across software development, existing codebases, SEO, analytics, CMS workflows, and business-facing web work."
            align="left"
          />

          <Button asChild variant="outline" className="w-fit">
            <Link href={links.experience}>
              View full experience
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {experience.map((role) => (
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
    </section>
  );
}

function SkillsOverview() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="skills-overview">
      <Container size="lg">
        <SectionHeading
          eyebrow="Technical skills"
          title="Practical skills grouped by how I use them"
          description="No percentage bars or inflated ratings — just the tools, languages and workflows I use across projects, university work and commercial experience."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <Card key={group.title} className="bg-card/70">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl border bg-background/60">
                      <Icon
                        className="size-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <CardTitle className="text-lg">{group.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function CaseStudyTeaser() {
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
                <Link href={links.projects}>
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

function LatestBlogNotes() {
  if (latestPosts.length < 2) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20" aria-labelledby="latest-notes">
      <Container size="lg">
        <SectionHeading
          eyebrow="Latest notes"
          title="Software development notes"
          description="Short technical notes on project building, backend development, SEO, analytics, debugging and what I am learning."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <Card key={post.title} className="bg-card/70">
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {post.date} · {post.readingTime}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button asChild variant="outline">
                  <Link href={post.href}>Read post</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="contact-cta">
      <Container size="lg">
        <div className="relative overflow-hidden rounded-3xl border bg-card/80 p-8 text-center sm:p-12">
          <div className="absolute top-0 left-1/2 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

          <Badge variant="outline">Open to future opportunities</Badge>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Interested in working together?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
            I’m building towards junior software developer, backend developer,
            full-stack developer, web developer, and graduate software
            engineering roles across the UK, especially remote and hybrid
            opportunities.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={links.contact}>
                Contact me
                <Mail className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href={links.cv}>
                Download CV
                <Download className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="ghost">
              <Link href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
                {/* <Linkedin className="ml-2 size-4" aria-hidden="true" /> */}
                <LinkedInIcon className="size-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
