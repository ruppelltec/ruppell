import api from "../api/axios";
import { Expert, ServiceError } from "../types";

export const getExperts = async (): Promise<Expert[]> => {
  try {
    const response = await api.get<Expert[]>("/experts");
    return response.data;
  } catch (error: any) {
    console.error("Error loading experts:", error);
    const serviceError: ServiceError = {
      message: error?.response?.data?.message || "Failed to load experts",
      code: error?.response?.status?.toString() || "UNKNOWN_ERROR",
      status: error?.response?.status
    };
    throw serviceError;
  }
};
