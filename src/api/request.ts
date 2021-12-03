import axios from 'axios';
import { Toast } from 'vant';
const baseURL = '';
const requestTimeout = 10000;
const instance = axios.create({
  baseURL,
  timeout: requestTimeout,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

instance.interceptors.request.use(
  (config) => {
    Toast.loading({
      duration: 0,
      forbidClick: true,
      message: '请求中...',
    });
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
instance.interceptors.response.use(
  (response) => {
    Toast.clear();
    const res = response.data;
    return res;
  },
  (error) => {
    Toast.clear();
    const { response } = error;
    if (response && response.data) {
      return Promise.reject(error);
    } else {
      const { message } = error;
      console.log(message);
      return Promise.reject(error);
    }
  },
);

export default instance;
