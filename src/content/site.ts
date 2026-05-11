export const siteConfig = {
  name: "Charlie Cook",
  title: "Charlie Cook | Full-Stack Software Engineer Portfolio",
  description:
    "A full-stack software engineer portfolio showcasing web development, software projects, commercial experience, and technical case studies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
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
};
