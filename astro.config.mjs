// @ts-check
import { defineConfig } from 'astro/config';

// Static marketing site for flipfeedback.com.
// Output is static HTML/CSS/JS in ./dist, synced to S3 + CloudFront by flipfeedback-infra.
export default defineConfig({
  site: 'https://flipfeedback.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
