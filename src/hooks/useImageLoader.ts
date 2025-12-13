import { useState, useEffect, useCallback } from "react";

export const useImageLoader = () => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [totalImages, setTotalImages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const registerImage = useCallback((src: string) => {
    setTotalImages(prev => prev + 1);
    
    if (loadedImages.has(src)) {
      return;
    }

    const img = new Image();
    img.onload = () => {
      setLoadedImages(prev => new Set([...prev, src]));
    };
    img.onerror = () => {
      // Even if image fails, we consider it "loaded" to prevent infinite loading
      setLoadedImages(prev => new Set([...prev, src]));
    };
    img.src = src;
  }, [loadedImages]);

  useEffect(() => {
    if (totalImages > 0 && loadedImages.size >= totalImages) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [loadedImages.size, totalImages]);

  return {
    isLoading,
    loadedImages,
    totalImages,
    registerImage,
    progress: totalImages > 0 ? (loadedImages.size / totalImages) * 100 : 0
  };
};