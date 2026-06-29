# flipfeedback-marketing

The FlipFeedback corporate marketing site at flipfeedback.com.

## What this is

The public marketing and corporate site for the company. It positions FlipFeedback in the
marketing and campaign optimization space: a feedback inbox and analytics product for
businesses that want one place to collect, triage, and understand feedback.

## What it maps to

Detection surface: web-security. As an internet-facing site it can organically grow the
website archetypes: an EOL stack or known-CVE dependency, or leaked internal detail
(published source maps, verbose responses). See the coverage map in flipfeedback-range.

## Current state: STUB

No site yet. This README is the signpost.

## Direction to flesh out

A small, ordinary corporate site: home, product, pricing, about, contact, maybe a blog.
Believable for a small SaaS startup with a couple of human founders and a few staff (see
flipfeedback-ops for the team identities). Built and changed by the agent harness over
time, so the commit history looks real. Weakness emerges organically, never planted.

DNS for flipfeedback.com is managed in the flipfeedback-lab AWS account (Route 53), giving
the platform a real DNS surface alongside the web surface. See flipfeedback-infra.

## Open questions

- Confirm branding/voice from the existing flipfeedback.com identity.

## Links

- Overview and coverage map: ../flipfeedback-range
- DNS and hosting: ../flipfeedback-infra
- Team identities: ../flipfeedback-ops
