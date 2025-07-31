import React, { useEffect } from "react";
import "./HeroSection.css";
import profileImg from "../../assets/profile-2.jpg";



const HeroSection = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      document.documentElement.style.setProperty('--blob-x', `${x}px`);
      document.documentElement.style.setProperty('--blob-y', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-blobs" aria-hidden="true">
        {/* SVG blobs for animated background */}
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: 'translate(var(--blob-x, 0), var(--blob-y, 0))', position: 'absolute', left: 0, top: 0}}>
          <ellipse cx="200" cy="200" rx="120" ry="80" fill="#A560F2" opacity="0.18">
            <animate attributeName="rx" values="120;140;120" dur="6s" repeatCount="indefinite" />
            <animate attributeName="ry" values="80;100;80" dur="6s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="120" cy="260" rx="60" ry="40" fill="#6D28D9" opacity="0.13">
            <animate attributeName="cx" values="120;160;120" dur="7s" repeatCount="indefinite" />
          </ellipse>
        </svg>
        {/* Right side blobs */}
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', right: 0, top: 40}}>
          <ellipse cx="220" cy="120" rx="80" ry="60" fill="#6D28D9" opacity="0.14">
            <animate attributeName="rx" values="80;100;80" dur="8s" repeatCount="indefinite" />
            <animate attributeName="ry" values="60;80;60" dur="8s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="80" cy="200" rx="40" ry="30" fill="#A560F2" opacity="0.10">
            <animate attributeName="cx" values="80;120;80" dur="9s" repeatCount="indefinite" />
          </ellipse>
        </svg>
      </div>
      <div className="hero-content">
        <img src={profileImg} alt="Profile portrait" className="hero-img" />
        <h1 className="hero-title">Hi, I'm <span className="gradient-text">John Rey Ablen</span></h1>
        <p className="hero-subtitle">Web Developer & IT Student</p>
      
      </div>
    </section>
  );
};

export default HeroSection;