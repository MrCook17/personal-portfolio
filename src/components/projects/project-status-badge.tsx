import type { ComponentProps } from "react";

import type { ProjectStatus } from "@/types/project";
import { Badge } from "@/components/ui/badge";

type BadgeVariant = ComponentProps<typeof Badge>["variant"];

const statusToVariant: Record<ProjectStatus, BadgeVariant> = {
  Finished: "success",
  Ongoing: "warning",
  "MVP complete": "success",
  "In active development": "warning",
  Archived: "outline",
};

type ProjectStatusBadgeProps = {
  status: ProjectStatus;
};

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  return <Badge variant={statusToVariant[status]}>{status}</Badge>;
}
