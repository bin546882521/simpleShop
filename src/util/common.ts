import { ComponentInternalInstance, getCurrentInstance } from "vue";

// 修复Vue3 getCurrentInstance与ts结合使用的问题
const useCurrentInstance = () => {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const proxy = appContext.config.globalProperties;
  return {
    proxy,
  };
};
export { useCurrentInstance };