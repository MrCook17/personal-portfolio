import * as React from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageHeaderProps) {
  return (
    <section className={cn("border-b border-border py-16 sm:py-20", className)}>
      <Container size="lg">
        <div className="max-w-3xl space-y-5">
          {eyebrow ? (
            <p className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {description ? (
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}

          {children ? <div className="pt-2">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
