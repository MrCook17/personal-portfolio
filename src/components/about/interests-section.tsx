import { personalInterestCards } from "@/content/about";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function InterestsSection() {
  return (
    <section aria-labelledby="interests">
      <SectionHeading
        eyebrow="Away from code"
        title="A bit of personality"
        description="Kept light, because the main purpose of the portfolio is still software credibility."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {personalInterestCards.map((card) => (
          <Card key={card.title} className="border-primary/20 bg-card/70">
            <CardHeader>
              <CardTitle className="text-lg">{card.title}</CardTitle>
              <CardDescription className="leading-6">
                {card.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
