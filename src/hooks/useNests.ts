import { useState, useEffect } from "react";
import { Nest, ServiceError } from "../types";
import { getNests } from "../services/nestService";
import staticData from "../data.json";

export const useNests = () => {
  const [nests, setNests] = useState<Nest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ServiceError | null>(null);

  useEffect(() => {
    const loadNests = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getNests();
        
        // Validación defensiva: asegurar que data es un array válido
        if (Array.isArray(data) && data.length > 0) {
          setNests(data);
        } else {
          console.warn("useNests: API returned invalid data, using static fallback", data);
          setNests(staticData.nests || []);
        }
      } catch (err) {
        const serviceError = err as ServiceError;
        console.error("Failed to load nests", serviceError);
        setError(serviceError);
        
        // Asegurar que siempre tenemos un array como fallback
        const fallbackData = staticData.nests;
        if (Array.isArray(fallbackData)) {
          setNests(fallbackData);
        } else {
          console.error("Static data is also invalid, using empty array");
          setNests([]);
        }
      } finally {
        setLoading(false);
      }
    };

    loadNests();
  }, []);

  return { nests, loading, error };
};