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
        setExperts(data);
      } catch (err) {
        const serviceError = err as ServiceError;
        console.error("Failed to load experts", serviceError);
        setError(serviceError);
        setExperts(staticData.experts);
      } finally {
        setLoading(false);
      }
    };

    loadExperts();
  }, []);

  return { experts, loading, error };
};