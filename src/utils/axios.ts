import axios from 'axios';
// config
import { HOST_API } from '../config';

// ----------------------------------------------------------------------
// ec2-18-234-121-45.compute-1.amazonaws.com
export const makeRequest = axios.create({
  baseURL: "http://localhost:4000/api/",
  withCredentials: true
})
const axiosInstance = axios.create({
  baseURL: HOST_API,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
