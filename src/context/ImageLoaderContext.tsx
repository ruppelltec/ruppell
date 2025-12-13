import React, { createContext, useContext, ReactNode } from "react";
import { useImageLoader } from "../hooks/useImageLoader";

interface ImageLoaderContextType {
  isLoading: boolean;
  progress: number;
  registerImage: (src: string) => void;
}

const ImageLoaderContext = createContext<ImageLoaderContextType | undefined>(undefined);

export const ImageLoaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const imageLoader = useImageLoader();

  return (
    <ImageLoaderContext.Provider value={imageLoader}>
      {children}
    </ImageLoaderContext.Provider>
  );
};

export const useImageLoaderContext = () => {
  const context = useContext(ImageLoaderContext);
  if (context === undefined) {
    throw new Error('useImageLoaderContext must be used within an ImageLoaderProvider');
  }
  return context;
};