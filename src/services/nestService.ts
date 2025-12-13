import api from "../api/axios";
import { Nest, ServiceError } from "../types";

export const getNests = async (): Promise<Nest[]> => {
  try {
    const response = await api.get<Nest[]>("/nests");
    return response.data;
  } catch (error: any) {
    console.error("Error loading nests:", error);
    const serviceError: ServiceError = {
      message: error?.response?.data?.message || "Failed to load nests",
      code: error?.response?.status?.toString() || "UNKNOWN_ERROR",
      status: error?.response?.status
    };
    throw serviceError;
  }
};
