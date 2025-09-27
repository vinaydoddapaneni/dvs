import React from 'react';
import './Hero.css';
import { scrollToSection } from './utils';

const Hero = () => {
  const handleScrollToSection = (sectionId) => {
    console.log('🚀 Hero handleScrollToSection called with:', sectionId);
    scrollToSection(sectionId);
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Vinay</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer</p>
          <p className="hero-description">
            I create beautiful, responsive web applications with modern technologies.
            Passionate about clean code and user experience.
          </p>
          <div className="hero-buttons">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); handleScrollToSection('projects'); }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => { e.preventDefault(); handleScrollToSection('contact'); }}
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
