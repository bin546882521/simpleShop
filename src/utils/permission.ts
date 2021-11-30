import router from '@/router/index';
import { getLocal } from 'utils/common';
router.beforeEach((to, from, next: Function) => {
  // to表示将要访问的路径
  // form表示从那个页面跳转而来
  // next表示允许跳转到指定位置
  const login:Boolean = getLocal('userinfo').login;
  console.log(login);
  if(login){
    next()
  }else{
    if(to.path === '/login' || to.path === '/register'){
      next();
    }else{
      next({path:'/login'});
    }
  }
})