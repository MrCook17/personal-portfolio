import type { CaseStudySummary } from "@/types/project";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CaseStudySummaryCardsProps = {
  summary: CaseStudySummary;
};

export function CaseStudySummaryCards({ summary }: CaseStudySummaryCardsProps) {
  const cards = [
    {
      title: "Problem",
      content: summary.problem,
    },
    {
      title: "Approach",
      content: summary.approach,
    },
    {
      title: "Outcome",
      content: summary.outcome,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader>
            <CardTitle as="h2" className="text-lg">
              {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-6 text-muted-foreground">
              {card.content}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
