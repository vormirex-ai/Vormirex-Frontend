import { axiosInstance } from "./axiosInstance";

export const getAiTutorChats = async (lessonId: string) => {
  try {
    const response = await axiosInstance.get(`/ai-tutor/chats/${lessonId}`);

    return response.data;
  } catch (error: any) {
    console.error("Error while getting AI tutor chats :", error.response);

    return error.response.data;
  }
};

export const sendAiTutorMessage = async (
  lessonId: string,
  payload: {
    message: string;
  },
) => {
  try {
    const response = await axiosInstance.post(
      `/ai-tutor/chats/${lessonId}/message`,
      payload,
    );

    return response.data;
  } catch (error: any) {
    console.error("Error while sending AI tutor message :", error.response);

    return error.response.data;
  }
};
