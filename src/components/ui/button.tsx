import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border border-border bg-background/40 text-foreground hover:bg-accent hover:text-accent-foreground",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "h-auto rounded-none p-0 text-primary underline-offset-4 hover:underline focus-visible:ring-offset-background",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

type ButtonGroupProps = React.ComponentProps<"div"> & {
  align?: "start" | "center" | "end" | "between";
  stackOnMobile?: boolean;
};

const buttonGroupAlignment = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
};

const stackedButtonGroupAlignment = {
  start: "items-start sm:items-center sm:justify-start",
  center: "items-center sm:justify-center",
  end: "items-end sm:items-center sm:justify-end",
  between: "items-stretch sm:items-center sm:justify-between",
};

function ButtonGroup({
  align = "start",
  stackOnMobile = false,
  className,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      className={cn(
        stackOnMobile
          ? "flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          : "flex flex-wrap items-center gap-3",
        stackOnMobile
          ? stackedButtonGroupAlignment[align]
          : buttonGroupAlignment[align],
        className,
      )}
      {...props}
    />
  );
}

export { Button, ButtonGroup, buttonVariants };
