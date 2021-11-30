import { ComponentInternalInstance, getCurrentInstance } from "vue";
import { Toast } from 'vant';
// 修复Vue3 getCurrentInstance与ts结合使用的问题
const useCurrentInstance = () => {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const proxy = appContext.config.globalProperties;
  return {
    proxy,
  };
};
//动态更新提示
const delayToast = (fn: Function, wait = 3000) => {
  const toast = Toast.loading({
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner',
  });
  setTimeout(() => {
    toast.clear();
    Toast.success('成功')
    fn()
  }, wait);
  
}

const getLocal = (key: string) => {
  let value: any = localStorage.getItem(key);
  if (value && value != "undefined" && value != "null") {
    return JSON.parse(value);
  }
  return false;
}

const setLocal = (key: string, value: any) => {
  if (value) {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value)
}

export { useCurrentInstance, delayToast, getLocal, setLocal };