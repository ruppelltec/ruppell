const logoGolden = "/assets/logo_ruppell_golden.png";

interface NavbarLogoProps {
  className?: string;
}

export const NavbarLogo = ({ className }: NavbarLogoProps) => {
  return (
    <img
      src={logoGolden}
      className={`object-cover h-full ${className}`}
      alt="Ruppell Logo"
    />
  );
};

export default NavbarLogo;
