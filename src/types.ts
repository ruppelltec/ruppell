// Tipos centralizados para el proyecto Ruppell

export interface Course {
  id: string;
  title: string;
  popularity: number;
  expert: string;
  image: string;
  price: number;
  duration: number; // Duration in hours
  categoryId?: string; // Optional reference for flattening
  categoryTitle?: string; // Added for UI display
  headline?: string;
  level?: 'Básico' | 'Intermedio' | 'Avanzado';
  introVideoUrl?: string; // YouTube video URL for course intro
  introText?: string; // Detailed introduction text for modal
  paymentLink?: string; // Payment/purchase link
}

export interface Category {
  id: string;
  title: string;
  description: string;
  courses: Course[];
}

export interface Expert {
  id: string;
  name: string;
  profession: string;
  image: string;
}

export interface Nest {
  id: string;
  title: string;
  description: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface ServiceError {
  message: string;
  code?: string;
  status?: number;
}