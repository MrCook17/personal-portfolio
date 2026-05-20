import * as React from "react";

import { cn } from "@/lib/utils";

type TagProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

export function Tag({ className, children, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-medium text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
