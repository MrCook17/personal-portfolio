import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { RelatedLink } from "@/types/experience";

type RelatedLinkButtonProps = {
  link: RelatedLink;
};

export function RelatedLinkButton({ link }: RelatedLinkButtonProps) {
  const icon = link.isExternal ? (
    <ExternalLink className="h-4 w-4" aria-hidden="true" />
  ) : (
    <ArrowRight className="h-4 w-4" aria-hidden="true" />
  );

  if (link.isExternal) {
    return (
      <Button asChild variant="outline" size="sm">
        <a href={link.href} target="_blank" rel="noreferrer">
          {link.label}
          {icon}
        </a>
      </Button>
    );
  }

  return (
    <Button asChild variant="outline" size="sm">
      <Link href={link.href}>
        {link.label}
        {icon}
      </Link>
    </Button>
  );
}
