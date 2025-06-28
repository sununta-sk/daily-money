import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/daily-money/',
  plugins: [
    tailwindcss(),
  ],
})