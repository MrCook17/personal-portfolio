import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { siteConfig, siteFeatures } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="font-semibold tracking-tight text-foreground transition hover:text-primary"
        >
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {siteFeatures.enableThemeToggle ? <ThemeToggle /> : null}

          <Button asChild size="sm">
            <Link
              href={siteConfig.cvHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </Link>
          </Button>
        </div>

        <MobileNav
          navItems={siteConfig.navItems}
          cvHref={siteConfig.cvHref}
          enableThemeToggle={siteFeatures.enableThemeToggle}
        />
      </div>
    </header>
  );
}
