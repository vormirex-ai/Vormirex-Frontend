import { axiosInstance } from "./axiosInstance";

export const generateRoadmap = async () => {
  try {
    const response = await axiosInstance.post("/roadmaps/generate");
    return response.data;
  } catch (error: any) {
    console.error("Error while generating roadmap:", error.response);
    return error.response?.data;
  }
};

export const getMyRoadmap = async () => {
  try {
    const response = await axiosInstance.get("/roadmaps/my-roadmap");
    return response.data;
  } catch (error: any) {
    console.error("Error while fetching my roadmap:", error.response);
    return error.response?.data;
  }
};
