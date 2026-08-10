import NavbarInteractive from './NavbarInteractive';
import NavbarLogo from './NavbarLogo';
import NavbarSocialLinks from './NavbarSocialLinks';

export default function Navbar() {
  return (
    <NavbarInteractive
      logo={<NavbarLogo />}
      socialLinks={<NavbarSocialLinks />}
    />
  );
}
