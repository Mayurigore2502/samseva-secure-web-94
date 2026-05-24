import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isGalleryPage = location.pathname === "/photo-gallery";

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (isGalleryPage) {
      navigate("/" + href);
    }
  };

  const handleGalleryClick = () => {
    setIsMenuOpen(false);
    navigate("/photo-gallery");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-gold/20">
      {/* Main Nav */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src="/favicon.png"
              alt="Samseva Security Force Logo"
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={isGalleryPage ? "/" + link.href : link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-steel-light hover:text-gold transition-colors font-medium uppercase text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleGalleryClick}
              className={`font-medium uppercase text-sm tracking-wide transition-colors ${
                isGalleryPage ? "text-gold" : "text-steel-light hover:text-gold"
              }`}
            >
              Photo Gallery
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gold p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gold/20 pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={isGalleryPage ? "/" + link.href : link.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (isGalleryPage) handleNavClick(link.href);
                  }}
                  className="text-steel-light hover:text-gold transition-colors font-medium uppercase text-sm tracking-wide"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={handleGalleryClick}
                className={`text-left font-medium uppercase text-sm tracking-wide transition-colors ${
                  isGalleryPage ? "text-gold" : "text-steel-light hover:text-gold"
                }`}
              >
                Photo Gallery
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
