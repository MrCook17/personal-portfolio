import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { trustIndicators } from "@/content/home";

export function TrustBarSection() {
  return (
    <section className="py-6 sm:py-8">
      <Container size="lg">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title} className="bg-card/70">
                <CardHeader className="space-y-3">
                  <div className="flex size-10 items-center justify-center rounded-xl border bg-background/60">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {item.detail}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
