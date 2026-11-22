import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        planYourVisit: resolve(__dirname, 'plan-your-visit.html'),
        ministries: resolve(__dirname, 'ministries.html'),
        prayer: resolve(__dirname, 'prayer.html'),
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
