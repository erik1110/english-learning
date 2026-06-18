import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// On GitHub Pages the site is served from /<repo>/, so set the base path for
// production builds. Local dev (`npm run dev`) keeps the root base.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/english-learning/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: false
  }
}))
