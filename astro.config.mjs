import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://corvus-mx.github.io',
  base: '/news',
  output: 'static',
  build: {
    assets: 'assets'
  }
});