import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router/index';
import Vant from 'vant';
import { Toast } from 'vant';
import 'lib-flexible/flexible';
import 'vant/lib/index.css';
//引入阿里图标
import '@/assets/Iconfont/iconfont.js';
import '@/assets/Iconfont/iconfont.css';
import '@/mock/index.ts';

let app = createApp(App);
//路由守卫
import 'utils/permission';
//vite获取环境变量
console.log(import.meta.env.VITE_BASE_ENV as string);

app.config.globalProperties.$Toast = Toast;

app.use(Vant).use(router).use(store).mount('#app');
