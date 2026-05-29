import type { MDXComponents } from "mdx/types";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="mt-10 scroll-m-24 text-4xl font-bold tracking-tight text-foreground first:mt-0"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="mt-10 scroll-m-24 border-b border-border pb-3 text-2xl font-semibold tracking-tight text-foreground first:mt-0"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mt-8 scroll-m-24 text-xl font-semibold tracking-tight text-foreground first:mt-0"
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className="mt-6 scroll-m-24 text-lg font-semibold tracking-tight text-foreground first:mt-0"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="mt-4 leading-7 text-muted-foreground first:mt-0"
        {...props}
      />
    ),
    a: ({ className, href = "", ...props }) => {
      const isInternal = href.startsWith("/");

      if (isInternal) {
        return (
          <Link
            href={href}
            className={cn(
              "font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              className,
            )}
            {...props}
          />
        );
      }

      return (
        <a
          href={href}
          className={cn(
            "font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
            className,
          )}
          target="_blank"
          rel="noreferrer"
          {...props}
        />
      );
    },
    ul: (props) => (
      <ul
        className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground first:mt-0"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="mt-4 list-decimal space-y-2 pl-6 text-muted-foreground first:mt-0"
        {...props}
      />
    ),
    li: (props) => <li className="leading-7" {...props} />,
    strong: (props) => (
      <strong className="font-semibold text-foreground" {...props} />
    ),
    blockquote: (props) => (
      <blockquote
        className="mt-6 rounded-2xl border border-border bg-card/70 px-5 py-4 text-muted-foreground shadow-sm first:mt-0"
        {...props}
      />
    ),
    hr: (props) => <hr className="my-10 border-border" {...props} />,
    pre: (props) => (
      <pre
        className="mt-6 overflow-x-auto rounded-2xl border border-border bg-muted/40 p-4 text-sm leading-6"
        tabIndex={0}
        {...props}
      />
    ),
    code: ({ className, ...props }) => (
      <code
        className={cn(
          "rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground",
          className,
        )}
        {...props}
      />
    ),
    table: ({ className, ...props }) => (
      <div
        aria-label="Scrollable table"
        className="mt-6 overflow-x-auto rounded-2xl border border-border/80 bg-card/70 shadow-sm first:mt-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
        role="region"
        tabIndex={0}
      >
        <table
          className={cn(
            "w-full min-w-[42rem] border-collapse text-sm",
            className,
          )}
          {...props}
        />
      </div>
    ),
    thead: ({ className, ...props }) => (
      <thead className={cn("bg-muted/60", className)} {...props} />
    ),
    tbody: ({ className, ...props }) => (
      <tbody
        className={cn("divide-y divide-border/70", className)}
        {...props}
      />
    ),
    tr: ({ className, ...props }) => (
      <tr
        className={cn(
          "transition-colors hover:bg-muted/20 data-[state=selected]:bg-muted",
          className,
        )}
        {...props}
      />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          "border-r border-b border-border/80 px-4 py-3 text-left align-bottom font-semibold text-foreground last:border-r-0",
          className,
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn(
          "border-r border-border/70 px-4 py-3 align-top leading-6 text-muted-foreground last:border-r-0",
          className,
        )}
        {...props}
      />
    ),
    ...components,
  };
}
