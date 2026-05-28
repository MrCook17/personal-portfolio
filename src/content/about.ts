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
    "I enjoy building practical software that has a clear purpose, especially backend APIs, full-stack web applications and database-backed features. I like working through technical problems and making projects easier to use, maintain and understand. Outside of coding, I enjoy hiking, climbing mountains, indoor rock climbing and watching anime.",
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
      "I enjoy getting outdoors, especially hiking, climbing mountains and indoor rock climbing when I get the chance.",
  },
  {
    title: "Anime",
    description:
      "I enjoy watching anime in my free time. Some of my favourites are Hunter x Hunter, 86 and Jujutsu Kaisen, and I’m currently watching Witch Hat Atelier.",
  },
  {
    title: "Building things",
    description:
      "I enjoy building projects that are genuinely useful to me. It is satisfying seeing an idea turn into something that works and solves a real problem, even in a small way.",
  },
] satisfies ProfileCard[];
