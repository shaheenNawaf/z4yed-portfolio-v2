import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    headers: {
      "Content-Security-Policy": "frame-src 'self' https://www.facebook.com;",
    }
  }
});