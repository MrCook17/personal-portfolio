import * as React from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type PageContentProps = React.ComponentProps<typeof Container> & {
  topSpacing?: "default" | "none";
  bottomSpacing?: "default" | "compact" | "none";
};

const topSpacingClasses = {
  default: "mt-10 md:mt-12",
  none: "",
};

const bottomSpacingClasses = {
  default: "pb-20 md:pb-24",
  compact: "pb-16 md:pb-20",
  none: "",
};

export function PageContent({
  className,
  topSpacing = "default",
  bottomSpacing = "default",
  ...props
}: PageContentProps) {
  return (
    <Container
      className={cn(
        topSpacingClasses[topSpacing],
        bottomSpacingClasses[bottomSpacing],
        className,
      )}
      {...props}
    />
  );
}

export function PageSections({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("space-y-16 md:space-y-20", className)} {...props} />
  );
}

export function PageSection({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return <section className={cn("py-16 sm:py-20", className)} {...props} />;
}
