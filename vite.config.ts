import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Change to '/filialgrace/' if deploying to username.github.io/filialgrace/
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'i18n': ['react-i18next', 'i18next', 'i18next-browser-languagedetector'],
          'animation': ['framer-motion'],
        },
      },
    },
  },
})
