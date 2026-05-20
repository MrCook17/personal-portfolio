export type RelatedLink = {
  label: string;
  href: string;
  isExternal?: boolean;
};

export type ExperienceRole = {
  role: string;
  company: string;
  dateLabel: string;
  employmentType: string;
  locationType: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  relatedLinks: RelatedLink[];
};

export type CommercialWorkArea = {
  title: string;
  description: string;
  technologies: string[];
  relatedLink?: RelatedLink;
};

export type Education = {
  degree: string;
  institution: string;
  dates: string;
  summary: string;
  modules: string[];
  coursework: string[];
};

export type ProfileCard = {
  title: string;
  description: string;
  tags?: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};
