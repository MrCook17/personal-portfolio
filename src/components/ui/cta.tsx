import Link from "next/link";

import { Button, ButtonGroup } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageSection } from "@/components/ui/page-layout";

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
    <PageSection className={className}>
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 shadow-sm sm:px-10">
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

            <ButtonGroup stackOnMobile className="pt-2">
              <Button asChild size="lg">
                <Link href={primaryHref}>{primaryLabel}</Link>
              </Button>

              {secondaryLabel && secondaryHref ? (
                <Button asChild size="lg" variant="outline">
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              ) : null}
            </ButtonGroup>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
