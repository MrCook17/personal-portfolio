# Phase 12 Polish Checklist

## Purpose

This file tracks the code-safe SEO, accessibility and performance polish completed for Phase 12, including workbook-backed Phase 12B and Phase 12C work. It also lists tasks that still need manual browser testing, live URL checks, Lighthouse/PageSpeed data, or final asset confirmation.

## Workbook Context Used

- Workbook available in the repo: `docs/portfolio_seo_ai_visibility_plan_final_ubersuggest_QA.xlsx`.
- Relevant sheets: `Phase Plan`, `Keyword Map`, `Final Ubersuggest QA`, `AI Visibility`, `Schema Plan`, `Internal Linking`, and `Monitoring`.
- Phase 12B code-safe items focused on route metadata, canonical URLs, sitemap/robots checks, and crawlable public routes.
- Phase 12C code-safe items focused on accurate entity/schema signals: `Person`, `WebSite`, `ProfilePage`, `Article`, `CreativeWork`, and breadcrumbs.

## Completed In Code

| Area                       | Status           | Notes                                                                                                                                              |
| -------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unique page metadata       | Complete in code | Public app pages, blog posts and project case studies have route-level metadata.                                                                   |
| Canonical URLs             | Complete in code | Shared metadata helper adds canonical paths for public pages using it.                                                                             |
| Open Graph text metadata   | Complete in code | Shared metadata helper adds title, description, URL, site name, locale and type.                                                                   |
| Open Graph image support   | Partial in code  | Existing `profile_pic.webp` is wired as a default 800x800 share image. A dedicated 1200x630 OG image should still be supplied before final launch. |
| Twitter/X card metadata    | Complete in code | Shared metadata helper adds summary card title, description and image.                                                                             |
| Sitemap                    | Verified in code | `sitemap.ts` includes launch-ready static pages, published blog posts and case-study project routes. `/style-guide` is not included.               |
| Robots                     | Verified in code | `robots.ts` allows crawling and includes the sitemap URL from `siteConfig.url`.                                                                    |
| JSON-LD: Person            | Complete in code | Rendered site-wide using accurate profile data.                                                                                                    |
| JSON-LD: WebSite           | Complete in code | Rendered site-wide with site name, URL and author/publisher identity.                                                                              |
| JSON-LD: ProfilePage       | Complete in code | Rendered on `/about`.                                                                                                                              |
| JSON-LD: Article           | Complete in code | Rendered for published blog posts.                                                                                                                 |
| JSON-LD: CreativeWork      | Complete in code | Rendered for project case studies using existing project metadata.                                                                                 |
| JSON-LD: BreadcrumbList    | Complete in code | Rendered for blog posts and project case studies.                                                                                                  |
| Custom 404 page            | Complete in code | Added `src/app/not-found.tsx` with noindex metadata.                                                                                               |
| Meaningful image alt text  | Verified in code | Profile image has descriptive alt text; brand icon is decorative with adjacent visible brand text.                                                 |
| Contact form labels/errors | Improved in code | Fields have labels, invalid state and error IDs; the form now links to the privacy notice with `aria-describedby`.                                 |
| Clickable elements         | Verified in code | Interactive controls are links or buttons; filter actions use buttons.                                                                             |
| Visible focus states       | Improved in code | Existing buttons/nav have focus rings; privacy/accessibility/contact text links now include focus-visible styles.                                  |
| Reduced motion             | Improved in code | Global `prefers-reduced-motion` guard disables smooth scrolling and reduces transitions/animations.                                                |
| Fixed image dimensions     | Verified in code | Next image usage includes fixed dimensions or constrained wrappers with `sizes`.                                                                   |
| Font loading               | Verified in code | No remote/custom web font is configured; the site uses system/default font rendering.                                                              |

## Manual Tasks Still Required

| Task                             | Why it is manual                                                 | How to check                                                                                         |
| -------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Keyboard-only navigation         | Needs real interaction through all pages and menus.              | Tab through header, mobile nav, filters, forms, cards, footer and 404 page in a browser.             |
| Full colour contrast review      | Needs rendered browser state and theme review.                   | Use DevTools, axe, Lighthouse or a contrast checker across light and dark mode states.               |
| Lighthouse audit                 | Requires a running preview/production build.                     | Run Lighthouse on the deployed or local production URL, especially mobile.                           |
| PageSpeed Insights               | Requires a public URL.                                           | Run PageSpeed Insights against the preview/production deployment URL.                                |
| Live Open Graph preview          | Requires a deployed URL and crawler cache behaviour.             | Test with LinkedIn Post Inspector, Facebook Sharing Debugger or equivalent tools.                    |
| JSON-LD validation               | Needs external validators for rich result/schema interpretation. | Use Google Rich Results Test and Schema.org validator on deployed pages.                             |
| Dedicated OG image               | Needs a final visual asset decision.                             | Provide or generate a 1200x630 portfolio share image and replace the current profile-photo fallback. |
| Final sitemap submission         | Requires final live domain.                                      | Submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools.                             |
| AI/search visibility monitoring  | Requires indexing and time.                                      | Track branded and long-tail prompts/searches monthly after launch.                                   |
| Mobile device review             | Needs real viewport/browser behaviour.                           | Check on a phone or browser device emulation after deployment.                                       |
| Internal content/linking changes | Visible body copy changes were intentionally deferred.           | Work from `SEO_CONTENT_REVIEW.md` when ready to edit page content.                                   |

## Test Commands

Run after Phase 12 edits:

```bash
npm run format
npm run lint
npm run typecheck
npm run test
npm run build
```

## Latest Test Results

Captured from the attached terminal output after Phase 12 edits.

| Command             | Result | Notes                                                                        |
| ------------------- | ------ | ---------------------------------------------------------------------------- |
| `npm run format`    | Passed | Prettier completed across the repo; files were reported unchanged.           |
| `npm run lint`      | Passed | ESLint completed without reported errors.                                    |
| `npm run typecheck` | Passed | `tsc --noEmit` completed successfully.                                       |
| `npm run test`      | Passed | Unit tests: 3 files / 25 tests passed. E2E tests: 8 Playwright tests passed. |
| `npm run build`     | Passed | Next.js production build compiled and generated 23 static pages.             |

## Notes And Uncertainties

- The attached prompt referenced `portfolio_seo_ai_visibility_plan_final_ubersuggest_QA(1).xlsx`; the repo contains `portfolio_seo_ai_visibility_plan_final_ubersuggest_QA.xlsx`, which was used as the workbook context.
- `NEXT_PUBLIC_SITE_URL` must be set to the final production origin before deployment so canonical URLs, sitemap URLs, robots sitemap URL and JSON-LD URLs are production-correct.
- Current Open Graph image support uses the existing 800x800 profile image. It is valid as a fallback but not ideal for polished social sharing.
- The `/cv` route remains unimplemented because the workbook marks CV route/PDF handling as needing confirmation.
- `debug.log` is currently untracked and contains a Chromium GPU warning from browser testing. It is not needed for the site and can be removed if it was generated locally during Playwright runs.
