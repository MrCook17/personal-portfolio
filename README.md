# Charlie Cook Portfolio

A production-focused software developer portfolio built with Next.js, TypeScript,
MDX, Supabase, Resend, Vitest, Playwright, GitHub Actions, and Vercel.

The site showcases backend/API projects, commercial web and SEO work, technical
case studies, blog notes, experience, and a full-stack contact form.

## What This Project Includes

- App Router pages for home, projects, project case studies, experience, about,
  blog, and contact.
- MDX-backed blog posts and case studies.
- Searchable and filterable project data.
- A full-stack contact form with server-side validation, Supabase storage, and
  Resend email notifications.
- Contact form protections including origin checks, content-type checks,
  request size limits, honeypot fields, minimum submit time checks, Zod
  validation, and Supabase-backed rate limiting.
- Unit tests with Vitest.
- End-to-end tests with Playwright.
- CI with GitHub Actions on pushes and pull requests to `master`.
- Deployment-ready configuration for Vercel.

## Tech Stack

| Area               | Technology                                                                |
| ------------------ | ------------------------------------------------------------------------- |
| Framework          | Next.js 16 App Router                                                     |
| Language           | TypeScript                                                                |
| UI                 | React 19, Tailwind CSS 4, shadcn-style components, Radix UI, lucide-react |
| Content            | MDX, typed content files                                                  |
| Forms              | React Hook Form, Zod                                                      |
| Backend            | Next.js Route Handlers                                                    |
| Database           | Supabase/PostgreSQL                                                       |
| Email              | Resend                                                                    |
| Unit testing       | Vitest, Testing Library, jsdom                                            |
| E2E testing        | Playwright                                                                |
| Formatting/linting | Prettier, ESLint                                                          |
| CI/CD              | GitHub Actions, Vercel                                                    |

## Requirements

- Node.js 22 recommended. CI uses Node.js 22.
- npm.
- A Supabase project for contact form storage and rate limiting.
- A Resend account and verified sender/domain if email notifications are needed.
- Playwright browser binaries for E2E tests.

## Getting Started

Install dependencies:

```bash
npm ci
```

Create `.env.local` manually using the variables in the next section.

Start the local development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Environment Variables

Create `.env.local` for local development. Real values must not be committed.

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-server-only-service-role-key

RESEND_API_KEY=re_your_resend_api_key
CONTACT_NOTIFICATION_EMAIL=you@example.com
CONTACT_FROM_EMAIL="Portfolio Contact <contact@your-domain.com>"

CONTACT_RATE_LIMIT_SECRET=replace-with-a-long-random-secret-at-least-32-chars
```

| Variable                     | Required                    | Purpose                                                                                                      |
| ---------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`       | Yes for production          | Site origin used for metadata, sitemap, and contact form origin checks. Use the origin only, not `/contact`. |
| `SUPABASE_URL`               | Yes for contact form        | Supabase project URL.                                                                                        |
| `SUPABASE_SERVICE_ROLE_KEY`  | Yes for contact form        | Server-only Supabase key used by the API route. Never expose this as `NEXT_PUBLIC_*`.                        |
| `RESEND_API_KEY`             | Yes for email notifications | Server-only Resend API key.                                                                                  |
| `CONTACT_NOTIFICATION_EMAIL` | Yes for email notifications | Inbox that receives contact form notifications.                                                              |
| `CONTACT_FROM_EMAIL`         | Yes for email notifications | Verified Resend sender address.                                                                              |
| `CONTACT_RATE_LIMIT_SECRET`  | Yes for contact form        | Secret used to hash client IPs for rate limiting.                                                            |
| `VERCEL_URL`                 | Automatic on Vercel         | Used by the contact API to allow Vercel preview origins.                                                     |

Important:

- Do not commit `.env.local`.
- Do not prefix Supabase service role keys, Resend keys, or rate-limit secrets
  with `NEXT_PUBLIC_`.
- In production, set `NEXT_PUBLIC_SITE_URL` to the final site origin, for
  example `https://your-domain.com`.

## Supabase Setup

The contact API expects two tables:

- `contact_submissions`
- `contact_rate_limits`

