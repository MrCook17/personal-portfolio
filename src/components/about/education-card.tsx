import { GraduationCap } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import type { Education } from "@/types/experience";

type EducationCardProps = {
  education: Education;
};

export function EducationCard({ education }: EducationCardProps) {
  return (
    <Card className="border-primary/20 bg-card/70">
      <CardHeader className="space-y-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
          <GraduationCap className="h-6 w-6" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <CardTitle className="text-2xl">{education.degree}</CardTitle>
          <CardDescription className="text-base">
            {education.institution} · {education.dates}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <p className="leading-7 text-muted-foreground">{education.summary}</p>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Relevant modules
          </h3>
          <div className="flex flex-wrap gap-2">
            {education.modules.map((module) => (
              <Tag key={module}>{module}</Tag>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Strong coursework
          </h3>
          <ul className="space-y-2">
            {education.coursework.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
