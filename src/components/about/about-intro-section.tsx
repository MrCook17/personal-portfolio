import { aboutIntro } from "@/content/about";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutIntroSection() {
  return (
    <section aria-labelledby="about-intro">
      <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            {aboutIntro.highlights.map((highlight) => (
              <Badge key={highlight} variant="secondary">
                {highlight}
              </Badge>
            ))}
          </div>

          <div className="space-y-4">
            {aboutIntro.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-3xl text-base leading-8 text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <Card className="border-primary/20 bg-card/70">
          <CardHeader>
            <CardTitle id="about-intro" className="text-xl">
              Quick profile
            </CardTitle>
          </CardHeader>

          <CardContent>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-medium text-foreground">Location</dt>
                <dd className="mt-1 text-muted-foreground">
                  Stoke-on-Trent, UK
                </dd>
              </div>

              <div>
                <dt className="font-medium text-foreground">Current focus</dt>
                <dd className="mt-1 text-muted-foreground">
                  Software development, backend APIs and practical web
                  applications.
                </dd>
              </div>

              <div>
                <dt className="font-medium text-foreground">Experience</dt>
                <dd className="mt-1 text-muted-foreground">
                  Commercial software, ecommerce SEO, CMS work, analytics and
                  database-backed systems.
                </dd>
              </div>

              <div>
                <dt className="font-medium text-foreground">Availability</dt>
                <dd className="mt-1 text-muted-foreground">
                  Open to future remote, hybrid, junior and graduate software
                  roles in the UK.
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
