import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url';

export default defineConfig({
    plugins: [
        react(),
        url({
            include: ['**/*.jpg', '**/*.png','**/*.gif'],
            limit: 0,
            emitFiles: true,
            fileName: 'assets/[name][hash][extname]',
        }),
    ],
    base: '/',
    build: {
        chunkSizeWarningLimit: 1500,
    },
});
