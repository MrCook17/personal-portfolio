"use client";

import { useSyncExternalStore } from "react";

import {
  ANALYTICS_CONSENT_CHANGE_EVENT,
  ANALYTICS_CONSENT_STORAGE_KEY,
  type AnalyticsConsentChoice,
  getAnalyticsConsentChoice,
} from "@/lib/analytics/ga";

export type AnalyticsConsentSnapshot =
  | AnalyticsConsentChoice
  | "unset"
  | "loading";

function getSnapshot(): AnalyticsConsentSnapshot {
  return getAnalyticsConsentChoice() ?? "unset";
}

function getServerSnapshot(): AnalyticsConsentSnapshot {
  return "loading";
}

function subscribe(callback: () => void) {
  function handleStorage(event: StorageEvent) {
    if (event.key === ANALYTICS_CONSENT_STORAGE_KEY || event.key === null) {
      callback();
    }
  }

  window.addEventListener(ANALYTICS_CONSENT_CHANGE_EVENT, callback);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener(ANALYTICS_CONSENT_CHANGE_EVENT, callback);
    window.removeEventListener("storage", handleStorage);
  };
}

export function useAnalyticsConsentSnapshot() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
