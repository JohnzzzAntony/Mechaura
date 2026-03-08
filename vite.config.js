import { defineConfig } from 'vite'

export default defineConfig({
    // Set base to relative for maximum compatibility (Hostinger & GitHub Pages)
    base: './',
    build: {
        outDir: 'dist',
    },
})
