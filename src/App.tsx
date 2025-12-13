import "./index.css";
import "./App.css";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import LandingFragment from "./components/LandingFragment";
import AboutFragment from "./components/AboutFragment";
import RuppellBand from "./components/RuppellBand";
import CoursesFragment from "./components/CoursesFragment";
import Footer from "./components/Footer";
import ExpertsFragment from "./components/ExpertsFragment";
import LoadingScreen from "./components/LoadingScreen";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ImageLoaderProvider } from "./context/ImageLoaderContext";

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    // Ensure minimum 2 seconds loading time
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Show loading screen while authentication is not complete OR 
  // while minimum time hasn't elapsed
  if (!isAuthenticated || !minTimeElapsed) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Header />
      <LandingFragment />
      <AboutFragment />
      <RuppellBand />
      <CoursesFragment />
      <ExpertsFragment />
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <ImageLoaderProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ImageLoaderProvider>
  );
};

export default App;
