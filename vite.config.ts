import { defineConfig } from 'vite';
import path from 'node:path';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import { name, peerDependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name,
      fileName: (format) => `${name}.${format}.ts`,
      formats: ['es'],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
    },
  },
});
