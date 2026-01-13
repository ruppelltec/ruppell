import NavbarLogo from "./pieces/NavbarLogo";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed z-100 h-[80px] bg-deep-black-500/95 backdrop-blur-md text-white top-0 w-full shadow-2xl transition-all duration-300">
      <div className="container mx-auto h-full px-5 grid grid-cols-3 md:grid-cols-3 items-center">

        {/* Left: Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex justify-start items-center gap-8 col-span-1">
          <Link
            to="/courses"
            className={`relative px-4 py-2 font-bold tracking-wide transition-all group ${isLinkActive('/courses') ? 'scale-x-100' : 'text-gray-300 hover:text-white'}`}
          >
            Explorar Nidos
            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-orange-earth-500 transform transition-transform duration-300 ${isLinkActive('/courses') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
        </div>

        {/* Mobile Menu Button (Visible on Mobile) */}
        <div className="flex md:hidden justify-start items-center col-span-1">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-orange-earth-500 transition-colors p-2"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-2xl" />
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center items-center col-span-1 md:col-span-1">
          <Link to="/" className="transform hover:scale-105 transition-transform duration-300 flex items-center">
            <NavbarLogo className="w-auto" />
          </Link>
        </div>

        {/* Right: CTA (Hidden on Mobile) */}
        <div className="hidden md:flex justify-end items-center col-span-1">
          <a
            href="https://campus.ruppelltec.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-2.5 font-bold text-white transition-all duration-200 bg-gradient-to-r from-orange-earth-600 to-golden-yellow-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-earth-600 overflow-hidden shadow-orange-earth-500/30 shadow-lg hover:shadow-orange-earth-500/50 hover:-translate-y-0.5 text-sm md:text-base"
          >
            <span className="relative mr-2">Iniciar Sesión</span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-deep-black-500/98 backdrop-blur-lg border-t border-gray-700 shadow-2xl">
          <div className="container mx-auto px-5 py-4 space-y-3">
            <Link
              to="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-white hover:bg-orange-earth-500/20 rounded-lg transition-colors font-semibold"
            >
              Explorar Nidos
            </Link>
            <a
              href="https://campus.ruppelltec.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 bg-gradient-to-r from-orange-earth-600 to-golden-yellow-500 text-white rounded-lg font-bold text-center shadow-lg"
            >
              Iniciar Sesión
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
