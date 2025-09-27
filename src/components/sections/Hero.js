import React from 'react';
import { scrollToSection } from '../../utils/utils';
import profileImage from '../../assets/images/34021503.jpg';

const Hero = () => {
  const handleScrollToSection = (sectionId) => {
    console.log('🚀 Hero handleScrollToSection called with:', sectionId);
    scrollToSection(sectionId);
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h2 className="hero-subtitle">Hello, I'm</h2>
        <h1 className="hero-title">Vinay</h1>
        <h2 className="hero-name">Full Stack Developer</h2>
        <p className="hero-description">
          I build exceptional digital experiences with modern web technologies.
          Specializing in React, Node.js, and cloud-native applications.
        </p>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary" 
            onClick={() => handleScrollToSection('contact')}
          >
            Get In Touch
          </button>
          <button 
            className="btn" 
            onClick={() => handleScrollToSection('projects')}
          >
            View My Work
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src={profileImage}
          alt="Vinay's Professional Portrait"
          className="hero-avatar"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Hero;
