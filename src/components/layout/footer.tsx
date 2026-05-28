import Link from "next/link";

import { siteConfig } from "@/content/site";

const footerLinks = [
  {
    label: "Privacy",
    href: "/privacy",
  },
  {
    label: "Accessibility",
    href: "/accessibility",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}.
          </p>
          <p>Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.</p>
        </div>

        <nav
          aria-label="Footer links"
          className="flex flex-wrap gap-x-4 gap-y-2"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
