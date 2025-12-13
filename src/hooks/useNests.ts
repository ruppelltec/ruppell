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
        setNests(data);
      } catch (err) {
        const serviceError = err as ServiceError;
        console.error("Failed to load nests", serviceError);
        setError(serviceError);
        setNests(staticData.nests);
      } finally {
        setLoading(false);
      }
    };

    loadNests();
  }, []);

  return { nests, loading, error };
};