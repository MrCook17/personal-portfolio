import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <section className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div>
          <Badge className="mb-4">Full-Stack Software Engineer Portfolio</Badge>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Building practical web software with clean code and commercial
            focus.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A portfolio showcasing full-stack development, backend systems, web
            projects, SEO-focused commercial work, and technical case studies.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/projects">View Projects</Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Current Focus</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Next.js App Router foundation</p>
            <p>TypeScript component structure</p>
            <p>Tailwind CSS design system</p>
            <p>Portfolio case study planning</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
