import NavbarLogo from "./pieces/NavbarLogo";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed z-50 top-0 w-full transition-all duration-300 ${scrolled
        ? "h-[70px] bg-deep-black-500/90 backdrop-blur-md shadow-lg shadow-black/20"
        : "h-[90px] bg-transparent"
        }`}
    >
      <nav className="container mx-auto h-full px-6 flex justify-between items-center">
        {/* Left: Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-start items-center">
          <Link
            to="/courses"
            className={`group relative px-2 py-1 font-display font-medium tracking-wide transition-colors duration-300 ${isLinkActive("/courses") ? "text-white" : "text-gray-300 hover:text-white"
              }`}
          >
            Explorar Nidos
            <span
              className={`absolute bottom-0 left-0 h-[2px] w-full origin-left transform bg-gradient-to-r from-orange-earth-500 to-golden-yellow-500 transition-transform duration-300 ease-out ${isLinkActive("/courses") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
            ></span>
          </Link>
        </div>

        {/* Mobile: Hamburger Button */}
        <div className="flex md:hidden flex-1 justify-start">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-orange-earth-500 transition-colors p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-2xl" />
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex-shrink-0 flex justify-center items-center">
          <Link to="/" className="transform hover:scale-105 transition-transform duration-300">
            <NavbarLogo className={`transition-all duration-300 ${scrolled ? "h-8" : "h-10"} w-auto`} />
          </Link>
        </div>

        {/* Right: Login Button (Desktop) */}
        <div className="hidden md:flex flex-1 justify-end items-center">
          <a
            href="https://campus.ruppelltec.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-orange-earth-600 to-golden-yellow-500 px-6 py-2 font-display font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-orange-earth-500/50 focus:outline-none focus:ring-2 focus:ring-orange-earth-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <span className="relative z-10">Iniciar Sesión</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-golden-yellow-500 to-orange-earth-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </a>
        </div>

        {/* Spacer for Mobile Layout Balance (Optional, but keeps logo centered) */}
        <div className="flex md:hidden flex-1 justify-end"></div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-[100%] left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-deep-black-500/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
            <Link
              to="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center justify-between rounded-xl px-4 py-3 text-lg font-medium text-gray-200 transition-all hover:bg-white/5 hover:text-white"
            >
              <span>Explorar Nidos</span>
              <FontAwesomeIcon icon={faBars} className="opacity-0 transition-opacity group-hover:opacity-100 text-orange-earth-500 transform rotate-90" /> {/* Reused icon for visual cue, or could use chevron */}
            </Link>

            <div className="h-px bg-white/10 w-full my-2"></div>

            <a
              href="https://campus.ruppelltec.com"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center rounded-xl bg-primary px-4 py-3 font-bold text-white shadow-lg shadow-primary/20 transition-transform active:scale-95 hover:bg-primary-hover"
            >
              Iniciar Sesión
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
