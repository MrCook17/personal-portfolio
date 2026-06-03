import * as React from "react";

import { cn } from "@/lib/utils";

type CodeBlockProps = {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
};

export function CodeBlock({
  code,
  language = "txt",
  filename,
  className,
}: CodeBlockProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border border-border/80 bg-card/80",
        className,
      )}
    >
      {(filename || language) && (
        <figcaption className="flex items-center justify-between border-b border-border px-4 py-3 text-xs text-muted-foreground">
          {filename ? <span>{filename}</span> : <span>Code example</span>}
          <span className="tracking-[0.18em] uppercase">{language}</span>
        </figcaption>
      )}

      <pre
        tabIndex={0}
        className="overflow-x-auto p-4 text-sm leading-7 text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
      >
        <code>{code}</code>
      </pre>
    </figure>
  );
}
