import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router/index';
import Vant from 'vant';
import { Toast } from 'vant';
import 'lib-flexible/flexible';
import 'vant/lib/index.css';
import './assets/Iconfont/iconfont.js';
import './assets/Iconfont/iconfont.css';


let app = createApp(App);
import '@/util/permission';

app.config.globalProperties.$Toast = Toast

app
  // .use(Toast)
  .use(Vant)
  .use(router)
  .use(store)
  .mount("#app");