export const projectTypes = [
  "Backend/API",
  "Commercial SEO",
  "Software",
  "Analytics",
  "University",
  "Full-stack",
] as const;

export const projectStatuses = [
  "Finished",
  "Ongoing",
  "MVP complete",
  "In active development",
  "Archived",
] as const;

export type ProjectType = (typeof projectTypes)[number];
export type ProjectStatus = (typeof projectStatuses)[number];

export type CaseStudySummary = {
  role: string;
  timeline: string;
  problem: string;
  approach: string;
  outcome: string;
};

export type SeoMetadata = {
  title?: string;
  description?: string;
  keywords?: string[];
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  type: ProjectType;
  status: ProjectStatus;
  featured: boolean;
  launchCaseStudy: boolean;
  priority: number;
  techStack: string[];
  proofPoint: string;
  keywords: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  image?: string;
  imageAlt?: string;
  employerSafeNotes?: string;
  caseStudy?: CaseStudySummary;
  seo?: SeoMetadata;
};
