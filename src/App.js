import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';

function App() {
  useEffect(() => {
    // Intersection Observer for section animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2025 Vinay. All rights reserved.</p>
          <p>Built with React and lots of ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
