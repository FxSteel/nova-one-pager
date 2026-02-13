import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  id: string;
}

const navLinks: NavLink[] = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Qué es NOVA', id: 'about' },
  { label: 'Qué hacemos', id: 'services' },
  { label: 'Cómo trabajamos', id: 'how-we-work' },
  { label: 'Servicios', id: 'offerings' },
  { label: 'Proceso', id: 'process' },
  { label: 'Contacto', id: 'contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#inicio"
              className="h-9 w-auto flex items-center"
            >
              <img
                src="/nova-logo.svg"
                alt="NOVA"
                className="h-9 w-auto"
                style={{ maxWidth: '140px' }}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1 mx-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex ml-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-gradient text-sm whitespace-nowrap"
            >
              Agendar conversación
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-gradient w-full text-sm mt-4"
            >
              Agendar conversación
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
