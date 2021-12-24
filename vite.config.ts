import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from 'vite-preset-react';

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: 'build',
  },
  plugins: [react(), svgr()],
});
