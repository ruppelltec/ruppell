interface NavbarLogoProps {
  className?: string;
}

export const NavbarLogo = ({ className }: NavbarLogoProps) => {
  return (
    <img
      src="/src/assets/logo_ruppell_golden.png"
      className={`object-cover h-full ${className}`}
      alt="Ruppell Logo"
    />
  );
};

export default NavbarLogo;
