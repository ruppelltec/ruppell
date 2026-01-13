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
          // Convert data to match Expert type
          const typedData = data.map((expert: any) => ({
            ...expert,
            image: expert.image || '' // Add missing image property
          }));
          setExperts(typedData);
        } else {
          console.warn("useExperts: API returned invalid data, using static fallback", data);
          // Convert static data to match Expert type
          const typedStaticData = staticData.experts.map((expert: any) => ({
            ...expert,
            image: expert.image || '' // Add missing image property
          }));
          setExperts(typedStaticData);
        }
      } catch (err) {
        const serviceError = err as ServiceError;
        console.error("Failed to load experts", serviceError);
        setError(serviceError);
        
        // Asegurar que siempre tenemos un array como fallback
        const fallbackData = staticData.experts;
        if (Array.isArray(fallbackData)) {
          // Convert fallback data to match Expert type
          const typedFallbackData = fallbackData.map((expert: any) => ({
            ...expert,
            image: expert.image || '' // Add missing image property
          }));
          setExperts(typedFallbackData);
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