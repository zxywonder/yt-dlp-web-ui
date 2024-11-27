import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import ViteYaml from '@modyfi/vite-plugin-yaml'
import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    plugins: [
      million.vite({ auto: true }),
      react(),
      ViteYaml(),
    ],

    base: '',
    build: {
      emptyOutDir: true,
      sourceMap: true,
    }, proxy: {
      '/': {
        target: 'http://120.26.230.168:8989',
        changeOrigin: true,
        ws: true,
      },

    // '/rpc/ws': {
    //   target: 'ws://120.26.230.168:8989',
    //   ws: true,// 这里添加 ws: true 以支持 WebSocket
    //   changeOrigin: true,
    //   //rewrite: (path) => path.replace(/~\/rpc\/ws/, "") // 路径转写
    // } 
    }
  }
})
