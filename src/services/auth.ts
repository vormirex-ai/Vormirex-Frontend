import { axiosInstance } from "./axiosInstance";
import { LoginDateType, SignupDataType } from "@/interface/auth.interface";

export const AuthenticateSignup = async (data: SignupDataType) => {
  try {
    const response = await axiosInstance.post("/auth/signup", data);
    return response.data;
  } catch (error: any) {
    console.error("Error while signing up:", error.response);
    return error.response.data;
  }
};

export const AuthenticateLogin = async (data: LoginDateType) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    return response.data;
  } catch (error: any) {
    console.error("Error while logging in:", error.response);
    return error.response.data;
  }
};

export const ForgetPassword = async (data: { email: string }) => {
  try {
    const response = await axiosInstance.post("/auth/forgot-password", data);
    return response.data;
  } catch (error: any) {
    console.error("Error while requesting password reset:", error.response);
    return error.response.data;
  }
};

export const ResetPassword = async (data: {
  token: string;
  password: string;
}) => {
  try {
    const response = await axiosInstance.post("/auth/reset-password", data);
    return response.data;
  } catch (error: any) {
    console.error("Error while resetting password:", error.response);
    return error.response.data;
  }
};
