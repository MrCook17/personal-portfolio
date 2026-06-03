import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PageSection } from "@/components/ui/page-layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { latestBlogPosts } from "@/content/home";

export function LatestBlogNotesSection() {
  if (latestBlogPosts.length < 2) {
    return null;
  }

  return (
    <PageSection aria-labelledby="latest-notes">
      <Container size="lg">
        <SectionHeading
          id="latest-notes"
          eyebrow="Latest notes"
          title="Software development notes"
          description="Short technical notes on project building, backend development, SEO, analytics, debugging and what I am learning."
        />

        <div className="mt-8 grid gap-6 md:mt-10 lg:grid-cols-3">
          {latestBlogPosts.map((post) => (
            <Card key={post.title} className="flex h-full flex-col bg-card/70">
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {post.date} · {post.readingTime}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button asChild variant="outline">
                  <Link href={post.href}>Read post</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </PageSection>
  );
}
