import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Go Website Health Check REST API",
    slug: "go-website-health-check-api",
    summary:
      "A Go REST API that checks website availability, handles timeouts, stores results, and returns structured JSON health check data.",
    type: "Backend/API",
    status: "Finished",
    featured: true,
    launchCaseStudy: true,
    priority: 1,
    techStack: ["Go", "REST API", "JSON", "Postman", "Testing", "Benchmarks"],
    proofPoint:
      "REST API with concurrent URL checks, timeout handling, validation, tests, benchmarks, and race detector evidence.",
    keywords: [
      "go",
      "golang",
      "api",
      "backend",
      "rest",
      "concurrency",
      "testing",
      "benchmarks",
      "postman",
      "json",
      "timeouts",
      "race detector",
    ],
    githubUrl: "https://github.com/MrCook17/URL-Health-Checker-API",
    caseStudyUrl: "/projects/go-website-health-check-api",
    caseStudy: {
      role: "Individual backend developer",
      timeline: "University coursework project",
      problem:
        "Manually checking website availability is slow, inconsistent, and difficult to repeat across multiple URLs.",
      approach:
        "Built a Go REST API with URL validation, concurrent checks, timeout handling, in-memory result storage, tests, benchmarks, and Postman evidence.",
      outcome:
        "Created a finished backend/API project that demonstrates REST design, concurrency, practical error handling, and technical documentation.",
    },
  },
  {
    title: "Cromartie Tie Dye Techniques Page Rebuild",
    slug: "cromartie-tie-dye-page-rebuild",
    summary:
      "A public-facing ecommerce page rebuild focused on SEO, content structure, layout, internal linking, and CMS-friendly HTML/CSS.",
    type: "Commercial SEO",
    status: "Finished",
    featured: true,
    launchCaseStudy: true,
    priority: 2,
    techStack: ["HTML", "CSS", "CMS", "SEO", "Ubersuggest", "Internal Linking"],
    proofPoint:
      "Commercial SEO/frontend rebuild completed within CMS constraints on a live ecommerce website.",
    keywords: [
      "cromartie",
      "seo",
      "ecommerce",
      "html",
      "css",
      "cms",
      "internal links",
      "tie dye",
      "keyword research",
      "content structure",
    ],
    liveUrl:
      "https://www.cromartiehobbycraft.co.uk/Catalogue/Arts-Crafts/Marbling-Dyes-Tie-Dye/Tie-Dye-Techniques",
    caseStudyUrl: "/projects/cromartie-tie-dye-page-rebuild",
    employerSafeNotes:
      "Use public page screenshots only. Do not show CMS admin screenshots unless approved.",
    caseStudy: {
      role: "Web Operator",
      timeline: "Commercial website work",
      problem:
        "The page needed stronger SEO, clearer structure, better layout, improved content, images, and internal links.",
      approach:
        "Researched keywords, reworked page content, rebuilt the public-facing layout, improved internal linking, and worked within CMS styling restrictions.",
      outcome:
        "Produced a stronger ecommerce content page that better supports search visibility, usability, and commercial navigation.",
    },
  },
  {
    title: "Google Analytics Tracking Drop Investigation",
    slug: "analytics-tracking-drop-investigation",
    summary:
      "A commercial analytics investigation into a sudden traffic drop, comparing GA4, Search Console, tracking behaviour, and likely causes.",
    type: "Analytics",
    status: "Finished",
    featured: true,
    launchCaseStudy: true,
    priority: 3,
    techStack: [
      "GA4",
      "Google Search Console",
      "Analytics",
      "Debugging",
      "SEO",
    ],
    proofPoint:
      "Debugging case study showing data comparison, hypothesis testing, escalation, and business-aware communication.",
    keywords: [
      "analytics",
      "ga4",
      "google analytics",
      "search console",
      "debugging",
      "tracking",
      "cookie consent",
      "seo",
      "traffic drop",
    ],
    caseStudyUrl: "/projects/analytics-tracking-drop-investigation",
    employerSafeNotes:
      "Use anonymised diagrams or written explanation only. Do not expose private analytics screenshots or confidential traffic data.",
    caseStudy: {
      role: "Web Operator",
      timeline: "Commercial analytics investigation",
      problem:
        "Google Analytics traffic appeared to drop heavily, making it unclear whether website performance had fallen or tracking had broken.",
      approach:
        "Compared GA4, Search Console, website context, downtime history, and cookie consent/tracking behaviour before escalating the likely cause.",
      outcome:
        "Showed a structured debugging process based on multiple data sources rather than assuming the analytics drop reflected real user traffic.",
    },
  },
  {
    title: "Internal Records Management Desktop Application",
    slug: "internal-records-management-desktop-application",
    summary:
      "An anonymised commercial desktop software case study covering database-backed workflows, records, jobs, customers, invoices, and staff processes.",
    type: "Software",
    status: "Ongoing",
    featured: true,
    launchCaseStudy: true,
    priority: 4,
    techStack: ["C#", "WinForms", "SQL", "Database Work", "Debugging"],
    proofPoint:
      "Commercial software engineering work involving C#, WinForms, SQL, existing codebases, and real business workflows.",
    keywords: [
      "csharp",
      "c#",
      "winforms",
      "sql",
      "desktop application",
      "commercial software",
      "database",
      "debugging",
      "records management",
    ],
    caseStudyUrl: "/projects/internal-records-management-desktop-application",
    employerSafeNotes:
      "Use anonymised wording, abstract diagrams, and generic UI mockups only. Do not show customer data, internal database screenshots, or private client details.",
    caseStudy: {
      role: "Software Engineer",
      timeline: "Ongoing commercial software work",
      problem:
        "Staff needed database-backed software to manage business records and workflows more efficiently.",
      approach:
        "Worked on a C# WinForms and SQL desktop application, contributing to features, debugging, existing code, and data-backed workflows.",
      outcome:
        "Gained commercial software experience with real business requirements, existing systems, database-backed features, and confidentiality constraints.",
    },
  },
  {
    title: "Cromartie Product Page SEO Optimisation",
    slug: "cromartie-product-page-seo-optimisation",
    summary:
      "Ongoing ecommerce SEO work across product pages, including metadata, descriptions, image SEO, internal linking, and page content improvements.",
    type: "Commercial SEO",
    status: "Ongoing",
    featured: false,
    launchCaseStudy: false,
    priority: 5,
    techStack: ["SEO", "CMS", "GA4", "Search Console", "HTML", "Image SEO"],
    proofPoint:
      "Ongoing commercial responsibility across a large ecommerce website with thousands of products.",
    keywords: [
      "seo",
      "ecommerce",
      "product pages",
      "metadata",
      "image seo",
      "google analytics",
      "search console",
      "cms",
      "cromartie",
    ],
    liveUrl: "https://www.cromartiehobbycraft.co.uk/",
  },
  {
    title: "Shopify API Integration",
    slug: "shopify-api-integration",
    summary:
      "A commercial API integration example involving researching Shopify API documentation and applying it within workplace development tasks.",
    type: "Backend/API",
    status: "Finished",
    featured: false,
    launchCaseStudy: false,
    priority: 6,
    techStack: [
      "Shopify API",
      "PHP",
      "JavaScript",
      "API Integration",
      "Debugging",
    ],
    proofPoint:
      "Workplace API integration experience involving external documentation, implementation constraints, and commercial development.",
    keywords: [
      "shopify",
      "api",
      "integration",
      "php",
      "javascript",
      "external api",
      "commercial development",
    ],
    employerSafeNotes:
      "Avoid private client names, endpoints, credentials, business logic, or internal implementation details.",
  },
];

export const sortedProjects = [...projects].sort(
  (a, b) => a.priority - b.priority,
);

export const featuredProjects = sortedProjects.filter(
  (project) => project.featured,
);

export const caseStudyProjects = sortedProjects.filter(
  (project) => project.launchCaseStudy && project.caseStudyUrl,
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectTech() {
  return Array.from(
    new Set(projects.flatMap((project) => project.techStack)),
  ).sort((a, b) => a.localeCompare(b));
}
