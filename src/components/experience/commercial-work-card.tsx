import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TagList } from "@/components/ui/tag-list";
import type { CommercialWorkArea } from "@/types/experience";

import { RelatedLinkButton } from "./related-link-button";

type CommercialWorkCardProps = {
  area: CommercialWorkArea;
};

export function CommercialWorkCard({ area }: CommercialWorkCardProps) {
  return (
    <Card className="flex h-full flex-col border-primary/20 bg-card/70 transition-colors hover:border-primary/40">
      <CardHeader className="space-y-4">
        <div className="space-y-2">
          <CardTitle className="text-xl">{area.title}</CardTitle>
          <CardDescription className="leading-6">
            {area.description}
          </CardDescription>
        </div>

        <TagList tags={area.technologies} />
      </CardHeader>

      {area.relatedLink ? (
        <CardContent className="mt-auto pt-0">
          <RelatedLinkButton link={area.relatedLink} />
        </CardContent>
      ) : null}
    </Card>
  );
}
