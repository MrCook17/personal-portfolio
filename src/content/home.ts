import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Search,
  Server,
} from "lucide-react";

export const homeLinks = {
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

export type TrustIndicator = {
  title: string;
  detail: string;
  icon: LucideIcon;
};

export const trustIndicators: TrustIndicator[] = [
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

export type FeaturedProject = {
  title: string;
  type: string;
  status: string;
  summary: string;
  proof: string;
  techStack: string[];
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  secondaryExternal?: boolean;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Go Website Health Check REST API",
    type: "Backend/API",
    status: "Finished",
    summary:
      "A Go REST API that checks website availability, validates URLs, handles timeouts, stores completed jobs, and returns structured JSON results.",
    proof:
      "Shows REST API design, goroutines, timeout handling, tests, benchmarks, Postman evidence, and GitHub documentation.",
    techStack: ["Go", "REST API", "JSON", "Postman", "Testing", "Benchmarks"],
    primaryHref: homeLinks.projects,
    primaryLabel: "View project details",
    secondaryHref: homeLinks.goApiRepo,
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
    primaryHref: homeLinks.projects,
    primaryLabel: "View project details",
    secondaryHref: homeLinks.tieDyePage,
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
    primaryHref: homeLinks.projects,
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
    primaryHref: homeLinks.projects,
    primaryLabel: "View project details",
  },
];

export type ExperiencePreview = {
  role: string;
  company: string;
  dates: string;
  location: string;
  summary: string;
  bullets: string[];
  techStack: string[];
};

export const experiencePreview: ExperiencePreview[] = [
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

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
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

export type CaseStudyTeaser = {
  title: string;
  description: string;
  tags: string[];
};

export const caseStudyTeasers: CaseStudyTeaser[] = [
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

export type BlogPostPreview = {
  title: string;
  description: string;
  href: string;
  date: string;
  readingTime: string;
  tags: string[];
};

export const latestBlogPosts: BlogPostPreview[] = [
  {
    title: "Building my portfolio with Next.js and TypeScript",
    description:
      "A short write-up on how I started building this portfolio, why I chose Next.js, and what I learned from setting up the project structure.",
    href: "/blog",
    date: "May 2026",
    readingTime: "5 min read",
    tags: ["Next.js", "TypeScript", "Portfolio Build"],
  },
  {
    title: "What I learned from building a Go REST API",
    description:
      "Notes from creating a website health check API with URL validation, JSON responses, timeout handling, concurrency, tests, and benchmarks.",
    href: "/blog",
    date: "May 2026",
    readingTime: "7 min read",
    tags: ["Go", "REST API", "Backend", "Testing"],
  },
  {
    title: "Improving ecommerce SEO pages in a real CMS",
    description:
      "A practical note on improving metadata, product descriptions, page structure, image SEO, and internal links within CMS limitations.",
    href: "/blog",
    date: "May 2026",
    readingTime: "6 min read",
    tags: ["SEO", "Ecommerce", "CMS", "Analytics"],
  },
];
