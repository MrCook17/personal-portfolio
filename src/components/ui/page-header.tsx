import * as React from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  visual?: React.ReactNode;
  className?: string;
  visualClassName?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  visual,
  className,
  visualClassName,
}: PageHeaderProps) {
  const headerContent = (
    <>
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
    </>
  );

  return (
    <section
      className={cn("border-b border-border py-14 sm:py-16 lg:py-20", className)}
    >
      <Container size="lg">
        {visual ? (
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div className="order-2 max-w-3xl space-y-5 lg:order-1">
              {headerContent}
            </div>

            <div
              className={cn(
                "order-1 flex justify-center lg:order-2 lg:justify-center",
                visualClassName,
              )}
            >
              {visual}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl space-y-5">{headerContent}</div>
        )}
      </Container>
    </section>
  );
}
