# flipfeedback-marketing

The FlipFeedback corporate marketing site at [flipfeedback.com](https://flipfeedback.com).

## What this is

The public marketing and corporate site for the company. It positions FlipFeedback in the
marketing and campaign-optimization space: a feedback inbox and analytics product for teams
that want one place to collect, triage, and understand feedback. The site links out to the
product app at [app.flipfeedback.com](https://app.flipfeedback.com) for sign up and sign in.

## Stack

- [Astro](https://astro.build/) (static output) + TypeScript.
- No backend. Builds to plain HTML/CSS/JS in `./dist`.
- Self-contained styling (CSS custom properties, no UI framework). Inter loaded from Google
  Fonts.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: hero, features, how it works, social proof, CTA |
| `/product` | Product: inbox, triage, analytics, connections |
| `/pricing` | Pricing: three plans plus FAQ |
| `/about` | About: story, values, founders |
| `/contact` | Contact: mailto-based form and contact channels |
| `/blog` | Blog index |
| `/blog/[slug]` | Blog posts (Markdown content collection) |
| `/404` | Not-found page |

## Develop

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
```

## Build

```bash
npm run build      # static output to ./dist
npm run preview    # serve the built ./dist locally
npm run check      # astro type check
```

The `./dist` directory is the deployable artifact: static files synced to S3 and served via
CloudFront by [flipfeedback-infra](../flipfeedback-infra).

## Project layout

```
src/
  config.ts              site constants, nav, and app links
  layouts/BaseLayout.astro
  components/            Header, Footer, Logo, CtaBanner
  pages/                 one file per route (+ blog/)
  content/blog/          Markdown blog posts (content collection)
  styles/global.css      design tokens and base styles
public/                  robots.txt, sitemap.xml, static assets
```

## CI / deploy

- `.github/workflows/ci.yml`: install, type check, and build on every push and PR.
- `.github/workflows/deploy.yml`: build and deploy to S3 + CloudFront on push to `main`.
  The deploy step no-ops until the AWS target (role ARN, bucket, distribution) is configured
  as repository variables, so the repo stays green before infra is wired up.

## Editing content

- Marketing copy lives in the `.astro` page files under `src/pages`.
- Brand strings, navigation, and app links are centralized in `src/config.ts`.
- Blog posts are Markdown files in `src/content/blog/` with frontmatter
  (`title`, `description`, `pubDate`, `author`, `tags`).

## Links

- Overview and coverage map: [../flipfeedback-range](../flipfeedback-range)
- DNS and hosting: [../flipfeedback-infra](../flipfeedback-infra)
- Team identities: [../flipfeedback-ops](../flipfeedback-ops)
