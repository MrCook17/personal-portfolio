"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

import { normalizeNavigationPath } from "@/lib/navigation";

type SamePageLinkProps = ComponentProps<typeof Link>;

function shouldHandleSamePageClick(
  event: MouseEvent<HTMLAnchorElement>,
  target?: string,
) {
  return (
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.altKey &&
    !event.shiftKey &&
    (!target || target === "_self")
  );
}

function getScrollBehavior(): ScrollBehavior {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return "auto";
  }

  return "smooth";
}

function getLinkPathname(element: HTMLAnchorElement) {
  return new URL(element.href).pathname;
}

export function SamePageLink({
  href,
  onClick,
  target,
  ...props
}: SamePageLinkProps) {
  const pathname = usePathname();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    const linkPathname = getLinkPathname(event.currentTarget);

    if (
      event.defaultPrevented ||
      !shouldHandleSamePageClick(event, target) ||
      normalizeNavigationPath(pathname) !==
        normalizeNavigationPath(linkPathname)
    ) {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: getScrollBehavior() });
  }

  return <Link href={href} target={target} onClick={handleClick} {...props} />;
}
