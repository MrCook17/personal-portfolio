import type { ComponentType } from "react";

import AnalyticsTrackingDropInvestigation from "@/content/case-studies/analytics-tracking-drop-investigation.mdx";
import AutomatingEcommerceSeoProductManagementCromartie from "@/content/case-studies/automating-ecommerce-seo-product-management-cromartie.mdx";
import AuracoGoogleMerchantCenterRecovery from "@/content/case-studies/auraco-google-merchant-center-recovery.mdx";
import CromartieTieDyePageRebuild from "@/content/case-studies/cromartie-tie-dye-page-rebuild.mdx";
import GoWebsiteHealthCheckApi from "@/content/case-studies/go-website-health-check-api.mdx";
import InternalRecordsManagementDesktopApplication from "@/content/case-studies/internal-records-management-desktop-application.mdx";

export const projectCaseStudies: Record<string, ComponentType> = {
  "automating-ecommerce-seo-product-management-cromartie":
    AutomatingEcommerceSeoProductManagementCromartie,
  "go-website-health-check-api": GoWebsiteHealthCheckApi,
  "cromartie-tie-dye-page-rebuild": CromartieTieDyePageRebuild,
  "auraco-google-merchant-center-recovery": AuracoGoogleMerchantCenterRecovery,
  "analytics-tracking-drop-investigation": AnalyticsTrackingDropInvestigation,
  "internal-records-management-desktop-application":
    InternalRecordsManagementDesktopApplication,
};
