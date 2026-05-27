import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { skillGroups } from "@/content/home";

export function SkillsOverviewSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="skills-overview">
      <Container size="lg">
        <SectionHeading
          eyebrow="Technical skills"
          title="Skills I use in real projects"
          description="A practical overview of the languages, tools and workflows I’ve used across university projects, commercial software development, CMS work, SEO and backend/API development."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <Card key={group.title} className="bg-card/70">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl border bg-background/60">
                      <Icon
                        className="size-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <CardTitle className="text-lg">{group.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
