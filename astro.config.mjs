import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lashagoch.github.io',
  base: '/',
  markdown: {
    syntaxHighlight: 'prism'
  }
});
