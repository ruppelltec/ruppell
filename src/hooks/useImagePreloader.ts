import { useState, useEffect, useCallback } from "react";

export const useImagePreloader = (imageSources: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [loadingProgress, setLoadingProgress] = useState(0);

  const preloadImage = useCallback((src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, src]));
        resolve();
      };
      img.onerror = () => {
        // Even if image fails, we consider it "loaded" to prevent infinite loading
        setLoadedImages(prev => new Set([...prev, src]));
        resolve();
      };
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const preloadAllImages = async () => {
      const totalImages = imageSources.length;
      let loadedCount = 0;

      for (const src of imageSources) {
        await preloadImage(src);
        loadedCount++;
        setLoadingProgress((loadedCount / totalImages) * 100);
      }
    };

    preloadAllImages();
  }, [imageSources, preloadImage]);

  const isLoading = loadingProgress < 100;
  const progress = loadingProgress;

  return {
    isLoading,
    progress,
    loadedImages,
    preloadImage
  };
};