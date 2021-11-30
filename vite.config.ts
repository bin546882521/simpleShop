import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      /*
      路径别名
      若为文件系统路径必须是绝对路径的形式，否则将以别名原样呈现，不会解析为文件系统路径路径 
     */
      '@': path.resolve(__dirname, './src'),
      assets: path.resolve(__dirname, 'src/assets'),
      comps: path.resolve(__dirname, 'src/components'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  plugins: [
    vue(),
    // viteMockServe({
    //   mockPath: 'mock',
    //   supportTs: true,
    // }),
  ],

  publicDir: 'public',

  //vite开发服务器配置
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
    strictPort: false,
    https: false,

  },

  //生产模式打包配置
  build: {
    outDir: 'dist',
  },
});
