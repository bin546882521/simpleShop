import { get } from '@/util/http';
const env = process.env.NODE_ENV === "development" ? "http://localhost:8003" : "";

export const getServerTime = () => {
  console.log(process.env.NODE_ENV);
  get(env+"/infomation")
}