import React, { useState, useEffect } from 'react';
import './Navigation.css';
import { scrollToSection } from './utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId) => {
    console.log('🎯 Navigation handleScrollToSection called with:', sectionId);
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span onClick={() => handleScrollToSection('hero')}>DVS</span>
        </div>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleScrollToSection('about'); }}
          >
            About
          </a>
          <a
            href="#skills"
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleScrollToSection('skills'); }}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleScrollToSection('projects'); }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleScrollToSection('contact'); }}
          >
            Contact
          </a>
        </div>

        <div className="nav-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
