import React, { useState, useEffect, useRef, useCallback } from 'react';
import { scrollToSection } from '../../utils/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const activeSectionRef = useRef('home');
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const menuItemsRef = useRef({});
  const firstMenuItemRef = useRef(null);
  const lastMenuItemRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      // Use a local variable instead of state to track active section
      let newActiveSection = activeSectionRef.current;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          // Removed unused sectionHeight variable since it wasn't being used
          
          // Check if the section is in the viewport
          if (sectionTop <= scrollPosition) {
            newActiveSection = sections[i];
            break;
          }
        }
      }

      // Only update state if the active section has changed
      if (newActiveSection !== activeSectionRef.current) {
        activeSectionRef.current = newActiveSection;
        setActiveSection(newActiveSection);
      }
    };

    // Run once on mount
    handleScroll();
    
    // Add scroll event listener with throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []); // No dependencies needed as we use refs and don't need to re-run on state changes

  // Handle initial hash in URL and browser navigation (back/forward)
  useEffect(() => {
    const handleInitialHash = () => {
      try {
        // Remove the hash if it's just '#'
        if (window.location.hash === '#') {
          window.history.replaceState(null, null, ' ');
          return;
        }

        const hash = window.location.hash.substring(1);
        const validSections = ['home', 'about', 'skills', 'projects', 'contact'];
        
        if (hash && validSections.includes(hash)) {
          const section = document.getElementById(hash);
          if (section) {
            // Small delay to ensure the page is fully loaded
            setTimeout(() => {
              scrollToSection(hash);
              activeSectionRef.current = hash;
              setActiveSection(hash);
            }, 100);
          } else {
            console.warn(`Section with id '${hash}' not found in the DOM`);
            // If the section is valid but not found, scroll to top
            if (hash === 'home') {
              window.scrollTo(0, 0);
              activeSectionRef.current = 'home';
              setActiveSection('home');
            }
          }
        } else if (hash) {
          // If the hash is not in our valid sections, remove it
          console.warn(`Invalid section hash: '${hash}'`);
          window.history.replaceState(null, null, ' ');
          // Scroll to top if we're not already there
          if (window.scrollY > 0) {
            window.scrollTo(0, 0);
            activeSectionRef.current = 'home';
            setActiveSection('home');
          }
        }
      } catch (error) {
        console.error('Error handling initial hash:', error);
      }
    };

    // Handle initial load
    handleInitialHash();

    // Handle browser back/forward navigation
    const handlePopState = () => {
      handleInitialHash();
    };

    window.addEventListener('popstate', handlePopState);

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []); // No dependencies needed as we don't use any external values

  const handleScrollToSection = useCallback((sectionId, focusElement = null) => {
    try {
      if (!sectionId) {
        console.warn('No sectionId provided to handleScrollToSection');
        return;
      }

      console.log('🎯 Navigation handleScrollToSection called with:', sectionId);
      
      // Update the active section reference and state
      activeSectionRef.current = sectionId;
      setActiveSection(sectionId);
      
      // Scroll to the section
      scrollToSection(sectionId);
      
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
      
      // Focus the target element if provided and focusable
      if (focusElement && typeof focusElement.focus === 'function') {
        focusElement.focus();
      }
      
      // Update the URL without causing a page reload
      if (window.history && window.history.pushState) {
        try {
          const newUrl = `${window.location.pathname}${window.location.search}#${sectionId}`;
          window.history.pushState({ path: newUrl }, '', newUrl);
        } catch (error) {
          console.error('Error updating URL:', error);
          // Fallback to hash change if pushState fails
          window.location.hash = `#${sectionId}`;
        }
      } else {
        // Fallback for older browsers
        window.location.hash = `#${sectionId}`;
      }
    } catch (error) {
      console.error('Error in handleScrollToSection:', error);
    }
  }, []); // No dependencies needed as we don't use any external values

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen && 
        menuRef.current && 
        toggleRef.current &&
        !menuRef.current.contains(event.target) && 
        !toggleRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Handle escape key to close menu
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    // Handle tab key navigation when menu is open
    const handleTabKey = (event) => {
      if (!isMobileMenuOpen) return;

      const focusableElements = [
        toggleRef.current,
        ...Array.from(menuRef.current?.querySelectorAll('a') || [])
      ].filter(Boolean);

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.addEventListener('keydown', handleTabKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isMobileMenuOpen]);

  // Set up menu items refs
  const setMenuItemRef = (item, element) => {
    if (element) {
      menuItemsRef.current[item] = element;
      // Set first and last item refs for keyboard navigation
      const menuItems = Object.values(menuItemsRef.current);
      if (menuItems.length > 0) {
        firstMenuItemRef.current = menuItems[0];
        lastMenuItemRef.current = menuItems[menuItems.length - 1];
      }
    }
  };

  // Handle keyboard navigation for menu items
  const handleMenuItemKeyDown = (event, item, index) => {
    const menuItems = Object.values(menuItemsRef.current);
    const menuItemCount = menuItems.length;
    
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        const nextIndex = (index + 1) % menuItemCount;
        menuItems[nextIndex]?.focus();
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        const prevIndex = (index - 1 + menuItemCount) % menuItemCount;
        menuItems[prevIndex]?.focus();
        break;
      case 'Home':
        event.preventDefault();
        firstMenuItemRef.current?.focus();
        break;
      case 'End':
        event.preventDefault();
        lastMenuItemRef.current?.focus();
        break;
      default:
        break;
    }
  };

  return (
    <nav 
      ref={navRef}
      className={`navigation ${isScrolled ? 'scrolled' : ''}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="nav-container">
        <a 
          href="#home" 
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection('home', e.currentTarget);
          }}
          aria-label="Home"
          tabIndex={isMobileMenuOpen ? -1 : 0}
        >
          DVS
        </a>

        <ul 
          ref={menuRef}
          className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}
          role="navigation"
          aria-label="Main navigation"
          {...(isMobileMenuOpen ? { 'data-expanded': true } : {})}
        >
          {['about', 'skills', 'projects', 'contact'].map((item, index) => (
            <li key={item} role="none">
              <a
                ref={el => setMenuItemRef(item, el)}
                href={`#${item}`}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(item, e.currentTarget);
                }}
                onKeyDown={(e) => handleMenuItemKeyDown(e, item, index)}
                role="menuitem"
                aria-current={activeSection === item ? 'page' : undefined}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <button 
          ref={toggleRef}
          className={`nav-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => {
            const newState = !isMobileMenuOpen;
            setIsMobileMenuOpen(newState);
            // Focus management
            if (newState) {
              // Focus on first menu item when opening
              setTimeout(() => {
                firstMenuItemRef.current?.focus();
              }, 100);
            } else {
              // Return focus to toggle button when closing
              toggleRef.current?.focus();
            }
          }}
          aria-expanded={isMobileMenuOpen}
          aria-controls="main-navigation"
          aria-haspopup="true"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          tabIndex={0}
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
