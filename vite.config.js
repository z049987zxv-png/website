import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // 👇 這行是關鍵：自動判斷環境
    // 如果是 'production' (要部署了) -> 使用 '/website/'
    // 如果是 'development' (本地開發) -> 使用 '/' (根目錄)
    base: mode === 'production' ? '/website/' : '/',
  }
})