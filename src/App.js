import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Artworks from './pages/Artworks';
import Team from './pages/Team';
import About from './pages/About';
import AddArtwork from './pages/AddArtwork';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Apply theme to body
  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  // Close mobile menu when clicking on a link
  useEffect(() => {
    const handleClick = () => {
      if (isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isMenuOpen]);

  return (
    <Router>
      <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
        {/* Animated Background */}
        <div className="animated-bg">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
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