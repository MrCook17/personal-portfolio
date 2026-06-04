import Link from "next/link";
import { Download, Mail } from "lucide-react";

import { TrackedAnchor } from "@/components/analytics/tracked-link";
import { LinkedInIcon } from "@/components/icons/brand-icons";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonGroup } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageSection } from "@/components/ui/page-layout";
import { homeLinks } from "@/content/home";

export function ContactCtaSection() {
  return (
    <PageSection aria-labelledby="contact-cta">
      <Container size="lg">
        <div className="relative overflow-hidden rounded-3xl border bg-card/80 p-8 text-center sm:p-12">
          <Badge variant="outline">Open to future opportunities</Badge>

          <h2
            id="contact-cta"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Interested in working together?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
            I’m building towards junior software developer, backend developer,
            full-stack developer, web developer, and graduate software
            engineering roles across the UK, especially remote and hybrid
            opportunities.
          </p>

          <ButtonGroup align="center" stackOnMobile className="mt-8">
            <Button asChild size="lg">
              <Link href={homeLinks.contact}>
                Contact me
                <Mail className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <TrackedAnchor
                href={homeLinks.cv}
                download
                eventName="download_cv"
                eventParams={{ location: "homepage" }}
              >
                Download CV
                <Download className="ml-2 size-4" aria-hidden="true" />
              </TrackedAnchor>
            </Button>

            <Button asChild size="lg" variant="ghost">
              <TrackedAnchor
                href={homeLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                eventName="click_linkedin"
                eventParams={{ location: "homepage" }}
              >
                LinkedIn
                <LinkedInIcon className="ml-2 size-5" aria-hidden="true" />
              </TrackedAnchor>
            </Button>
          </ButtonGroup>
        </div>
      </Container>
    </PageSection>
  );
}
