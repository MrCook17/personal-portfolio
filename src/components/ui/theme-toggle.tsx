"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { setTheme } = useTheme();

  function toggleTheme() {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <Button
      variant="outline"
      size="icon"
      type="button"
      aria-label="Toggle light and dark theme"
      className={cn(
        "shrink-0 border-border/80 bg-background/40 text-muted-foreground hover:border-primary/40 hover:bg-accent/60 hover:text-foreground",
        className,
      )}
      onClick={toggleTheme}
    >
      <Sun className="hidden size-4 dark:block" aria-hidden="true" />
      <Moon className="size-4 dark:hidden" aria-hidden="true" />
    </Button>
  );
}
