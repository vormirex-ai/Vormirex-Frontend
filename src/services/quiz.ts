import { axiosInstance } from "./axiosInstance";

// Submit Quiz
export const submitQuiz = async (data: any) => {
  try {
    const response = await axiosInstance.post("/quizzes/submit", data);
    return response.data;
  } catch (error: any) {
    console.error("Error while submitting quiz :", error.response);
    return error.response?.data;
  }
};

// Get Quiz Stats
export const getQuizStats = async () => {
  try {
    const response = await axiosInstance.get("/quizzes/stats");
    return response.data;
  } catch (error: any) {
    console.error("Error while getting quiz stats :", error.response);
    return error.response?.data;
  }
};

// Get Quiz History
export const getQuizHistory = async () => {
  try {
    const response = await axiosInstance.get("/quizzes/history");
    return response.data;
  } catch (error: any) {
    console.error("Error while getting quiz history :", error.response);
    return error.response?.data;
  }
};

// Get Quiz History By Subject ID
export const getQuizHistoryBySubjectId = async (subjectId: string) => {
  try {
    const response = await axiosInstance.get(`/quizzes/history/${subjectId}`);
    return response.data;
  } catch (error: any) {
    console.error("Error while getting subject quiz history :", error.response);
    return error.response?.data;
  }
};

// Get Question By Question ID
export const getQuestionById = async (questionId: string) => {
  try {
    const response = await axiosInstance.get(
      `/quizzes/questions/${questionId}`,
    );
    return response.data;
  } catch (error: any) {
    console.error("Error while getting question details :", error.response);
    return error.response?.data;
  }
};

// Get Questions By Subject ID
export const getQuizQuestionsBySubjectId = async (subjectId: string) => {
  try {
    const response = await axiosInstance.get(`/quizzes/${subjectId}/questions`);
    return response.data;
  } catch (error: any) {
    console.error("Error while getting quiz questions :", error.response);
    return error.response?.data;
  }
};
