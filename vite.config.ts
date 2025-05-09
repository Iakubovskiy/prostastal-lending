import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(() => {
    const lang = process.env.LANG || 'en'
    return {
        plugins: [
            react(),
            tailwindcss(),
        ],
        build: {
            outDir: `dist-${lang}`,
            emptyOutDir: true,
            rollupOptions: {
                input: resolve(__dirname, `buildLocales/${lang}/index.html`)
            }
        }
    }
})
