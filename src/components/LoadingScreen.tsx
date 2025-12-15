import { useEffect, useState } from "react";

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress from 0% to 100% in increments of 10% over 2 seconds
    const duration = 2000; // 2 seconds
    const increment = 10; // 10% increments
    const interval = duration / (100 / increment); // Time between each 10% increment

    let currentProgress = 0;

    const progressInterval = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
      }
      setProgress(currentProgress);
    }, interval);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/src/assets/logo_ruppell_golden.png"
            alt="Ruppell Logo"
            className="w-50 h-50 mx-auto object-contain"
          />
        </div>

        {/* Loading Spinner */}
        <div className="mb-6">
          <div className="animate-spin inline-block w-12 h-12 border-4 border-golden-yellow-500 border-t-transparent rounded-full"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="bg-gray-300 rounded-full h-2 mb-2">
            <div
              className="bg-golden-yellow-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white text-sm">
            Cargando contenido... {Math.round(progress)}%
          </p>
        </div>

        {/* Loading Text */}
        <p className="text-white mt-4 text-lg font-semibold">
          Preparando tu experiencia educativa
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
