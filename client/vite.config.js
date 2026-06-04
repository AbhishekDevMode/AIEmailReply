import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Fixed the package name ordering here!
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})