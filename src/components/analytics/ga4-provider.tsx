"use client";

import { useEffect, useReducer } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

import { useAnalyticsConsentSnapshot } from "@/components/analytics/use-analytics-consent-snapshot";
import {
  configureGoogleAnalytics,
  disableGoogleAnalytics,
  ensureGoogleAnalytics,
  getGaMeasurementId,
  isGoogleAnalyticsReady,
  markGoogleAnalyticsReady,
  trackPageView,
} from "@/lib/analytics/ga";

function removeGoogleAnalyticsScripts() {
  document
    .querySelectorAll<HTMLScriptElement>(
      'script[src^="https://www.googletagmanager.com/gtag/js"]',
    )
    .forEach((script) => script.remove());
}

export function Ga4Provider() {
  const pathname = usePathname();
  const measurementId = getGaMeasurementId();
  const consentSnapshot = useAnalyticsConsentSnapshot();
  const shouldLoadGa = consentSnapshot === "accepted" && Boolean(measurementId);
  const [gaReadyVersion, bumpGaReadyVersion] = useReducer(
    (currentValue: number) => currentValue + 1,
    0,
  );

  useEffect(() => {
    if (consentSnapshot === "loading") {
      return;
    }

    if (shouldLoadGa && measurementId) {
      ensureGoogleAnalytics(measurementId);
      return;
    }

    disableGoogleAnalytics();
    removeGoogleAnalyticsScripts();
  }, [consentSnapshot, measurementId, shouldLoadGa]);

  useEffect(() => {
    if (!shouldLoadGa || !isGoogleAnalyticsReady()) {
      return;
    }

    trackPageView(pathname);
  }, [gaReadyVersion, pathname, shouldLoadGa]);

  function handleGoogleAnalyticsReady() {
    if (!measurementId || !configureGoogleAnalytics(measurementId)) {
      return;
    }

    markGoogleAnalyticsReady();
    bumpGaReadyVersion();
  }

  if (!shouldLoadGa || !measurementId) {
    return null;
  }

  return (
    <Script
      id="ga4-loader"
      src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
        measurementId,
      )}`}
      strategy="afterInteractive"
      onReady={handleGoogleAnalyticsReady}
    />
  );
}
