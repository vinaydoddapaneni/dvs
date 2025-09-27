import React, { useEffect } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Navigation } from './components/layout';
import { 
  Hero, 
  About,
  Skills,
  Projects,
  Contact
} from './components/sections';

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

  // Move GlobalStyles outside the component tree
  const GlobalStyleComponent = GlobalStyles;

  return (
    <>
      <GlobalStyleComponent />
      <div id="root">
        <Navigation />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <footer className="footer" style={{
          backgroundColor: '#0a0a0a',
          color: '#b0b0b0',
          textAlign: 'center',
          padding: '2rem 1rem',
          borderTop: '1px solid #2a2a2a',
          marginTop: '3rem',
          width: '100%',
          position: 'relative',
          zIndex: 10,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        }}>
          <div className="footer-container" style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
          }}>
            <div className="footer-content" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <p style={{
                margin: 0,
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#b0b0b0',
                fontWeight: 400,
              }}>&copy; {new Date().getFullYear() === 2025 ? '2025' : `2025-${new Date().getFullYear()}`} Vinay. All rights reserved.</p>
              <p style={{
                margin: 0,
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#b0b0b0',
                fontWeight: 400,
              }}>Built with React and lots of ❤️</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
