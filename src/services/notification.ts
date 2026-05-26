import { axiosInstance } from "./axiosInstance";

export const getNotifications = async () => {
  try {
    const response = await axiosInstance.get("/notifications");
    return response.data;
  } catch (error: any) {
    console.error("Error while fetching notifications:", error.response);
    return error.response?.data;
  }
};

export const markAllNotificationsAsRead = async () => {
  try {
    const response = await axiosInstance.patch("/notifications/read-all");
    return response.data;
  } catch (error: any) {
    console.error(
      "Error while marking all notifications as read:",
      error.response,
    );
    return error.response?.data;
  }
};

export const markNotificationAsRead = async (notificationId: string) => {
  try {
    const response = await axiosInstance.patch(
      `/notifications/${notificationId}/read`,
    );
    return response.data;
  } catch (error: any) {
    console.error("Error while marking notification as read:", error.response);
    return error.response?.data;
  }
};
