import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    headers: {
      "Content-Security-Policy": "frame-src 'self' https://www.facebook.com;",
    }
  }
});