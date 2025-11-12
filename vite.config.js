import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 部署到 GitHub Pages 时要加上 base 路径
export default defineConfig({
  plugins: [react()],
  base: '/Sunlight-Blog/'
})
