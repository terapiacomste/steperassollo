import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://terapiacomste.github.io',
  base: '/terapiacomste',
  integrations: [tailwind()],
  outDir: 'dist'
});
