import * as React from "react";

import { cn } from "@/lib/utils";

export function MdxContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/80 bg-card/70 p-6 leading-7 shadow-sm md:p-8 lg:p-10",
        className,
      )}
      {...props}
    />
  );
}
