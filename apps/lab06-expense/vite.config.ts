import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // -------------------------------------------------
  // 👇 เพิ่ม 2 บรรทัดนี้ เพื่อแก้ปัญหา GitHub Pages หาไม่เจอ
  // -------------------------------------------------
  base: './', 
  build: {
    outDir: 'docs',
  }
  // -------------------------------------------------
})