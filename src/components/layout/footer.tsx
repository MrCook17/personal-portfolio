import Link from "next/link";

import { TrackedAnchor } from "@/components/analytics/tracked-link";
import { siteConfig } from "@/content/site";

const pageLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/MrCook17",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/charles-james-cook/",
  },
  {
    label: "Email",
    href: "/contact",
  },
];

const builtWith = ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Supabase"];

const linkClassName =
  "rounded-sm transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/80">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-2">
            <p className="text-base font-semibold text-foreground">
              {siteConfig.name}
            </p>
            <p className="text-sm text-muted-foreground">
              Software Developer Portfolio
            </p>
          </div>

          <nav aria-label="Footer page links" className="space-y-3">
            <h2 className="text-sm font-semibold text-foreground">Pages</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer resource links" className="space-y-3">
            <h2 className="text-sm font-semibold text-foreground">Resources</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  {link.href === "/sitemap.xml" ? (
                    <a href={link.href} className={linkClassName}>
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className={linkClassName}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social and contact links" className="space-y-3">
            <h2 className="text-sm font-semibold text-foreground">Connect</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {socialLinks.map((link) => {
                const isExternal = link.href.startsWith("http");

                return (
                  <li key={link.href}>
                    {isExternal ? (
                      <TrackedAnchor
                        href={link.href}
                        className={linkClassName}
                        target="_blank"
                        rel="noreferrer"
                        eventName={
                          link.label === "GitHub"
                            ? "click_github"
                            : "click_linkedin"
                        }
                        eventParams={{
                          location: "footer",
                        }}
                      >
                        {link.label}
                      </TrackedAnchor>
                    ) : (
                      <Link href={link.href} className={linkClassName}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <p>Built with {builtWith.join(", ")}.</p>
        </div>
      </div>
    </footer>
  );
}
