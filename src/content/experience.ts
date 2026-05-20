import type {
  CommercialWorkArea,
  Education,
  ExperienceRole,
} from "@/types/experience";

export const experienceRoles = [
  {
    role: "Software Engineer",
    company: "Cerberus Software Solutions Ltd",
    dateLabel: "December 2024 – Present",
    employmentType: "Part-time",
    locationType: "Hybrid",
    summary:
      "Working on commercial software and web projects across desktop applications, database-backed workflows, API integrations and existing client codebases.",
    bullets: [
      "Develop and maintain commercial software using C#, WinForms, SQL, PHP, JavaScript, HTML and CSS.",
      "Work with database-backed business workflows covering records, jobs, customers, invoices and operational data.",
      "Debug existing codebases, investigate issues and implement updates across live business systems.",
      "Research and apply third-party APIs, including Shopify-related integration work.",
      "Document sensitive commercial work through anonymised case studies instead of exposing private client data, credentials or internal screenshots.",
    ],
    technologies: [
      "C#",
      "WinForms",
      "SQL",
      "PHP",
      "JavaScript",
      "APIs",
      "HTML",
      "CSS",
      "Git",
      "Debugging",
    ],
    relatedLinks: [
      {
        label: "View anonymised software case study",
        href: "/projects/internal-records-management-desktop-application",
      },
      {
        label: "Browse projects",
        href: "/projects",
      },
    ],
  },
  {
    role: "Web Operator",
    company: "Cromartie Hobbycraft Ltd",
    dateLabel: "July 2025 – Present",
    employmentType: "Part-time",
    locationType: "Mainly remote",
    summary:
      "Improving a live ecommerce website through SEO, analytics, CMS content, front-end page updates, image optimisation and technical problem-solving.",
    bullets: [
      "Optimise public ecommerce pages across metadata, product descriptions, image SEO, internal linking and page structure.",
      "Use Google Analytics, Google Search Console and keyword research tools to investigate search visibility, indexing and performance issues.",
      "Build and adjust CMS page content with HTML, CSS and JavaScript within Gob2b CMS constraints.",
      "Optimise images and page content for usability, search visibility and commercial clarity.",
      "Support a large ecommerce catalogue of 4,000+ products while keeping page improvements consistent and maintainable.",
    ],
    technologies: [
      "Gob2b CMS",
      "HTML",
      "CSS",
      "JavaScript",
      "GA4",
      "Google Search Console",
      "Ubersuggest",
      "Squoosh",
      "Technical SEO",
      "Image SEO",
    ],
    relatedLinks: [
      {
        label: "View SEO rebuild case study",
        href: "/projects/cromartie-tie-dye-page-rebuild",
      },
      {
        label: "View analytics investigation",
        href: "/projects/analytics-tracking-drop-investigation",
      },
      {
        label: "Visit Cromartie Hobbycraft",
        href: "https://www.cromartiehobbycraft.co.uk",
        isExternal: true,
      },
    ],
  },
] satisfies ExperienceRole[];

export const commercialWorkAreas = [
  {
    title: "Backend and database-backed software",
    description:
      "Commercial development work involving C#, WinForms, SQL, records, invoices, jobs, customer data workflows and existing business systems.",
    technologies: ["C#", "WinForms", "SQL", "Business workflows"],
    relatedLink: {
      label: "View case study",
      href: "/projects/internal-records-management-desktop-application",
    },
  },
  {
    title: "CMS and ecommerce SEO work",
    description:
      "Public-facing ecommerce work covering page structure, product content, metadata, image SEO, internal linking and CMS layout constraints.",
    technologies: ["Technical SEO", "CMS", "HTML", "CSS"],
    relatedLink: {
      label: "View case study",
      href: "/projects/cromartie-tie-dye-page-rebuild",
    },
  },
  {
    title: "Debugging and maintenance",
    description:
      "Experience investigating issues in existing codebases, fixing bugs, updating live systems and working carefully around commercial requirements.",
    technologies: ["Debugging", "Git", "PHP", "JavaScript"],
    relatedLink: {
      label: "Browse projects",
      href: "/projects",
    },
  },
  {
    title: "Analytics and technical SEO investigation",
    description:
      "Problem-solving work using GA4 and Search Console to compare data sources, investigate tracking changes and avoid jumping to assumptions.",
    technologies: ["GA4", "Search Console", "Analytics", "SEO"],
    relatedLink: {
      label: "View investigation",
      href: "/projects/analytics-tracking-drop-investigation",
    },
  },
  {
    title: "API integrations",
    description:
      "Workplace development involving third-party API research, reading technical documentation and applying unfamiliar services to real projects.",
    technologies: ["APIs", "Shopify API", "PHP", "JavaScript"],
    relatedLink: {
      label: "Browse related work",
      href: "/projects",
    },
  },
] satisfies CommercialWorkArea[];

export const education = {
  degree: "BSc Computer Science (Software Engineering)",
  institution: "Keele University",
  dates: "2024–2027",
  summary:
    "Studying software engineering, programming, databases, algorithms and web technologies while building portfolio projects around backend APIs, commercial web work and practical software development.",
  modules: [
    "Object-Oriented Programming",
    "Algorithms",
    "Web Technologies",
    "Database Systems",
    "Software Engineering",
  ],
  coursework: [
    "Go Website Health Check REST API",
    "Software Engineering group project focused on SCRUM and teamwork",
  ],
} satisfies Education;
