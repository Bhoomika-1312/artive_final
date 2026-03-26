import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isMenuOpen, toggleMenu, closeMenu, isDarkTheme, toggleTheme }) => {
  const location = useLocation();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY <= lastScrollY || currentScrollY <= 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinkClass = (path) =>
    `py-2 px-4 rounded-lg font-medium transition-all duration-300 relative
     ${isActive(path)
       ? 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30 shadow-sm'
       : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-slate-700/50 hover:-translate-y-0.5'}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] py-4 transition-all duration-300 ease-out
        bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b-2 border-pink-200/30 dark:border-white/10
        shadow-lg
        ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        <Link to="/" className="flex flex-col items-start no-underline">
          <h2 className="text-blue-600 dark:text-blue-400 text-2xl font-bold m-0">ARTIVE</h2>
          <span className="text-slate-500 dark:text-slate-400 text-sm ml-1">IIIT Kota</span>
        </Link>

        <ul
          className={`flex list-none gap-8 max-md:fixed max-md:left-0 max-md:top-[70px] max-md:flex-col max-md:w-full max-md:py-8 max-md:text-center max-md:bg-white dark:max-md:bg-slate-800 max-md:shadow-lg max-md:border-t border-slate-200 dark:border-slate-600 max-md:transition-[left] duration-300
            ${isMenuOpen ? 'max-md:left-0' : 'max-md:left-[-100%]'}`}
        >
          {[
            { path: '/', label: 'Home' },
            { path: '/events', label: 'Events' },
            { path: '/artworks', label: 'Artworks' },
            { path: '/team', label: 'Team' },
            { path: '/about', label: 'About Us' },
          ].map(({ path, label }) => (
            <li key={path} className="nav-item">
              <Link to={path} className={navLinkClass(path)} onClick={closeMenu}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full border-0 bg-transparent text-slate-700 dark:text-slate-200 text-xl cursor-pointer transition-all duration-300 hover:bg-blue-100 dark:hover:bg-slate-700 hover:text-blue-600 hover:scale-110 hover:rotate-180"
            aria-label="Toggle theme"
          >
            <i className={isDarkTheme ? 'fas fa-sun' : 'fas fa-moon'} />
          </button>
          <div
            className="md:hidden flex flex-col cursor-pointer gap-1.5"
            onClick={(e) => { e.stopPropagation(); toggleMenu(); }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-slate-700 dark:bg-slate-200 rounded transition-transform duration-300
                ${isMenuOpen ? 'rotate-[-45deg] translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-700 dark:bg-slate-200 rounded transition-opacity duration-300
                ${isMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-700 dark:bg-slate-200 rounded transition-transform duration-300
                ${isMenuOpen ? 'rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
