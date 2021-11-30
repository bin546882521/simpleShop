import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      /*
      路径别名
      若为文件系统路径必须是绝对路径的形式，否则将以别名原样呈现，不会解析为文件系统路径路径 
    */
      //'@': process.cwd()+'/src'
      //'@':path.resolve('src')
      //'@':path.resolve(__dirname, 'src')
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [vue()],

  /*
    Project root directory/项目根目录（index.html所在位置），可以是绝对路径，也可以是相对于本配置文件的路径。
    default：process.cwd() 返回 Node.js 进程的当前工作目录
  */
  //root:process.cwd(),

  /*
    Default: /
    Base public path (应用基础请求路径) when served in development or production. Valid values include:
    
    Absolute URL pathname, e.g. /foo/
    Full URL, e.g. https://foo.com/
    Empty string or ./ (for embedded deployment)
  */
  // base: '/admin/',

  publicDir: 'public',

 

  //vite开发服务器配置
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
    strictPort: false,
    https: false,

    // 反向代理
    // proxy: {
    //   '/admin': {
    //     target: 'http://api.vite-admin.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/admin/, '')
    //   },
    // }

    //proxy: {
    //   // string shorthand
    //   '/foo': 'http://localhost:4567/foo',
    //   // with options
    //   '/api': {
    //     target: 'http://jsonplaceholder.typicode.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   },
    //   // with RegEx
    //   '^/fallback/.*': {
    //     target: 'http://jsonplaceholder.typicode.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/fallback/, '')
    //   }
    // }
  },

  //生产模式打包配置
  build: {
    outDir: 'dist', //Specify the output directory (relative to project root).
  },
});
