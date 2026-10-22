import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://galm007.github.io',
  base: '/portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
