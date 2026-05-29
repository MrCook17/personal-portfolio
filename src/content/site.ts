const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const siteFeatures = {
  enableThemeToggle: false,
} as const;

export const siteConfig = {
  name: "Charlie Cook",
  title: "Charlie Cook | Software Developer Portfolio",
  description:
    "UK Computer Science student and software developer portfolio featuring backend projects, commercial web experience, SEO work, and technical case studies.",
  url: siteUrl.replace(/\/$/, ""),
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Experience",
      href: "/experience",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  cvHref: "/Charlie-Cook-CV.pdf",
  links: {
    github: "",
    linkedin: "",
    email: "",
  },
};
