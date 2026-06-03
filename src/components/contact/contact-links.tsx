import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { FileText, Mail, MapPin } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons/brand-icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type ContactLink = {
  label: string;
  description: string;
  href: string;
  icon: IconComponent;
  external?: boolean;
};

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    description: "Best for direct contact and role enquiries.",
    href: "mailto:charlie_cook321@hotmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    description: "View projects, code and portfolio work.",
    href: "https://github.com/MrCook17",
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    description: "Connect professionally and follow updates.",
    href: "https://www.linkedin.com/in/charles-james-cook/",
    icon: LinkedInIcon,
    external: true,
  },
];

export function ContactLinks() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle as="h2">Contact details</CardTitle>
          <CardDescription>
            Open to junior software developer, backend developer, full-stack
            developer, web developer and graduate software roles.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex gap-3 rounded-2xl border border-border bg-background/40 p-4">
            <MapPin className="mt-0.5 size-5 text-primary" aria-hidden="true" />
            <div>
              <p className="font-medium text-foreground">Stoke-on-Trent, UK</p>
              <p className="text-sm leading-6 text-muted-foreground">
                UK-based and open to remote or hybrid roles, with relocation
                considered for the right opportunity.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Button
                  key={item.label}
                  asChild
                  variant="outline"
                  className="group h-auto w-full justify-start gap-3 px-4 py-4 text-left whitespace-normal transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:border-primary focus-visible:bg-primary focus-visible:text-primary-foreground focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    <Icon
                      className="size-5 shrink-0 text-primary transition-colors group-hover:text-primary-foreground group-focus-visible:text-primary-foreground"
                      aria-hidden="true"
                    />

                    <span className="min-w-0">
                      <span className="block font-medium text-foreground transition-colors group-hover:text-primary-foreground group-focus-visible:text-primary-foreground">
                        {item.label}
                      </span>

                      <span className="block text-sm font-normal text-muted-foreground transition-colors group-hover:text-primary-foreground/90 group-focus-visible:text-primary-foreground/90">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                </Button>
              );
            })}
          </div>

          <Button asChild className="w-full">
            <a href="/Charlie-Cook-CV.pdf" download>
              <FileText className="mr-2 size-4" aria-hidden="true" />
              Download CV
            </a>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle as="h2">Availability</CardTitle>
          <CardDescription>
            Currently studying Computer Science at university while working
            part-time, so my main availability is for part-time, flexible,
            remote or hybrid opportunities.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
