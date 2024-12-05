import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
    plugins: [vue(), vuetify()],
    base: '/GreenEnergyPlan/',
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    build: {
        outDir: 'C://xampp/htdocs/test',
    },
    server: {
        watch: {
            usePolling: true,
        },
    },
});
