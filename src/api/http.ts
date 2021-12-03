import { CellGroup } from 'vant';
import request from './request';

const get = (url: string, params: any = {}) => {
  return new Promise((resolve, reject) => {
    request
      .get(url, { data: params })
      .then((response: any) => {
        resolve(response);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

const post = (url: string, data: any = {}) => {
  return new Promise((resolve, reject) => {
    request
      .post(url, data)
      .then((response: any) => {
        resolve(response);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

//将二次封装好的请求导出
export { get, post };
