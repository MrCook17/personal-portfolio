"use client";

import { useState } from "react";

import { useAnalyticsConsentSnapshot } from "@/components/analytics/use-analytics-consent-snapshot";
import { Button } from "@/components/ui/button";
import {
  type AnalyticsConsentChoice,
  resetAnalyticsConsentChoice,
  setAnalyticsConsentChoice,
} from "@/lib/analytics/ga";

function getPreferenceLabel(choice: AnalyticsConsentChoice | null) {
  if (choice === "accepted") {
    return "Accepted";
  }

  if (choice === "declined") {
    return "Declined";
  }

  return "No preference saved";
}

export function AnalyticsPreferencesControl() {
  const consentSnapshot = useAnalyticsConsentSnapshot();
  const [statusMessage, setStatusMessage] = useState("");

  function handleSetPreference(choice: AnalyticsConsentChoice) {
    setAnalyticsConsentChoice(choice);
    setStatusMessage(`Analytics preference saved as ${choice}.`);
  }

  function handleResetPreference() {
    resetAnalyticsConsentChoice();
    setStatusMessage("Analytics preference reset.");
  }

  if (consentSnapshot === "loading") {
    return null;
  }

  return (
    <div className="rounded-xl border border-border bg-background/40 p-4">
      <div className="space-y-2">
        <p className="font-medium text-foreground">
          Current analytics preference:{" "}
          {getPreferenceLabel(
            consentSnapshot === "unset" ? null : consentSnapshot,
          )}
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <Button type="button" onClick={() => handleSetPreference("accepted")}>
          Accept analytics
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => handleSetPreference("declined")}
        >
          Decline analytics
        </Button>
        <Button type="button" variant="ghost" onClick={handleResetPreference}>
          Reset preference
        </Button>
      </div>

      <p role="status" aria-live="polite" className="mt-3 text-xs">
        {statusMessage}
      </p>
    </div>
  );
}
