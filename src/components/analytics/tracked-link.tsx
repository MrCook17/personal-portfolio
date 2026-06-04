"use client";

import { forwardRef, type AnchorHTMLAttributes, type MouseEvent } from "react";

import {
  type GaEventName,
  type GaEventParams,
  trackEvent,
} from "@/lib/analytics/ga";

type TrackingProps = {
  eventName: GaEventName;
  eventParams?: GaEventParams;
};

function getLinkText(element: HTMLAnchorElement) {
  return element.textContent?.replace(/\s+/g, " ").trim() || undefined;
}

function trackLinkClick(
  event: MouseEvent<HTMLAnchorElement>,
  eventName: GaEventName,
  eventParams?: GaEventParams,
) {
  if (event.defaultPrevented) {
    return;
  }

  trackEvent(eventName, {
    link_url: event.currentTarget.href,
    link_text: getLinkText(event.currentTarget),
    ...eventParams,
  });
}

export type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  TrackingProps;

export const TrackedAnchor = forwardRef<HTMLAnchorElement, TrackedAnchorProps>(
  function TrackedAnchor({ eventName, eventParams, onClick, ...props }, ref) {
    function handleClick(event: MouseEvent<HTMLAnchorElement>) {
      onClick?.(event);
      trackLinkClick(event, eventName, eventParams);
    }

    return <a ref={ref} onClick={handleClick} {...props} />;
  },
);
