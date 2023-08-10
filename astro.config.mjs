import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  site: 'https://MikierXXV.github.io',
  base: '/blog-astro-test',
});