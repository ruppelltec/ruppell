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
    <footer className="z-100 absolute py-10 bg-black text-white p-5 flex flex-col md:flex-row items-center min-w-[300px] w-[100vw] justify-around shadow-xl md:space-x-20">
      <NavbarLogo className="max-w-[200px] max-h-[50px]"/>
      <hr className="w-[250px] text-white border-1 my-5 md:hidden" />
      <div className="text-golden-yellow-500 w-[200px] flex justify-between">
        <FontAwesomeIcon className="text-3xl" icon={faInstagram} />
        <FontAwesomeIcon className="text-3xl" icon={faTiktok} />
        <FontAwesomeIcon className="text-3xl" icon={faFacebook} />
        <FontAwesomeIcon className="text-3xl" icon={faYoutube} />
      </div>
      <p className="text-xl mt-5 md:mt-0 text-center text-golden-yellow-500">© Ruppell Copyright 2025</p>
    </footer>
  );
};

export default Footer;
