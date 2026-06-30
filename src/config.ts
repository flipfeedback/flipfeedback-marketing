// Shared site constants. One place for brand strings, nav, and app links.

export const SITE = {
  name: 'FlipFeedback',
  domain: 'flipfeedback.com',
  url: 'https://flipfeedback.com',
  tagline: 'One inbox for every piece of feedback.',
  description:
    'FlipFeedback is the feedback inbox and analytics platform for marketing teams. Collect feedback from every campaign and channel, triage it in one place, and turn it into trends you can act on.',
  email: 'hello@flipfeedback.com',
  supportEmail: 'support@flipfeedback.com',
} as const;

// Links into the product app. The marketing site only links out to these.
export const APP = {
  base: 'https://app.flipfeedback.com',
  signin: 'https://app.flipfeedback.com/signin',
  signup: 'https://app.flipfeedback.com/signup',
} as const;

export const NAV = [
  { label: 'Product', href: '/product' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_LINKS = {
  Product: [
    { label: 'Overview', href: '/product' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Sign in', href: APP.signin },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;
