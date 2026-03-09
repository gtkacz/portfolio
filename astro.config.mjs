import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.tkacz.dev.br',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
