import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import NavbarLogo from "./pieces/NavbarLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <footer className="z-1000 py-10 bg-black text-white flex flex-col md:flex-row items-center min-w-[300px] w-[100vw] justify-around shadow-xl relative">
      <div className="flex justify-center w-[300px]">
        <NavbarLogo className="w-[200px] max-h-[50px]" />
      </div>
      <hr className="w-[250px] text-white border-1 my-5 md:hidden" />
      <div className="text-golden-yellow-500 w-[300px] flex justify-around">
        <FontAwesomeIcon className="text-4xl" icon={faInstagram} />
        <FontAwesomeIcon className="text-4xl" icon={faTiktok} />
        <FontAwesomeIcon className="text-4xl" icon={faFacebook} />
        <FontAwesomeIcon className="text-4xl" icon={faYoutube} />
      </div>
      <p className="text-xl mt-5 md:mt-0 text-center text-golden-yellow-500 w-[300px]">
        © Ruppell Copyright 2026
      </p>
    </footer>
  );
};

export default Footer;
