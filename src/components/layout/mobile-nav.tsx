"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { SamePageLink } from "@/components/layout/same-page-link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { isActiveNavigationPath, type NavigationItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  navItems: NavigationItem[];
  cvHref: string;
  enableThemeToggle: boolean;
};

const mobileLinkClassName =
  "rounded-xl px-3 py-2 text-base font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none";

export function MobileNav({
  navItems,
  cvHref,
  enableThemeToggle,
}: MobileNavProps) {
  const menuId = useId();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openedPathname, setOpenedPathname] = useState(pathname);

  const isOpen = isMenuOpen && openedPathname === pathname;

  function toggleMenu() {
    if (isOpen) {
      setIsMenuOpen(false);
      return;
    }

    setOpenedPathname(pathname);
    setIsMenuOpen(true);
  }

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <Button
        variant="outline"
        size="icon"
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-controls={menuId}
        aria-expanded={isOpen}
        className="border-border/80 bg-background/40 hover:border-primary/40 hover:bg-accent/60"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </Button>

      {isOpen ? (
        <div
          id={menuId}
          className="absolute inset-x-0 top-full border-b border-border/70 bg-background/95 shadow-lg shadow-black/10 backdrop-blur md:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-6xl flex-col px-4 py-5"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = isActiveNavigationPath(pathname, item.href);

                return (
                  <SamePageLink
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      mobileLinkClassName,
                      isActive
                        ? "bg-primary/20 text-foreground ring-1 ring-primary/25"
                        : "text-muted-foreground hover:bg-primary/15 hover:text-foreground",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </SamePageLink>
                );
              })}
            </div>

            <div className="mt-4 space-y-4 border-t border-border/70 pt-4">
              {enableThemeToggle ? (
                <div className="flex items-center justify-between px-1">
                  <span className="text-sm font-medium text-muted-foreground">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
              ) : null}

              <Button asChild className="w-full">
                <Link
                  href={cvHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Download CV
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
