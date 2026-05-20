import * as React from "react";
import { AlertTriangle, CheckCircle2, Info, Lightbulb } from "lucide-react";

import { cn } from "@/lib/utils";

type CalloutVariant = "info" | "success" | "warning" | "note";

type CalloutProps = {
  title?: string;
  children: React.ReactNode;
  variant?: CalloutVariant;
  className?: string;
};

const icons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  note: Lightbulb,
};

const styles = {
  info: "border-primary/35 bg-primary/10 text-foreground",
  success: "border-emerald-500/30 bg-emerald-500/10 text-foreground",
  warning: "border-amber-500/30 bg-amber-500/10 text-foreground",
  note: "border-border bg-card text-foreground",
};

export function Callout({
  title,
  children,
  variant = "info",
  className,
}: CalloutProps) {
  const Icon = icons[variant];

  return (
    <aside className={cn("rounded-2xl border p-5", styles[variant], className)}>
      <div className="flex gap-3">
        <Icon
          className="mt-0.5 size-5 shrink-0 text-primary"
          aria-hidden="true"
        />

        <div className="space-y-2">
          {title ? (
            <p className="font-medium text-foreground">{title}</p>
          ) : null}

          <div className="text-sm leading-7 text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}
