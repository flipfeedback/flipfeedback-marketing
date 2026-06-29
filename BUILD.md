# Build brief: flipfeedback-marketing

For the coding agent assigned to this repo. Read flipfeedback-range first and follow the
harness guardrails. Build a real, ordinary marketing site; never plant vulnerabilities.

## Objective

The corporate marketing site at flipfeedback.com: believable for a small SaaS startup selling
a feedback inbox + analytics product in the marketing/campaign-optimization space.

## Recommended stack

- Static site, Astro recommended (or Next static export). TypeScript. No backend.
- Builds to static assets for S3 + CloudFront (see flipfeedback-infra).

## Scope (v1)

- Home, Product, Pricing, About, Contact, optional Blog.
- Clear positioning and CTAs to app.flipfeedback.com (sign up / sign in).
- Consistent brand with the app and the company identity (see flipfeedback-ops for the team).

## Integration points

- Deploy: build artifacts consumed by flipfeedback-infra (S3 sync + CloudFront invalidate).
- DNS: served at the apex and www of flipfeedback.com (records at GoDaddy, wired by infra).

## Done criteria

- Static build succeeds; pages render; links to the app work.
- CI (GitHub Actions): build + deploy (s3 sync + CloudFront invalidate).

## Workflow

- Pull work from Jira FFSCRUM; reference keys in commits/PRs. Branch and PR.
