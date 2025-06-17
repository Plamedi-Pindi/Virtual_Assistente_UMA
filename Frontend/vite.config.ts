import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Pasta de saída do build (padrão: 'dist')
    emptyOutDir: true, // Limpa a pasta de saída antes do build
    sourcemap: true, // Gera source maps para debug
  }
})
