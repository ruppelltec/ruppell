const logoGolden = "/assets/logo_ruppell_golden.png";

interface NavbarLogoProps {
  className?: string;
}

export const NavbarLogo = ({ className }: NavbarLogoProps) => {
  return (
    <img
      src={logoGolden}
      className={`object-contain ${className}`}
      alt="Ruppell Logo"
      style={{ maxHeight: '46px' }}
    />
  );
};

export default NavbarLogo;
