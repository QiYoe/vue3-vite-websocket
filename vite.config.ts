import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, 'src'),
    comps: path.resolve(__dirname, 'src/components'),
    apis: path.resolve(__dirname, 'src/apis'),
    views: path.resolve(__dirname, 'src/views'),
    utils: path.resolve(__dirname, 'src/utils'),
    router: path.resolve(__dirname, 'src/router'),
    styles: path.resolve(__dirname, 'src/styles'),
    plugins: path.resolve(__dirname, 'src/plugins'),
  },
  plugins: [vue()],
})
