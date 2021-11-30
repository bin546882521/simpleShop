import axios from "axios";

const get = (url: string, params?: any) => {
  // return axios.get(url, { params });
 
  return new Promise((resolve, reject) => {
    console.log(url);
    axios
      .get(url, { params: params })
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((err) => {
        console.log(url);
        reject(err);
      });
  });
};

// const post = (url: string, params?: any) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(url, qs.stringify(params))
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };

//将二次封装好的axios导出
export { get };
