export const ANALYTICS_CONSENT_STORAGE_KEY = "charliecook.dev.analyticsConsent";

export const ANALYTICS_CONSENT_CHANGE_EVENT =
  "charliecook:analytics-consent-change";

export const ANALYTICS_READY_EVENT = "charliecook:analytics-ready";

export type AnalyticsConsentChoice = "accepted" | "declined";

export type GaEventName =
  | "download_cv"
  | "contact_form_submit"
  | "click_github"
  | "click_linkedin"
  | "click_email"
  | "click_project_github"
  | "click_live_project"
  | "view_project_case_study";

export type GaEventParamValue = string | number | boolean | null | undefined;

export type GaEventParams = Record<string, GaEventParamValue>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __ga4Ready?: boolean;
    __ga4ConfiguredMeasurementId?: string;
  }
}

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function isBrowser() {
  return typeof window !== "undefined";
}

export function getGaMeasurementId() {
  return gaMeasurementId;
}

export function hasGaMeasurementId() {
  return Boolean(gaMeasurementId);
}

export function getAnalyticsConsentChoice(): AnalyticsConsentChoice | null {
  if (!isBrowser()) {
    return null;
  }

  try {
    const storedChoice = window.localStorage.getItem(
      ANALYTICS_CONSENT_STORAGE_KEY,
    );

    if (storedChoice === "accepted" || storedChoice === "declined") {
      return storedChoice;
    }
  } catch {
    return null;
  }

  return null;
}

export function isAnalyticsConsentAccepted() {
  return getAnalyticsConsentChoice() === "accepted";
}

export function setAnalyticsConsentChoice(choice: AnalyticsConsentChoice) {
  if (!isBrowser()) {
    return;
  }

  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, choice);
  } catch {
    return;
  }

  window.dispatchEvent(
    new CustomEvent(ANALYTICS_CONSENT_CHANGE_EVENT, {
      detail: { choice },
    }),
  );
}

export function resetAnalyticsConsentChoice() {
  if (!isBrowser()) {
    return;
  }

  try {
    window.localStorage.removeItem(ANALYTICS_CONSENT_STORAGE_KEY);
  } catch {
    return;
  }

  window.dispatchEvent(
    new CustomEvent(ANALYTICS_CONSENT_CHANGE_EVENT, {
      detail: { choice: null },
    }),
  );
}

export function ensureGoogleAnalytics(measurementId = gaMeasurementId) {
  if (!isBrowser() || !measurementId || !isAnalyticsConsentAccepted()) {
    return false;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag() {
      // Google's gtag shim expects the array-like Arguments object here.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };

  return true;
}

export function configureGoogleAnalytics(measurementId = gaMeasurementId) {
  if (!ensureGoogleAnalytics(measurementId)) {
    return false;
  }

  const gtag = window.gtag;

  if (!gtag) {
    return false;
  }

  gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  if (window.__ga4ConfiguredMeasurementId !== measurementId) {
    gtag("js", new Date());
    gtag("config", measurementId, {
      send_page_view: false,
    });
    window.__ga4ConfiguredMeasurementId = measurementId;
  }

  return true;
}

export function markGoogleAnalyticsReady() {
  if (!isBrowser()) {
    return;
  }

  window.__ga4Ready = true;
  window.dispatchEvent(new Event(ANALYTICS_READY_EVENT));
}

export function disableGoogleAnalytics() {
  if (!isBrowser()) {
    return;
  }

  window.__ga4Ready = false;
  window.__ga4ConfiguredMeasurementId = undefined;
  window.dataLayer = [];
  window.gtag = undefined;
}

export function isGoogleAnalyticsReady() {
  return (
    isBrowser() &&
    Boolean(window.__ga4Ready) &&
    typeof window.gtag === "function"
  );
}

function compactEventParams(params: GaEventParams) {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null,
    ),
  );
}

function getCurrentPagePath() {
  if (!isBrowser()) {
    return undefined;
  }

  return `${window.location.pathname}${window.location.search}`;
}

export function trackPageView(pagePath = getCurrentPagePath()) {
  if (
    !isBrowser() ||
    !gaMeasurementId ||
    !isAnalyticsConsentAccepted() ||
    !isGoogleAnalyticsReady()
  ) {
    return;
  }

  window.gtag?.(
    "event",
    "page_view",
    compactEventParams({
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    }),
  );
}

export function trackEvent(eventName: GaEventName, params: GaEventParams = {}) {
  if (
    !isBrowser() ||
    !gaMeasurementId ||
    !isAnalyticsConsentAccepted() ||
    !isGoogleAnalyticsReady()
  ) {
    return;
  }

  window.gtag?.(
    "event",
    eventName,
    compactEventParams({
      page_path: getCurrentPagePath(),
      ...params,
    }),
  );
}
