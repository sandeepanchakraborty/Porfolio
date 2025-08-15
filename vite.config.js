import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  base: command === 'build' ? '/Porfolio/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
}))
