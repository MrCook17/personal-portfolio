import type { ExperienceRole } from "@/types/experience";

import { ExperienceTimelineItem } from "./experience-timeline-item";

type ExperienceTimelineProps = {
  items: ExperienceRole[];
};

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <ol className="relative space-y-8 border-l border-border/70 pl-6 md:pl-8">
      {items.map((item) => (
        <ExperienceTimelineItem
          key={`${item.company}-${item.role}`}
          item={item}
        />
      ))}
    </ol>
  );
}
