import NavbarLogo from "./pieces/NavbarLogo";

export const Header = () => {
  return (
    <header className="fixed z-100 h-[80px] bg-deep-black-500 text-white top-0 p-5 flex min-w-[300px] w-[100vw] justify-between items-center shadow-xl">
      <div className="flex-1 flex"></div>
      <div className="flex-1 flex justify-center h-[80px] p-4">
        <NavbarLogo />
      </div>
      <div className="flex-1 flex justify-end items-center">
        <a
          href="https://example.com"
          target="_blank"
          className="mr-5 px-4 py-2 bg-golden-yellow-600 hover:bg-golden-yellow-500 rounded text-white font-semibold transition"
        >
          Iniciar sesión
        </a>
      </div>
    </header>
  );
};

export default Header;
