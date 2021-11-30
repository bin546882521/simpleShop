
import request from "@/utils/request";
// const env = process.env.NODE_ENV === "development" ? "http://localhost:8003" : "";
export function uploadFile(data: any) {
  return request({
    url: '/upload/file',
    data,
    method: 'post'
  })
};
export const getMenus = () => {
  return request({
    url: "/api/getMenus",
    method: "get"
  });
};
export const getShopVariety = () => {
  return request({
    url: "/api/getShopVariety",
    method: "get"
  });
};
export const getShopCommodityLsit = () => {
  return request({
    url: "/api/getShopCommodityLsit",
    method: "get",
  });
};
export const getCommodityDetail = (data:any) => {
  return request({
    url: "/api/getCommodityDetail",
    method: "get",
    data
  });
};
