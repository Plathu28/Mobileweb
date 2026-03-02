/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
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
  test: {
    globals: true,
    environment: 'jsdom'
  },
  build: {
    outDir: '../../docs/lab07',
    emptyOutDir: true, // ล้างไฟล์เก่าใน lab07 ก่อน build ใหม่ // เพื่อให้ build ลงโฟลเดอร์ docs โดยตรง
  }
})