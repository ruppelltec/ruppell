import { useState, useEffect } from "react";
import { Category, ServiceError } from "../types";
import { getCourseList } from "../services/courseService";
import staticData from "../data.json";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ServiceError | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getCourseList();
        
        // Validación defensiva: asegurar que data es un array válido
        if (Array.isArray(data) && data.length > 0) {
          setCategories(data);
        } else {
          console.warn("useCategories: API returned invalid data, using static fallback", data);
          setCategories(staticData.categories || []);
        }
      } catch (err) {
        const serviceError = err as ServiceError;
        console.error("Failed to load categories", serviceError);
        setError(serviceError);
        
        // Asegurar que siempre tenemos un array como fallback
        const fallbackData = staticData.categories;
        if (Array.isArray(fallbackData)) {
          setCategories(fallbackData);
        } else {
          console.error("Static data is also invalid, using empty array");
          setCategories([]);
        }
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return { categories, loading, error };
};