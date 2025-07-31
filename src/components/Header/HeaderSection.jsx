import React, { useState } from "react";
import "./HeaderSection.css";
import ThemeToggle from "./ThemeToggle";

const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleHamburger = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Rei-Dev</div>
        <button className={`hamburger${menuOpen ? ' open' : ''}`} aria-label="Toggle navigation" onClick={handleHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-container${menuOpen ? ' open' : ''}`}>
          <ul className="nav-links" onClick={closeMenu}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default HeaderSection;