The browser does not write directly to Supabase. All writes go through
`/api/contact` using the server-only service role key.

Example schema:

```sql
create extension if not exists pgcrypto;

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 80),
  email text not null check (char_length(email) <= 254),
  message text not null check (char_length(message) between 10 and 2000),
  source text not null default 'portfolio_contact_form',
  status text not null default 'new' check (
    status in ('new', 'read', 'replied', 'archived')
  )
);

create table if not exists public.contact_rate_limits (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  ip_hash text not null check (char_length(ip_hash) = 64)
);

alter table public.contact_submissions enable row level security;
alter table public.contact_rate_limits enable row level security;

revoke all on public.contact_submissions from anon, authenticated;
revoke all on public.contact_rate_limits from anon, authenticated;

grant usage on schema public to service_role;
grant insert, select on public.contact_submissions to service_role;
grant insert, select, delete on public.contact_rate_limits to service_role;
```

No public RLS policies are required for these tables because the client never
accesses them directly.

## Available Scripts

| Command                   | What it does                                        |
| ------------------------- | --------------------------------------------------- |
| `npm run dev`             | Starts the Next.js development server.              |
| `npm run build`           | Creates a production build.                         |
| `npm run start`           | Starts the production server after `npm run build`. |
| `npm run lint`            | Runs ESLint.                                        |
| `npm run typecheck`       | Runs TypeScript with `--noEmit`.                    |
| `npm run format`          | Formats the project with Prettier.                  |
| `npm run format:check`    | Checks formatting without writing changes.          |
| `npm run test`            | Runs unit tests, then E2E tests.                    |
| `npm run test:unit`       | Runs Vitest once.                                   |
| `npm run test:unit:watch` | Runs Vitest in watch mode.                          |
| `npm run test:e2e`        | Runs Playwright E2E tests.                          |
| `npm run test:e2e:ui`     | Opens the Playwright UI.                            |

Install Playwright browsers before the first E2E run:

```bash
npx playwright install
```

CI uses:

```bash
npx playwright install --with-deps
```

## Project Structure

```txt
personal-portfolio
|-- .github
|   \-- workflows
|       \-- ci.yml
|-- public
|-- src
|   |-- app
|   |   |-- api/contact/route.ts
|   |   |-- about
|   |   |-- blog
|   |   |-- contact
|   |   |-- experience
|   |   |-- projects
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- page.tsx
|   |   |-- robots.ts
|   |   \-- sitemap.ts
|   |-- components
|   |-- content
|   |-- lib
|   |-- types
|   \-- mdx-components.tsx
|-- tests
|   \-- e2e
|-- next.config.ts
|-- package.json
|-- playwright.config.ts
|-- tsconfig.json
|-- vitest.config.mts
\-- vitest.setup.ts
```

Generated or local-only folders such as `.next/`, `node_modules/`,
`playwright-report/`, `test-results/`, `coverage/`, and `.env*` are ignored.

## Key Files

| File                                         | Purpose                                                       |
| -------------------------------------------- | ------------------------------------------------------------- |
| `src/content/site.ts`                        | Site metadata, navigation, and external links.                |
| `src/content/projects.ts`                    | Project data used by the projects page and case study routes. |
| `src/content/blog-posts.ts`                  | Blog post metadata and reading-time setup.                    |
| `src/content/blog/*.mdx`                     | Blog post bodies.                                             |
| `src/content/case-studies/*.mdx`             | Project case study bodies.                                    |
| `src/app/api/contact/route.ts`               | Contact form API route.                                       |
| `src/lib/validations/contact.ts`             | Shared contact form validation rules.                         |
| `src/lib/security/request-origin.ts`         | Allowed-origin logic for contact submissions.                 |
| `src/lib/security/contact-rate-limit.ts`     | Supabase-backed rate limiting.                                |
| `src/lib/supabase/server.ts`                 | Server-only Supabase client.                                  |
| `src/lib/email/send-contact-notification.ts` | Resend notification email helper.                             |
| `src/lib/project-filters.ts`                 | Search and filter logic for projects.                         |
| `.github/workflows/ci.yml`                   | CI workflow.                                                  |

