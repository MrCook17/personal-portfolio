import Image from "next/image";

import { TrackedAnchor } from "@/components/analytics/tracked-link";
import { HeaderNav } from "@/components/layout/header-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SamePageLink } from "@/components/layout/same-page-link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig, siteFeatures } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <SamePageLink
          href="/"
          className="inline-flex items-center gap-2 font-semibold tracking-tight text-foreground transition hover:text-primary"
        >
          {siteConfig.brandIcon ? (
            <Image
              src={siteConfig.brandIcon}
              alt=""
              width={32}
              height={32}
              className="size-8 shrink-0 rounded-full border border-border/70 bg-card/80 shadow-sm shadow-black/10"
            />
          ) : null}
          {siteConfig.name}
        </SamePageLink>

        <div className="hidden items-center gap-6 md:flex">
          <HeaderNav navItems={siteConfig.navItems} />

          {siteFeatures.enableThemeToggle ? <ThemeToggle /> : null}

          <Button asChild size="sm">
            <TrackedAnchor
              href={siteConfig.cvHref}
              download
              eventName="download_cv"
              eventParams={{ location: "header" }}
            >
              Download CV
            </TrackedAnchor>
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
