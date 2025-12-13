import { useEffect } from "react";
import { useImageLoaderContext } from "../context/ImageLoaderContext";

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({ 
  src, 
  alt, 
  className, 
  ...props 
}) => {
  const { registerImage } = useImageLoaderContext();

  useEffect(() => {
    registerImage(src);
  }, [src, registerImage]);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      {...props}
    />
  );
};

export default SmartImage;