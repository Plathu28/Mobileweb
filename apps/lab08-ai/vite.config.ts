/// <reference types="vitest" />
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// เปลี่ยนบรรทัดข้างล่างนี้ครับ
import { defineConfig } from 'vitest/config' 

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    legacy()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: '../../docs/lab08',
    emptyOutDir: true,
  },
  test: { // ตอนนี้ TypeScript จะไม่บ่นแล้วครับ
    globals: true,
    environment: 'jsdom'
  }
})