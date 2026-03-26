import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Artworks from './pages/Artworks';
import Team from './pages/Team';
import About from './pages/About';
import AddArtwork from './pages/AddArtwork';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  useEffect(() => {
    const handleClick = () => {
      if (isMenuOpen) closeMenu();
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isMenuOpen]);

  return (
    <Router>
      <div className={`min-h-screen ${isDarkTheme ? 'dark' : ''} ${isDarkTheme ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
        {/* Animated background shapes */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          <div
            className="absolute w-[120px] h-[120px] top-[15%] left-[15%] rounded-full bg-gradient-to-br from-blue-600 to-blue-500 opacity-5 animate-[morph_12s_ease-in-out_infinite,float_8s_ease-in-out_infinite]"
            style={{ animation: 'morph 12s ease-in-out infinite, float 8s ease-in-out infinite' }}
          />
          <div
            className="absolute w-[180px] h-[180px] top-[65%] right-[20%] bg-gradient-to-br from-violet-600 to-violet-500 opacity-5 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]"
            style={{ animation: 'morph 15s ease-in-out infinite reverse, float 10s ease-in-out infinite' }}
          />
          <div
            className="absolute w-[100px] h-[100px] bottom-[25%] left-[25%] bg-gradient-to-br from-amber-500 to-amber-400 opacity-5 rounded-full"
            style={{ animation: 'morph 18s ease-in-out infinite, float 9s ease-in-out infinite' }}
          />
        </div>

        <Navbar
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
          isDarkTheme={isDarkTheme}
          toggleTheme={toggleTheme}
        />
        <Routes>
          <Route path="/" element={<Home isDarkTheme={isDarkTheme} />} />
          <Route path="/events" element={<Events isDarkTheme={isDarkTheme} />} />
          <Route path="/artworks" element={<Artworks isDarkTheme={isDarkTheme} />} />
          <Route path="/team" element={<Team isDarkTheme={isDarkTheme} />} />
          <Route path="/about" element={<About isDarkTheme={isDarkTheme} />} />
          <Route path="/add-artwork" element={<AddArtwork isDarkTheme={isDarkTheme} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
