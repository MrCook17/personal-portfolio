import { Calendar, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import type { ExperienceRole } from "@/types/experience";

import { RelatedLinkButton } from "./related-link-button";

type ExperienceTimelineItemProps = {
  item: ExperienceRole;
};

export function ExperienceTimelineItem({ item }: ExperienceTimelineItemProps) {
  return (
    <li className="relative">
      <span
        className="absolute top-7 -left-8.25 h-4 w-4 rounded-full border border-primary bg-background ring-4 ring-primary/10 md:-left-10.25"
        aria-hidden="true"
      />

      <Card className="border-primary/20 bg-card/70">
        <CardHeader className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{item.employmentType}</Badge>
            <Badge variant="outline">{item.locationType}</Badge>
          </div>

          <div className="space-y-2">
            <CardTitle className="text-2xl">{item.role}</CardTitle>
            <CardDescription className="text-base">
              {item.company}
            </CardDescription>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {item.dateLabel}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {item.locationType}
            </span>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="leading-7 text-muted-foreground">{item.summary}</p>

          <ul className="space-y-3">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-6">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="text-muted-foreground">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {item.technologies.map((technology) => (
              <Tag key={technology}>{technology}</Tag>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {item.relatedLinks.map((link) => (
              <RelatedLinkButton key={link.href} link={link} />
            ))}
          </div>
        </CardContent>
      </Card>
    </li>
  );
}
