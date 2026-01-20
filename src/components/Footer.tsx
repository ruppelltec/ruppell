import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="bg-black py-10 px-6 lg:py-20 lg:px-8 mt-6 border-t border-gray-800 w-full z-10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 text-center lg:text-left">
        <div className="space-y-4">
          <div className="flex justify-center lg:justify-start items-center gap-2 opacity-80">
            <FontAwesomeIcon icon={faGlobe} className="text-primary" />
            <span className="font-display font-bold text-xl text-white">
              Ruppell
            </span>
          </div>
          <p className="text-sm text-muted-dark">
            APRENDE - CONECTA - CRECE
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-gray-500 hover:text-primary hover:bg-gray-800 transition-colors shadow-sm"
              href="#"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="font-bold text-xs"
              />
            </a>
            <a
              className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-gray-500 hover:text-primary hover:bg-gray-800 transition-colors shadow-sm"
              href="#"
            >
              <FontAwesomeIcon icon={faYoutube} className="font-bold text-xs" />
            </a>
            <a
              className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-gray-500 hover:text-primary hover:bg-gray-800 transition-colors shadow-sm"
              href="#"
            >
              <FontAwesomeIcon icon={faTwitter} className="font-bold text-xs" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Cursos</h4>
          <ul className="space-y-2 text-sm text-muted-dark">
            <li>
              <a className="hover:text-primary" href="/stand-up-comedy">
                Stand-Up
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="/">
                Tecnología
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="/">
                Negocios
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-dark">
            <li>
              <a className="hover:text-primary" href="/">
                Privacidad
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="/">
                Términos
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Compañía</h4>
          <ul className="space-y-2 text-sm text-muted-dark">
            <li>
              <a className="hover:text-primary" href="/">
                Sobre nosotros
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 mt-12 border-t border-gray-800 text-center lg:text-left text-xs text-muted-dark">
        <p>© 2026 Ruppell S.A.S. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
