import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
    ],
    // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             additionalData: '@import "./resources/js/user/components/header/responsive.scss";',
    //         },
    //     },
    // },
});
