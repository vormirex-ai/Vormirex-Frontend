import { axiosInstance } from "./axiosInstance";

export const getAllCourses = async () => {
  try {
    const response = await axiosInstance.get("/subjects");
    return response.data;
  } catch (error: any) {
    console.error("Error while getting all subjects :", error.response);
    return error.response.data;
  }
};

export const getSubjectDetailsById = async (subjectId: string) => {
  try {
    const response = await axiosInstance.get(`/subjects/${subjectId}`);
    return response.data;
  } catch (error: any) {
    console.error("Error while getting subject details :", error.response);
    return error.response.data;
  }
};

export const getSubjectCurriculumById = async (subjectId: string) => {
  try {
    const response = await axiosInstance.get(
      `/subjects/${subjectId}/curriculum`,
    );
    return response.data;
  } catch (error: any) {
    console.error("Error while getting subject curriculum :", error.response);
    return error.response.data;
  }
};
