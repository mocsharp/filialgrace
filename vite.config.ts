import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync, statSync } from 'node:fs'
import { join } from 'node:path'

// Emulate GitHub Pages "extensionless URL" resolution for `vite preview`.
// vite-react-ssg with dirStyle:'nested' emits dist/<route>/index.html.
// GitHub Pages will resolve /contact → /contact/index.html automatically.
// `vite preview` does not, so map it explicitly.
function nestedRoutePreviewFallback(): PluginOption {
  return {
    name: 'nested-route-preview-fallback',
    configurePreviewServer(server) {
      const dist = join(server.config.root, server.config.build.outDir);
      server.middlewares.use((req, _res, next) => {
        if (!req.url || req.method !== 'GET') return next();
        const [pathname] = req.url.split('?');
        if (pathname === '/' || pathname.includes('.') || pathname.endsWith('/')) {
          return next();
        }
        const candidate = join(dist, pathname, 'index.html');
        if (existsSync(candidate) && statSync(candidate).isFile()) {
          req.url = pathname + '/' + (req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), nestedRoutePreviewFallback()],
  base: '/', // Change to '/filialgrace/' if deploying to username.github.io/filialgrace/
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
  ssgOptions: {
    dirStyle: 'nested',
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: isSsrBuild
        ? {}
        : {
            manualChunks: {
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              'i18n': ['react-i18next', 'i18next', 'i18next-browser-languagedetector'],
              'animation': ['framer-motion'],
            },
          },
    },
  },
}))
