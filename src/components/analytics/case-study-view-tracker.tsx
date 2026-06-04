"use client";

import { useEffect, useRef } from "react";

import {
  ANALYTICS_CONSENT_CHANGE_EVENT,
  ANALYTICS_READY_EVENT,
  isAnalyticsConsentAccepted,
  isGoogleAnalyticsReady,
  trackEvent,
} from "@/lib/analytics/ga";

type CaseStudyViewTrackerProps = {
  pagePath: string;
  projectSlug: string;
  projectTitle: string;
};

export function CaseStudyViewTracker({
  pagePath,
  projectSlug,
  projectTitle,
}: CaseStudyViewTrackerProps) {
  const hasTrackedView = useRef(false);

  useEffect(() => {
    hasTrackedView.current = false;

    function trackCaseStudyView() {
      if (
        hasTrackedView.current ||
        !isAnalyticsConsentAccepted() ||
        !isGoogleAnalyticsReady()
      ) {
        return;
      }

      trackEvent("view_project_case_study", {
        project_slug: projectSlug,
        project_title: projectTitle,
        page_path: pagePath,
        location: "case_study_page",
      });
      hasTrackedView.current = true;
    }

    trackCaseStudyView();

    window.addEventListener(ANALYTICS_READY_EVENT, trackCaseStudyView);
    window.addEventListener(ANALYTICS_CONSENT_CHANGE_EVENT, trackCaseStudyView);

    return () => {
      window.removeEventListener(ANALYTICS_READY_EVENT, trackCaseStudyView);
      window.removeEventListener(
        ANALYTICS_CONSENT_CHANGE_EVENT,
        trackCaseStudyView,
      );
    };
  }, [pagePath, projectSlug, projectTitle]);

  return null;
}
