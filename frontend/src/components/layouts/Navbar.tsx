import { useState, useEffect } from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

interface NavItem {
  href: string;
  label: string;
}

const NavLink = ({ href, label, onClick, className = '' }: NavLinkProps) => (
  <a
    href={href}
    onClick={onClick}
    className={`
      text-zinc-400 hover:text-white 
      transition-colors duration-200
      text-sm font-medium tracking-wide
      relative group
      ${className}
    `}
    style={{ fontFamily: "var(--font-body)" }}
    aria-current={href === window.location.hash ? 'page' : undefined}
  >
    {label}
    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled ? 'bg-black/90 border-b border-zinc-800/50' : 'bg-transparent'}
      `}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="/"
            className="text-white font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Devesh<span className="text-[#004643]">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 text-sm font-medium text-black bg-white rounded-md hover:bg-zinc-200 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Hire Me
            </a>
          </div>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-6 py-4 space-y-1 bg-black border-t border-zinc-800/50">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="block py-3 text-zinc-400 hover:text-white text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="block mt-4 py-3 text-center text-sm font-medium text-black bg-white rounded-md hover:bg-zinc-200 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;