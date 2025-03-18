import "./index.css";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";

import Header from "./components/Header";
import LandingFragment from "./components/LandingFragment";
import AboutFragment from "./components/AboutFragment";
import RuppellBand from "./components/RuppellBand";
import CoursesFragment from "./components/CoursesFragment";
import Footer from "./components/Footer";
import ExpertsFragment from "./components/ExpertsFragment";

function App() {
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
}

export default App;
