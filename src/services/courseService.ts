import api from "../api/axios";
import { Category, ServiceError } from "../types";

export const getCourseList = async (): Promise<Category[]> => {
  try {
    const response = await api.get<Category[]>("/courses");
    return response.data;
  } catch (error: any) {
    console.error("Error loading course categories:", error);
    const serviceError: ServiceError = {
      message: error?.response?.data?.message || "Failed to load course categories",
      code: error?.response?.status?.toString() || "UNKNOWN_ERROR",
      status: error?.response?.status
    };
    throw serviceError;
  }
};
