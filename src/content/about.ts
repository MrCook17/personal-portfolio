import type { ProfileCard, SkillGroup } from "@/types/experience";

export const aboutIntro = {
  highlights: [
    "UK-based",
    "Computer Science student",
    "Software developer",
    "Commercial web experience",
  ],
  paragraphs: [
    "I’m a UK-based Computer Science student and software developer with commercial experience across software engineering, web operations, SEO, analytics, CMS systems and database-backed development.",
    "My work so far has involved building and maintaining real business software, improving ecommerce pages, debugging existing systems, investigating analytics issues and learning how technical decisions affect users and businesses.",
    "I’m especially interested in practical software: backend APIs, full-stack web applications, maintainable code, database-backed workflows and technical problem-solving. Outside of development, I enjoy climbing, hiking, learning and building things.",
  ],
};

export const currentFocusCards = [
  {
    title: "Building practical full-stack applications",
    description:
      "Using this portfolio and project work to improve how I design, build, document and explain complete web applications.",
    tags: ["Next.js", "TypeScript", "React"],
  },
  {
    title: "Improving backend/API skills",
    description:
      "Focusing on REST APIs, validation, databases, testing, concurrency and clear technical documentation.",
    tags: ["Go", "REST APIs", "SQL"],
  },
  {
    title: "Writing clearer case studies",
    description:
      "Turning projects into evidence-led write-ups that explain the problem, constraints, technical decisions and outcomes.",
    tags: ["Documentation", "Case studies"],
  },
  {
    title: "Strengthening web quality",
    description:
      "Continuing to improve SEO, accessibility, performance and analytics awareness through commercial web work.",
    tags: ["SEO", "Accessibility", "Performance"],
  },
] satisfies ProfileCard[];

export const aboutSkillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Go", "PHP", "C#", "REST APIs", "Node.js"],
  },
  {
    title: "Databases",
    skills: ["SQL", "MySQL", "PostgreSQL", "Database-backed applications"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Vercel", "Supabase"],
  },
  {
    title: "Web & SEO",
    skills: [
      "Technical SEO",
      "Metadata",
      "GA4",
      "Google Search Console",
      "Image optimisation",
    ],
  },
  {
    title: "Commercial software",
    skills: ["CMS workflows", "Debugging", "WinForms", "API integrations"],
  },
] satisfies SkillGroup[];

export const workingStyleCards = [
  {
    title: "Practical problem-solving",
    description:
      "I prefer understanding the real issue first, then choosing the simplest maintainable solution that fits the constraints.",
  },
  {
    title: "Clear communication",
    description:
      "Commercial work has taught me to explain technical progress clearly to both technical and non-technical people.",
  },
  {
    title: "Maintainable code",
    description:
      "I’m still learning, but I try to write code that is understandable, structured and easier to improve later.",
  },
  {
    title: "Learning by building",
    description:
      "I learn best by making projects, reviewing what went wrong and improving the next version.",
  },
  {
    title: "Respecting users",
    description:
      "SEO, accessibility, performance and usability all matter because software is built for people, not just for code reviews.",
  },
] satisfies ProfileCard[];

export const personalInterestCards = [
  {
    title: "Climbing and hiking",
    description:
      "A useful balance outside coding, and a good reminder that steady progress matters more than rushing.",
  },
  {
    title: "Learning",
    description:
      "I enjoy working through new tools, frameworks and technical ideas by applying them to real projects.",
  },
  {
    title: "Building things",
    description:
      "Whether it is a project, a page rebuild or a case study, I like turning rough ideas into something usable.",
  },
] satisfies ProfileCard[];
