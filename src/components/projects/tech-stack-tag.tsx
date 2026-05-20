import type { ReactNode } from "react";

import { Tag } from "@/components/ui/tag";

type TechStackTagProps = {
  children: ReactNode;
};

export function TechStackTag({ children }: TechStackTagProps) {
  return <Tag>{children}</Tag>;
}
