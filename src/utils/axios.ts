import axios from 'axios';
// config
import { HOST_API } from '../config';

// ----------------------------------------------------------------------
// ec2-100-24-244-112.compute-1.amazonaws.com
export const makeRequest = axios.create({
  baseURL: "http://ec2-100-24-244-112.compute-1.amazonaws.com/api/",
  withCredentials: true
})
// const axiosInstance = axios.create({
//   baseURL: HOST_API,
//   withCredentials: true
// });

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject((error.response &&Home

// export default axiosInstance;
