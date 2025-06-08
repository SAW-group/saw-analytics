
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 saw-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold text-saw-navy">SAW Analytics</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-saw-teal ${
                    isActive(item.href) ? "text-saw-teal" : "text-saw-gray"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="saw-gradient text-white hover:opacity-90">
                Request Consultation
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-saw-gray hover:text-saw-navy"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-saw-teal bg-saw-light-gray"
                        : "text-saw-gray hover:text-saw-navy hover:bg-saw-light-gray"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="w-full mt-4 saw-gradient text-white">
                  Request Consultation
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-saw-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 saw-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-2xl font-bold">SAW Analytics</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Translating Data into Strategy. We provide comprehensive analytics and insights 
                services to help businesses make data-driven decisions.
              </p>
              <div className="space-y-2">
                <p className="text-gray-300">📧 contact@sawanalytics.com</p>
                <p className="text-gray-300">📞 +1 (555) 123-4567</p>
                <p className="text-gray-300">📍 New York, NY</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/services" className="hover:text-saw-teal transition-colors">Financial Analytics</Link></li>
                <li><Link to="/services" className="hover:text-saw-teal transition-colors">Operations Analytics</Link></li>
                <li><Link to="/services" className="hover:text-saw-teal transition-colors">Business Strategy</Link></li>
                <li><Link to="/services" className="hover:text-saw-teal transition-colors">HR Analytics</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-saw-teal transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-saw-teal transition-colors">Careers</Link></li>
                <li><Link to="/case-studies" className="hover:text-saw-teal transition-colors">Case Studies</Link></li>
                <li><Link to="/contact" className="hover:text-saw-teal transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SAW Analytics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
