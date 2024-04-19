import axios from 'axios';
import { useEffect, useState } from 'react';
// config
import { HOST_API } from '../config';

// ----------------------------------------------------------------------
const BASE_URL = "http://localhost:4000/api/"
const TOKEN = localStorage.getItem("access_token");
// const [token, setToken] = useState<string>("");

// useEffect(() => {
//   let token = localStorage.getItem("access_token") || "";
//   setToken(token);
// })
// console.log(token)

// ec2-100-24-244-112.compute-1.amazonaws.com
export const publicRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}`}
})
// const axiosInstance = axios.create({
//   baseURL: HOST_API,
//   withCredentials: true
// });

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject((error.response &&Home

// export default axiosInstance;
