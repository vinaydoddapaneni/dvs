import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Global reset and base styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    color: #e0e0e0;
    background: #0a0a0a;
    scroll-behavior: smooth;
    overflow-x: hidden;
    height: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* Screen reader only utility class */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* Navigation Styles */
  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    padding: 1rem 0;
  }

  .navigation.scrolled {
    padding: 0.5rem 0;
    background: rgba(10, 10, 10, 0.95);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-logo {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .nav-logo:hover {
    color: #ff6b6b;
  }

  .nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-link {
    color: #b0b0b0;
    text-decoration: none;
    padding: 0.5rem 1.2rem;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
  }

  .nav-link:hover,
  .nav-link.active {
    color: #fff;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 20px;
    height: 2px;
    background: #ff6b6b;
    transition: transform 0.3s ease;
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    transform: translateX(-50%) scaleX(1);
  }

  .nav-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 1001;
  }

  .toggle-bar {
    display: block;
    width: 25px;
    height: 2px;
    background: #fff;
    margin: 5px 0;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    .nav-menu {
      position: fixed;
      top: 0;
      right: -100%;
      width: 70%;
      height: 100vh;
      background: #0a0a0a;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: right 0.5s ease;
      box-shadow: -5px 0 20px rgba(0, 0, 0, 0.3);
    }

    .nav-menu.open {
      right: 0;
    }

    .nav-link {
      font-size: 1.2rem;
      margin: 1rem 0;
      padding: 0.8rem 2rem;
    }

    .nav-link::after {
      display: none;
    }

    .nav-toggle {
      display: block;
    }

    .nav-toggle.open .toggle-bar:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }

    .nav-toggle.open .toggle-bar:nth-child(2) {
      opacity: 0;
    }

    .nav-toggle.open .toggle-bar:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  }

  /* Hero Component Styles */
  .hero-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    padding: 0 5%;
    max-width: 1400px;
    margin: 0 auto;
  }

  .hero-content {
    max-width: 600px;
    z-index: 1;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    color: #ff6b6b;
    margin-bottom: 1rem;
  }

  .hero-title {
    font-size: 4.5rem;
    font-weight: 800;
    margin: 0 0 1rem;
    background: linear-gradient(135deg, #ffffff, #b0b0b0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.1;
  }

  .hero-name {
    font-size: 2rem;
    font-weight: 600;
    margin: 0 0 2rem;
    color: #b0b0b0;
  }

  .hero-description {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
    color: #b0b0b0;
    line-height: 1.7;
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }

  .btn {
    padding: 14px 28px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
    border: 2px solid transparent;
    cursor: pointer;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .btn-primary {
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    color: white;
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  }

  .btn-primary:hover {
    background: linear-gradient(135deg, #ee5a24, #ff6b6b);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
  }

  .hero-image {
    position: relative;
    z-index: 1;
  }

  .hero-avatar {
    width: 300px;
    height: 380px;
    border-radius: 15px;
    object-fit: cover;
    object-position: center top;
    border: 4px solid #ff6b6b;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(0, 0, 0, 0.1));
    box-sizing: border-box;
  }

  .hero-avatar:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 1024px) {
    .hero-container {
      flex-direction: column;
      text-align: center;
{{ ... }}
      height: 300px;
    }
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 3.5rem;
    }

    .hero-name {
      font-size: 1.5rem;
    }

    .hero-description {
      font-size: 1.1rem;
    }
  
    .hero-avatar {
      width: 200px;
      height: 250px;
    flex-direction: column;
    background: #0a0a0a;
  }

  main {
    flex: 1;
    margin-top: 70px; /* Account for fixed navigation */
  }

  /* Section animations */
  section {
    opacity: 1;
    transform: translateY(0px);
    transition: all 0.6s ease;
    position: relative;
    min-height: 100vh;
    padding: 20px 0;
  }

  section.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  section:nth-child(1) { transition-delay: 0.1s; }
  section:nth-child(2) { transition-delay: 0.2s; }
  section:nth-child(3) { transition-delay: 0.3s; }
  section:nth-child(4) { transition-delay: 0.4s; }
  section:nth-child(5) { transition-delay: 0.5s; }

  /* =================================
    Footer Styles 
    ================================= */
  footer.footer {
    background-color: #0a0a0a;
    color: #b0b0b0;
    text-align: center;
    padding: 4rem 2rem 3rem;
    border-top: 1px solid #2a2a2a;
    margin-top: 8rem;
    width: 100%;
    position: relative;
    z-index: 10;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  footer.footer .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  footer.footer .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  footer.footer p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.7;
    color: #b0b0b0;
    font-weight: 400;
  }

  footer.footer .footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    margin-top: 1.5rem;
  }

  footer.footer a {
    color: #ff6b6b;
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: 500;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    position: relative;
    padding: 0.5rem 0;
  }

  footer.footer a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #ff6b6b;
    transition: width 0.3s ease;
  }

  footer.footer a:hover {
    color: #ffffff;
    transform: translateY(-2px);
  }

  footer.footer a:hover::after {
    width: 100%;
  }

  footer.footer .footer-divider {
    color: #444;
    margin: 0 0.5rem;
    user-select: none;
    font-size: 1.5rem;
    line-height: 1;
    opacity: 0.7;
  }

  /* Global button styles */
  .btn {
    padding: 14px 28px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
    border: 2px solid transparent;
    cursor: pointer;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .btn-primary {
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    color: white;
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  }

  .btn-primary:hover {
    background: linear-gradient(135deg, #ee5a24, #ff6b6b);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
  }

  .btn-secondary {
    background: transparent;
    color: #ff6b6b;
    border-color: #ff6b6b;
  }

  .btn-secondary:hover {
    background: #ff6b6b;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
  }

  /* Professional section styling */
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    color: #ffffff;
    text-align: center;
    position: relative;
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #ff6b6b, #ee5a24);
    border-radius: 2px;
  }

  /* Card styling for professional look */
  .card {
    background: #1a1a1a;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border: 1px solid #333;
    transition: all 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4);
    border-color: #ff6b6b;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    main {
      margin-top: 70px;
    }

    .section-title {
      font-size: 2rem;
    }
  }
`;
