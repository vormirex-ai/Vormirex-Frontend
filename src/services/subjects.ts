import { axiosInstance } from "./axiosInstance";

export const getAllSubjects = async (page = 1, limit = 10) => {
  try {
    const response = await axiosInstance.get(
      `/subjects?page=${page}&limit=${limit}`,
      {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      },
    );

    return response.data;
  } catch (error: any) {
    return (
      error.response?.data || {
        success: false,
        message: "Network error",
      }
    );
  }
};

export const getSubjectDetailsById = async (subjectId: string) => {
  try {
    const response = await axiosInstance.get(`/subjects/${subjectId}`);
    return response.data;
  } catch (error: any) {
    return error.response?.data || { success: false };
  }
};

export const getSubjectCurriculumById = async (subjectId: string) => {
  try {
    const response = await axiosInstance.get(
      `/subjects/${subjectId}/curriculum`,
    );

    return response.data;
  } catch (error: any) {
    return error.response?.data || { success: false };
  }
};

export const getSubjectContinueById = async (subjectId: string) => {
  try {
    const response = await axiosInstance.get(`/subjects/${subjectId}/continue`);

    return response.data;
  } catch (error: any) {
    return error.response?.data || { success: false };
  }
};

export const getSubjectLessonsById = async (subjectId: string) => {
  try {
    const response = await axiosInstance.get(`/lessons/${subjectId}`);

    return response.data;
  } catch (error: any) {
    return error.response?.data || { success: false };
  }
};

export const updateLessonProgress = async (subjectId: string) => {
  try {
    const response = await axiosInstance.post(`/lessons/${subjectId}/progress`);

    return response.data;
  } catch (error: any) {
    return error.response?.data || { success: false };
  }
};

export const completeSubjectCurriculum = async (subjectId: string) => {
  try {
    const response = await axiosInstance.post(`/lessons/${subjectId}/complete`);
    return response.data;
  } catch (error: any) {
    return error.response?.data || { success: false };
  }
};
