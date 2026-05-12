import axios from "axios";

import { store } from "@/store/store";

const API_ROOT = import.meta.env.VITE_API_URL || "http://localhost/api";

export const axiosInstance = axios.create({
  baseURL: API_ROOT,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = store.getState().auth.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
