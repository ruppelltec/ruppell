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
          // Convert data to match Category type
          const typedData = data.map((cat: any) => ({
            ...cat,
            courses: cat.courses.map((course: any) => ({
              ...course,
              level: course.level as 'Básico' | 'Intermedio' | 'Avanzado' | undefined
            }))
          }));
          setCategories(typedData);
        } else {
          console.warn("useCategories: API returned invalid data, using static fallback", data);
          // Convert static data to match Category type
          const typedStaticData = staticData.categories.map((cat: any) => ({
            ...cat,
            courses: cat.courses.map((course: any) => ({
              ...course,
              level: course.level as 'Básico' | 'Intermedio' | 'Avanzado' | undefined
            }))
          }));
          setCategories(typedStaticData);
        }
      } catch (err) {
        const serviceError = err as ServiceError;
        console.error("Failed to load categories", serviceError);
        setError(serviceError);
        
        // Asegurar que siempre tenemos un array como fallback
        const fallbackData = staticData.categories;
        if (Array.isArray(fallbackData)) {
          // Convert fallback data to match Category type
          const typedFallbackData = fallbackData.map((cat: any) => ({
            ...cat,
            courses: cat.courses.map((course: any) => ({
              ...course,
              level: course.level as 'Básico' | 'Intermedio' | 'Avanzado' | undefined
            }))
          }));
          setCategories(typedFallbackData);
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