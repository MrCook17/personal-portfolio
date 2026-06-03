import { siteConfig } from "@/content/site";
import type { BlogPost } from "@/types/blog";
import type { Project } from "@/types/project";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type ProfilePageOptions = {
  title: string;
  description: string;
  path: string;
};

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;

const knownProgrammingLanguages = new Set([
  "C#",
  "Go",
  "HTML",
  "JavaScript",
  "PHP",
  "SQL",
  "TypeScript",
]);

export function absoluteUrl(path = "") {
  if (path.startsWith("http")) {
    return path;
  }

  const normalisedPath = path.startsWith("/") ? path : `/${path}`;

  return `${siteConfig.url}${normalisedPath}`;
}

function getSameAsLinks() {
  return [siteConfig.links.github, siteConfig.links.linkedin].filter((link) =>
    link.startsWith("http"),
  );
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl("/images/profile_pic.webp"),
    jobTitle: "Software Developer",
    description: siteConfig.description,
    sameAs: getSameAsLinks(),
    knowsAbout: [
      "Software development",
      "Backend APIs",
      "Full-stack web development",
      "Next.js",
      "TypeScript",
      "Go",
      "C#",
      "SQL",
      "Ecommerce SEO",
      "Web analytics",
    ],
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@id": personId,
    },
    publisher: {
      "@id": personId,
    },
    inLanguage: "en-GB",
  };
}

export function getProfilePageJsonLd({
  title,
  description,
  path,
}: ProfilePageOptions) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}#profile-page`,
    name: title,
    description,
    url,
    inLanguage: "en-GB",
    isPartOf: {
      "@id": websiteId,
    },
    mainEntity: {
      "@id": personId,
    },
  };
}

export function getArticleJsonLd(post: BlogPost) {
  const headline = post.seo?.title ?? post.title;
  const description = post.seo?.description ?? post.description;
  const url = absoluteUrl(post.href);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    url,
    mainEntityOfPage: url,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: {
      "@id": personId,
    },
    publisher: {
      "@id": personId,
    },
    keywords: post.seo?.keywords ?? post.tags,
    inLanguage: "en-GB",
    isPartOf: {
      "@id": websiteId,
    },
  };
}

export function getCreativeWorkJsonLd(project: Project) {
  const path = project.caseStudyUrl ?? `/projects/${project.slug}`;
  const url = absoluteUrl(path);
  const programmingLanguages = project.techStack.filter((item) =>
    knownProgrammingLanguages.has(item),
  );

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#creative-work`,
    name: project.title,
    description: project.seo?.description ?? project.summary,
    url,
    creator: {
      "@id": personId,
    },
    author: {
      "@id": personId,
    },
    genre: project.type,
    about: project.techStack,
    keywords: project.seo?.keywords ?? project.keywords,
    programmingLanguage:
      programmingLanguages.length > 0 ? programmingLanguages : undefined,
    inLanguage: "en-GB",
    isPartOf: {
      "@id": websiteId,
    },
  };
}

export function getBreadcrumbListJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
