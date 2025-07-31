import React, { useEffect, useState } from "react";
import './App.css';
import HeaderSection from './components/Header/HeaderSection';
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import ProjectSection from './components/Project/ProjectSection';
import ContactsSection from './components/Contacts/ContactsSection';
import Loader from './components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (loading) return <Loader theme={theme} />;

  return (
    <>
      <HeaderSection toggleTheme={toggleTheme} />
      <main className="container">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactsSection />
      </main>
    </>
  );
}

export default App;
