import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import fs from 'node:fs'

// https://vite.dev/config/
export default defineConfig(() => {
    const lang = process.env.LANG || 'en'

    return {
        plugins: [
            react(),
            tailwindcss(),
            {
                name: 'move-index-to-root',
                closeBundle: async () => {
                    const sourceFile = resolve(__dirname, `dist/buildLocales/${lang}/index.html`)

                    const targetFile = resolve(__dirname, 'dist/index.html')

                    if (fs.existsSync(sourceFile)) {
                        const content = fs.readFileSync(sourceFile, 'utf-8')

                        fs.writeFileSync(targetFile, content)

                        fs.rmSync(resolve(__dirname, 'dist/buildLocales'), { recursive: true, force: true })
                    }
                }
            }
        ],
        build: {
            outDir: `dist`,
            emptyOutDir: true,
            rollupOptions: {
                input: resolve(__dirname, `buildLocales/${lang}/index.html`)
            }
        }
    }
})