## Editing Content

Update site-wide details in:

```txt
src/content/site.ts
```

Add or edit projects in:

```txt
src/content/projects.ts
```

If a project has a case study, add the MDX body in:

```txt
src/content/case-studies/
```

Add or edit blog metadata in:

```txt
src/content/blog-posts.ts
```

Add the matching blog MDX file in:

```txt
src/content/blog/
```

The slug in the metadata must match the route and MDX file convention used by
the existing content.

## Contact Form Flow

1. The user submits the form on `/contact`.
2. `src/components/contact/contact-form.tsx` posts JSON to `/api/contact`.
3. `src/app/api/contact/route.ts` checks content type, request size, origin,
   honeypot value, form age, and Zod validation.
4. `checkContactRateLimit()` hashes the client IP with
   `CONTACT_RATE_LIMIT_SECRET` and records the attempt in Supabase.
5. Valid submissions are inserted into `contact_submissions`.
6. A notification email is sent through Resend.
7. If email sending fails after the database insert, the route logs the email
   failure but still returns success to the user.

Rate limits are currently:

- 3 submissions per 10 minutes.
- 10 submissions per day.

## Testing

Run the main quality checks before opening a PR:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Unit tests live alongside source files, for example:

```txt
src/lib/utils.test.ts
src/lib/project-filters.test.ts
```

E2E tests live in:

```txt
tests/e2e/
```

Playwright starts the Next.js dev server automatically using the configuration
in `playwright.config.ts`.

## CI

GitHub Actions runs from:

```txt
.github/workflows/ci.yml
```

The workflow runs on:

- Pull requests to `master`.
- Pushes to `master`.

CI performs:

```txt
npm ci
npx playwright install --with-deps
npm run lint
npm run typecheck
npm run test
npm run build
```

The workflow uses placeholder environment variables so real Supabase, Resend,
and rate-limit secrets are not committed.

## Deployment

The project is intended to deploy on Vercel.

Before deploying, configure the environment variables in Vercel for the target
environment:

- `NEXT_PUBLIC_SITE_URL`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `CONTACT_NOTIFICATION_EMAIL`
- `CONTACT_FROM_EMAIL`
- `CONTACT_RATE_LIMIT_SECRET`

After changing Vercel environment variables, redeploy the affected environment.

Deployment checks:

- The site builds successfully.
- `/sitemap.xml` and `/robots.txt` render.
- `/contact` loads.
- A valid contact submission returns `201`.
- Supabase receives rows in `contact_submissions` and `contact_rate_limits`.
- The notification email arrives.
- Browser bundles do not expose server-only secrets.

## Security Notes

- `.env*` files are ignored.
- Supabase service role access is server-only.
- The browser never receives Supabase service keys, Resend keys, or the
  rate-limit secret.
- Contact submissions store name, email, message, source, status, and
  timestamps.
- Raw IP addresses are not stored. Rate limiting stores a SHA-256 hash created
  from the client IP and `CONTACT_RATE_LIMIT_SECRET`.
- Contact table access should remain unavailable to `anon` and `authenticated`
  Supabase roles.
- Do not add public insert policies for the contact tables unless the contact
  architecture is intentionally changed.

## Troubleshooting

### Contact form returns 403

Check `NEXT_PUBLIC_SITE_URL`. It must be an origin such as:

```txt
https://your-domain.com
```

Do not include a path such as `/contact`.

### Contact form returns 500

Check that these variables exist in the running environment:

```txt
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
CONTACT_RATE_LIMIT_SECRET
```

Also check Supabase grants for `contact_submissions` and
`contact_rate_limits`.

### Submission works but no email arrives

Check:

- `RESEND_API_KEY`
- `CONTACT_NOTIFICATION_EMAIL`
- `CONTACT_FROM_EMAIL`
- Resend sender/domain verification
- Vercel function logs

### Playwright fails because browsers are missing

Run:

```bash
npx playwright install
```

### CI branch confusion

The current primary branch is `master`, not `main`. Workflow triggers, branch
protection, and PR targets should use `master` unless the repository is renamed
later.
