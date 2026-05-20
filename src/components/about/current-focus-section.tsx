import { currentFocusCards } from "@/content/about";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";

export function CurrentFocusSection() {
  return (
    <section aria-labelledby="current-focus">
      <SectionHeading
        eyebrow="Current focus"
        title="What I am building towards"
        description="A focused snapshot of the areas I am improving as I develop the portfolio and prepare for future software roles."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {currentFocusCards.map((card) => (
          <Card key={card.title} className="border-primary/20 bg-card/70">
            <CardHeader>
              <CardTitle className="text-lg">{card.title}</CardTitle>
              <CardDescription className="leading-6">
                {card.description}
              </CardDescription>
            </CardHeader>

            {card.tags ? (
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </CardContent>
            ) : null}
          </Card>
        ))}
      </div>
    </section>
  );
}
