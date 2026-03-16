import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="#">DahliahLestari</a>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#about" className="nav-link">About</a><span className="slash">/</span></li>
            <li><a href="#contact" className="nav-link">Contact</a><span className="slash">/</span></li>
            <li><a href="#portfolio" className="nav-link">Portofolio</a><span className="slash">/</span></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
