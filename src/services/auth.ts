import { axiosInstance } from "./axiosInstance";
import { LoginDateType, SignupDataType } from "@/interface/auth.interface";

export const AuthenticateSignup = async (data: SignupDataType) => {
  try {
    const response = await axiosInstance.post("/signup", data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const AuthenticateLogin = async (data: LoginDateType) => {
  try {
    const response = await axiosInstance.post("/login", data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const ForgetPassword = async (data: { email: string }) => {
  try {
    const response = await axiosInstance.post("/forgot-password", data);

    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
