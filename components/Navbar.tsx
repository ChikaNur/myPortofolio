import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = useMemo(() => [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ], []);

  // Constants for scroll calculations
  const HEADER_HEIGHT = 80;
  const SPY_OFFSET = 120;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition + windowHeight >= documentHeight - 10) {
        setActiveSection(navLinks[navLinks.length - 1].href.substring(1));
        return;
      }

      let currentSection = navLinks[0].href.substring(1);

      for (const link of navLinks) {
        const id = link.href.substring(1);
        const element = document.getElementById(id);

        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= SPY_OFFSET) {
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - HEADER_HEIGHT - 5;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setActiveSection(targetId);
    }
  };



  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 no-print ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="font-serif text-2xl font-bold text-pastel-dark cursor-pointer"
            >
              CNS.
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 lg:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${isActive
                    ? 'bg-pastel-dark text-white shadow-md transform scale-105'
                    : 'text-pastel-text hover:text-pastel-dark hover:bg-pastel-light/30'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}



            <div className="w-px h-6 bg-gray-300 mx-2"></div>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="text-pastel-dark hover:text-pastel-text hover:bg-pastel-light/50 p-2 rounded-full transition-colors"
              aria-label="Contact"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-pastel-dark hover:text-pastel-text p-2"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full rounded-b-lg animate-fade-in-up border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive
                    ? 'bg-pastel-light text-pastel-dark font-bold pl-6 border-l-4 border-pastel-dark'
                    : 'text-pastel-text hover:text-pastel-dark hover:bg-gray-50'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}


          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;