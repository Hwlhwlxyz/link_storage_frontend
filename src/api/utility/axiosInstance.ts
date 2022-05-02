import axios from "axios";

export const axiosInstance = axios.create({
    timeout: 1000,
    headers: {'content-type': 'application/json'}
  });