import api from "../api/axios";
import { Nest, ServiceError } from "../types";

export const getNests = async (): Promise<Nest[]> => {
  try {
    const response = await api.get<Nest[]>("/nests");
    
    // Validación defensiva: asegurar que response.data es un array válido
    const data = response.data;
    if (!Array.isArray(data)) {
      console.warn("getNests: API response is not an array", data);
      throw new Error("Invalid API response format: expected array");
    }
    
    return data;
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
