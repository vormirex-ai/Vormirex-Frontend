import axios from "axios";
import { store } from "@/store/store";
import { setCredentials, logout } from "@/store/slice/authSlice";

const API_ROOT = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const axiosInstance = axios.create({
  baseURL: API_ROOT,
  withCredentials: true,
});

const refreshClient = axios.create({
  baseURL: API_ROOT,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error),
);

let isRefreshing = false;

let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    const status = error.response?.status;

    const isAuthRoute =
      originalRequest?.url?.includes("/auth/login") ||
      originalRequest?.url?.includes("/auth/signup") ||
      originalRequest?.url?.includes("/auth/logout") ||
      originalRequest?.url?.includes("/auth/refresh");

    if (originalRequest?.url?.includes("/auth/refresh")) {
      store.dispatch(logout());

      return Promise.reject(error);
    }

    if (
      (status === 401 || status === 403) &&
      !originalRequest._retry &&
      !isAuthRoute
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve,
            reject,
          });
        }).then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;

          return axiosInstance(originalRequest);
        });
      }

      isRefreshing = true;

      try {
        const refreshResponse = await refreshClient.post("/auth/refresh");

        const newToken =
          refreshResponse.data.accessToken || refreshResponse.data.token;

        if (!newToken) {
          throw new Error("No token received");
        }

        store.dispatch(
          setCredentials({
            user: store.getState().auth.user,
            token: newToken,
          }),
        );

        axiosInstance.defaults.headers.common.Authorization = `Bearer ${newToken}`;
        processQueue(null, newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return axiosInstance(originalRequest);
      } catch (err) {
        processQueue(err, null);

        store.dispatch(logout());

        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);
