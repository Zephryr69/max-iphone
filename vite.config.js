// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/max-iphone/', // le nom EXACT de ton repo GitHub
  plugins: [react()],
});
