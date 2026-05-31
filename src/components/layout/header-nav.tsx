"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { isActiveNavigationPath, type NavigationItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type HeaderNavProps = {
  navItems: NavigationItem[];
};

export function HeaderNav({ navItems }: HeaderNavProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className="flex items-center gap-1 text-sm"
    >
      {navItems.map((item) => {
        const isActive = isActiveNavigationPath(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-full px-3 py-2 font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
              isActive
                ? "bg-primary/15 px-4 text-foreground shadow-[0_0_18px_var(--glow)] ring-1 ring-primary/25 hover:bg-primary/20"
                : "text-muted-foreground hover:bg-primary/15 hover:text-foreground",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
