import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type CTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
};

export function CTA({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  className,
}: CTAProps) {
  return (
    <section className={cn("py-16 sm:py-20", className)}>
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 shadow-sm sm:px-10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(155,109,255,0.22),transparent_35%)]" />

          <div className="max-w-3xl space-y-5">
            {eyebrow ? (
              <p className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
                {eyebrow}
              </p>
            ) : null}

            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>

            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              {description}
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button asChild size="lg">
                <Link href={primaryHref}>{primaryLabel}</Link>
              </Button>

              {secondaryLabel && secondaryHref ? (
                <Button asChild size="lg" variant="outline">
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
