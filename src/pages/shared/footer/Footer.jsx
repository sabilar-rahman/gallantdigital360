
import { Button } from "@/components/ui/button";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Gallant Digital</h3>
          <p className="text-sm">
            Transforming businesses through innovative digital solutions. Let's
            create something amazing together.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-md font-medium text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        
 {/* Social Media */}
<div>
  <h4 className="text-md font-medium text-white mb-4">Follow Us</h4>
  <div className="flex space-x-4 text-white">
    <Button className="text-white">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-2xl" />
      </a>
    </Button>
    <Button className="text-gray-400 hover:text-white">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-2xl" />
      </a>
    </Button>
    <Button className="text-gray-400 hover:text-white">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl" />
      </a>
    </Button>
    <Button className="text-gray-400 hover:text-white">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-2xl" />
      </a>
    </Button>
  </div>
</div>

        {/* Newsletter */}
        <div>
          <h4 className="text-md font-medium text-white mb-4">Stay Updated</h4>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 bg-gray-800 text-gray-300 placeholder-gray-500 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <Button variant="destructive" className="w-full">Subscribe</Button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Gallant Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
