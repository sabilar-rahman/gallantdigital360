import NavbarLogo from "./NavbarLogo";
import NavigationBar from "./NavigationBar";
import NavigationAction from "./NavigationAction";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-white/10 backdrop-blur-md border-b border-white/10 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo Section */}
        <NavbarLogo />

        {/* Navigation Links */}
        <NavigationBar />

        {/* Actions (e.g., Buttons, Icons) */}
        <NavigationAction />
      </div>
    </div>
  );
};

export default Navbar;
