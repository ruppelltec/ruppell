import NavbarLogo from "./pieces/NavbarLogo";

export const Header = () => {
  return (
    <header className="fixed z-100 h-[80px] md:h-[90px] bg-deep-black-500 text-white top-0 p-5 flex min-w-[300px] w-[100vw] justify-center shadow-xl">
      <NavbarLogo />
    </header>
  );
};

export default Header;
