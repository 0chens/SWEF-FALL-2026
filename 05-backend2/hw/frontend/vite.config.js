import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // homework requires the frontend on 3000
    strictPort: true, // fail instead of silently switching ports (CORS only allows 3000)
  },
})
