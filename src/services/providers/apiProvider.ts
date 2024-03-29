// import axios, { AxiosRequestConfig } from "axios";
// // import { TOKEN_KEY } from "../constants";
// const TOKEN_KEY = " TOKEN_KEY"

// const axiosInstance = axios.create();
// // @ts-ignore
// axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
//   const token = localStorage.getItem(TOKEN_KEY);
//   if (token) {
//     if (request.headers) {
//       request.headers["Authorization"] = `Bearer ${token}`;
//     } else {
//       request.headers = {
//         Authorization: `Bearer ${token}`,
//       };
//     }
//   }
//   return request;
// });

// axiosInstance.interceptors.response.use(
//   (response: any) => {
//     return response;
//   },
//   (error: any) => {
//     // const customError: HttpError = {
//     //   ...error,
//     //   message: error.response?.data?.message || error.response?.data?.detail,
//     //   statusCode: error.response?.status || error.response?.statusCode,
//     // };

//     // return Promise.reject(customError);
//   }
// );

// export default axiosInstance;

export {

}