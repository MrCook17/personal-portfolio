import { workingStyleCards } from "@/content/about";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function WorkingStyleSection() {
  return (
    <section aria-labelledby="working-style">
      <SectionHeading
        id="working-style"
        eyebrow="Working style"
        title="How I approach software work"
        description="A few values that connect my commercial work, university projects and personal development."
      />

      <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 xl:grid-cols-3">
        {workingStyleCards.map((card) => (
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
