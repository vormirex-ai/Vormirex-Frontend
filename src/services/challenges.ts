import { axiosInstance } from "./axiosInstance";

// Get Today's Challenge
export const getTodayChallenge = async () => {
  try {
    const response = await axiosInstance.get("/challenges/today");
    return response.data;
  } catch (error: any) {
    console.error("Error while fetching today's challenge:", error.response);
    return error.response?.data;
  }
};

// Submit Challenge
export const submitChallenge = async (payload: any) => {
  try {
    const response = await axiosInstance.post("/challenges/submit", payload);
    return response.data;
  } catch (error: any) {
    console.error("Error while submitting challenge:", error.response);
    return error.response?.data;
  }
};

// Get Challenge History
export const getChallengeHistory = async () => {
  try {
    const response = await axiosInstance.get("/challenges/history");
    return response.data;
  } catch (error: any) {
    console.error("Error while fetching challenge history:", error.response);
    return error.response?.data;
  }
};

// Get User Streak
export const getUserStreak = async () => {
  try {
    const response = await axiosInstance.get("/challenges/streak");
    return response.data;
  } catch (error: any) {
    console.error("Error while fetching user streak:", error.response);
    return error.response?.data;
  }
};

// Get Challenge Calendar by Month
export const getChallengeCalendar = async (month: string) => {
  try {
    const response = await axiosInstance.get(`/challenges/calendar/${month}`);
    return response.data;
  } catch (error: any) {
    console.error("Error while fetching challenge calendar:", error.response);
    return error.response?.data;
  }
};
