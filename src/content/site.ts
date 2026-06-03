const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const siteFeatures = {
  enableThemeToggle: false,
} as const;

export const siteConfig = {
  name: "Charlie Cook",
  brandIcon: "/icons/cc-logo-128.webp",
  title: "Charlie Cook | Software Developer Portfolio",
  description:
    "UK software developer and Computer Science student with commercial software, backend, full-stack, web operations and SEO experience.",
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
    github: "https://github.com/MrCook17",
    linkedin: "https://www.linkedin.com/in/charles-james-cook/",
    email: "mailto:charlie_cook321@hotmail.com",
  },
};
