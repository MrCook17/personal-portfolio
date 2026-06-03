"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { siteFeatures } from "@/content/site";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      forcedTheme={siteFeatures.enableThemeToggle ? undefined : "dark"}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
