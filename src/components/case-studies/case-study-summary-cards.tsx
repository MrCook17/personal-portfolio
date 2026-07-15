import type { CaseStudySummary } from "@/types/project";
import { Card } from "@/components/ui/card";

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
    <dl className="grid gap-6 md:grid-cols-3">
      {cards.map((card) => (
        <Card key={card.title}>
          <dt className="p-6 pb-3 text-lg font-semibold tracking-tight text-foreground">
            {card.title}
          </dt>
          <dd className="p-6 pt-3 text-sm leading-6 text-muted-foreground">
            {card.content}
          </dd>
        </Card>
      ))}
    </dl>
  );
}
