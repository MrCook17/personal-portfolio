import Link from "next/link";
import { Download, Mail } from "lucide-react";

import { LinkedInIcon } from "@/components/icons/brand-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { homeLinks } from "@/content/home";

export function ContactCtaSection() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="contact-cta">
      <Container size="lg">
        <div className="relative overflow-hidden rounded-3xl border bg-card/80 p-8 text-center sm:p-12">
          <div className="absolute top-0 left-1/2 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

          <Badge variant="outline">Open to future opportunities</Badge>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Interested in working together?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
            I’m building towards junior software developer, backend developer,
            full-stack developer, web developer, and graduate software
            engineering roles across the UK, especially remote and hybrid
            opportunities.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={homeLinks.contact}>
                Contact me
                <Mail className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link
                href={homeLinks.cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
                <Download className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="ghost">
              <Link href={homeLinks.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
                <LinkedInIcon className="ml-2 size-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
