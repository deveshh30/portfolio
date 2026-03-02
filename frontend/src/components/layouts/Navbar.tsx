// src/components/layout/Navbar.tsx
import { useState } from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

import '@fontsource-variable/space-grotesk';

interface NavItem {
  href: string;
  label: string;
}

const NavLink = ({ href, label, onClick, className = '' }: NavLinkProps) => (
  <a
    href={href}
    onClick={onClick}
    className={`
      text-gray-300 hover:text-white 
      transition-colors duration-200
      px-3 py-2 rounded-md
      hover:bg-gray-800/60
      ${className}
      ${href === window.location.hash ? 'text-white bg-gray-800/70' : ''}
    `}
    aria-current={href === window.location.hash ? 'page' : undefined}
  >
    {label}
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        bg-gray-900/85 backdrop-blur-md
        border-b border-gray-800/70
        transition-all duration-300
      "
    >
      {/* This container gives left & right breathing room */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo with natural left padding from container */}
          <div className="flex-shrink-0">
            <a
            href="/"
            className="
                font-['Space_Grotesk']
                 tracking-wider
                text-4xl md:text-3xl font-extrabold text-white
            "
            >
            Devesh
            </a>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex md:items-center md:gap-10 lg:gap-12">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </div>

          {/* Hamburger (mobile only) */}
          <div className="md:hidden">
            <button
              type="button"
              className="
                inline-flex items-center justify-center p-2 
                rounded-md text-gray-400 
                hover:text-white hover:bg-gray-800/60
                focus:outline-none focus:ring-2 focus:ring-white/50
              "
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-7 w-7 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-4 py-5 space-y-3 bg-gray-900/95 border-t border-gray-800">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              {...item}
              onClick={closeMenu}
              className="block w-full text-left text-lg py-3 px-4 rounded-lg hover:bg-gray-800/70"
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;