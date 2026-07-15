import { aboutSkillGroups } from "@/content/about";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagList } from "@/components/ui/tag-list";

export function SkillsAndToolsSection() {
  return (
    <section aria-labelledby="skills-and-tools">
      <SectionHeading
        id="skills-and-tools"
        eyebrow="Skills and tools"
        title="Technical areas I work with"
        description="The main languages, tools and workflows I’ve used across projects, coursework and commercial work."
      />

      <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 xl:grid-cols-3">
        {aboutSkillGroups.map((group) => (
          <Card key={group.title} className="border-primary/20 bg-card/70">
            <CardHeader>
              <CardTitle className="text-lg">{group.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <TagList tags={group.skills} />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
