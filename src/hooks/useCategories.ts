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
        setCategories(data);
      } catch (err) {
        const serviceError = err as ServiceError;
        console.error("Failed to load categories", serviceError);
        setError(serviceError);
        setCategories(staticData.categories);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return { categories, loading, error };
};