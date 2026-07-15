import * as React from "react";

import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

type TagListProps = React.HTMLAttributes<HTMLUListElement> & {
  tags: readonly string[];
  renderTag?: (tag: string, index: number) => React.ReactNode;
  getKey?: (tag: string, index: number) => React.Key;
};

export function TagList({
  tags,
  renderTag = (tag) => <Tag>{tag}</Tag>,
  getKey = (tag) => tag,
  className,
  ...props
}: TagListProps) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <ul
      role="list"
      className={cn("flex flex-wrap gap-2", className)}
      {...props}
    >
      {tags.map((tag, index) => (
        <li key={getKey(tag, index)} className="inline-flex">
          {renderTag(tag, index)}
          {index < tags.length - 1 ? <span className="sr-only">, </span> : null}
        </li>
      ))}
    </ul>
  );
}
