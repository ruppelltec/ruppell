import { useState, useEffect } from "react";
import { Expert, ServiceError } from "../types";
import { getExperts } from "../services/expertService";
import staticData from "../data.json";

export const useExperts = () => {
  const [experts, setExperts] = useState<Expert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ServiceError | null>(null);

  useEffect(() => {
    const loadExperts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getExperts();
        
        // Validación defensiva: asegurar que data es un array válido
        if (Array.isArray(data) && data.length > 0) {
          setExperts(data);
        } else {
          console.warn("useExperts: API returned invalid data, using static fallback", data);
          setExperts(staticData.experts || []);
        }
      } catch (err) {
        const serviceError = err as ServiceError;
        console.error("Failed to load experts", serviceError);
        setError(serviceError);
        
        // Asegurar que siempre tenemos un array como fallback
        const fallbackData = staticData.experts;
        if (Array.isArray(fallbackData)) {
          setExperts(fallbackData);
        } else {
          console.error("Static data is also invalid, using empty array");
          setExperts([]);
        }
      } finally {
        setLoading(false);
      }
    };

    loadExperts();
  }, []);

  return { experts, loading, error };
};