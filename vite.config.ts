import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub project pages serve from /<repo>/; set VITE_BASE_URL in CI (see workflow).
const base =
  process.env.VITE_BASE_URL?.replace(/\/?$/, '/') ?? '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
