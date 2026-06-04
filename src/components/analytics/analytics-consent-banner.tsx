"use client";

import { useAnalyticsConsentSnapshot } from "@/components/analytics/use-analytics-consent-snapshot";
import { Button } from "@/components/ui/button";
import {
  type AnalyticsConsentChoice,
  setAnalyticsConsentChoice,
} from "@/lib/analytics/ga";

export function AnalyticsConsentBanner() {
  const consentSnapshot = useAnalyticsConsentSnapshot();

  function handleChoice(choice: AnalyticsConsentChoice) {
    setAnalyticsConsentChoice(choice);
  }

  if (consentSnapshot !== "unset") {
    return null;
  }

  return (
    <aside
      role="region"
      aria-labelledby="analytics-consent-title"
      aria-live="polite"
      className="fixed right-4 bottom-4 left-4 z-[60] mx-auto max-w-xl rounded-xl border border-border bg-background/95 p-4 text-sm shadow-lg shadow-black/15 backdrop-blur"
    >
      <div className="space-y-3">
        <div className="space-y-1">
          <h2
            id="analytics-consent-title"
            className="text-base font-semibold text-foreground"
          >
            Optional analytics
          </h2>
          <p className="leading-6 text-muted-foreground">
            Optional analytics help me understand portfolio usage, such as page
            visits, CV downloads and profile link clicks. They are not used for
            advertising or remarketing.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => handleChoice("declined")}
          >
            Decline
          </Button>
          <Button type="button" onClick={() => handleChoice("accepted")}>
            Accept analytics
          </Button>
        </div>
      </div>
    </aside>
  );
}
