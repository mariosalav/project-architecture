import { defineConfig } from 'vite';
import path from 'node:path';
import dts from 'rollup-plugin-dts';
import react from '@vitejs/plugin-react';
import { name } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/components/index.ts'),
            name,
            fileName: (format) => `${name}.${format}.ts`,
            formats: ['es'],
        },
    },
});
