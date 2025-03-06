import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts({ include: ['lib'] })],
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
            public: path.resolve(__dirname, 'public'),
            lib: path.resolve(__dirname, 'lib'),
        },
    },
    build: {
        lib: {
            entry: {
                main: path.resolve(__dirname, 'lib/main.ts'),
                token: path.resolve(__dirname, 'lib/token/index.ts'),
                system: path.resolve(__dirname, 'lib/system/index.ts'),
                wallet: path.resolve(__dirname, 'lib/wallet/index.ts'),
                'constants/imagePaths': path.resolve(__dirname, 'lib/constants/imagePaths.ts'),
            },
            formats: ['es'],
            fileName: (format, entryName) => {
                switch (entryName) {
                    case 'main':
                        return `main.${format}.js`;
                    case 'constants/imagePaths':
                        return `constants/imagePaths.${format}.js`;
                    default:
                        return `${entryName}/index.${format}.js`;
                }
            },
        },
        copyPublicDir: false, // ! disable copy public folder
        rollupOptions: {
            external: ['react', 'react/jsx-runtime', '@emotion/react', '@emotion/styled', '@mui'], // ! remove the code from bundle
            output: {
                dir: 'dist',
                entryFileNames: (chunkInfo) => {
                    switch (chunkInfo.name) {
                        case 'main':
                            return 'main.js';
                        case 'constants/imagePaths':
                            return 'constants/imagePaths.js';
                        default:
                            return `${chunkInfo.name}/index.js`;
                    }
                },
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]',
            },
        },
    },
});
