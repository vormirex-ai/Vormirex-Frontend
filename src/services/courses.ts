import { axiosInstance } from "./axiosInstance";

export const getAllCourses = async () => {
  try {
    const response = await axiosInstance.get("/courses");
    return response.data;
  } catch (error: any) {
    console.error("Error while getting courses api :", error.response);
    return error.response.data;
  }
};

export const getCourseDetailsById = async () => {
  try {
    const response = await axiosInstance.get("/courses/:courseId");
    return response.data;
  } catch (error: any) {
    console.error("Error while getting course details :", error.response);
    return error.response.data;
  }
};
