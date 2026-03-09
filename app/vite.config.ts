import { fileURLToPath } from "url"
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
// import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./src"),
    },
  },
});
