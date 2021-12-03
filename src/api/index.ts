import { get, post } from './http';
const env = process.env.NODE_ENV === 'development' ? '' : 'https://soa.lonsid.cn/';
export const getMenus = () => get(`${env}/api/getMenus`);
export const getShopVariety = () => get(`${env}/api/getShopVariety`);
export const getShopCommodityLsit = () => get(`${env}/api/getShopCommodityLsit`);
export const getCommodityDetail = (data: any) => get(`${env}/api/getCommodityDetail`, data);
