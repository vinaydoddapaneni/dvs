import styled, { css } from 'styled-components';

export const StyledNavigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 107, 107, 0.2);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);

  ${({ isScrolled }) => isScrolled && css`
    background: rgba(10, 10, 10, 0.98);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
    border-bottom: 1px solid rgba(255, 107, 107, 0.3);
  `}
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

export const NavLogo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #ff6b6b;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    color: #ee5a24;
    transform: scale(1.05);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #ff6b6b, #ee5a24);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(10, 10, 10, 0.98);
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
    transition: all 0.3s ease;
    opacity: 0;
    visibility: hidden;
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255, 107, 107, 0.2);
    z-index: 1000;

    ${({ isMobileMenuOpen }) => isMobileMenuOpen && css`
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    `}
  }
`;

export const NavLink = styled.a`
  color: ${({ active }) => (active ? '#ff6b6b' : '#e0e0e0')};
  text-decoration: none;
  font-weight: ${({ active }) => (active ? '600' : '500')};
  transition: all 0.3s ease;
  position: relative;
  padding: 10px 20px;
  border-radius: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  background: ${({ active }) => (active ? 'rgba(255, 107, 107, 0.15)' : 'transparent')};
  border: ${({ active }) => (active ? '1px solid rgba(255, 107, 107, 0.3)' : 'none')};

  &:hover {
    color: #ff6b6b;
    background: ${({ active }) => 
      active ? 'rgba(255, 107, 107, 0.2)' : 'rgba(255, 107, 107, 0.1)'};
    transform: translateY(-2px);
    box-shadow: ${({ active }) => 
      active ? '0 5px 15px rgba(255, 107, 107, 0.2)' : 'none'};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background: linear-gradient(90deg, #ff6b6b, #ee5a24);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 1.2rem;
    margin: 0.5rem 0;
    border-radius: 15px;
    border: 1px solid rgba(255, 107, 107, 0.2);

    &:hover {
      background: rgba(255, 107, 107, 0.15);
      border-color: #ff6b6b;
    }
  }
`;

export const NavToggle = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(255, 107, 107, 0.1);

  &:hover {
    background: rgba(255, 107, 107, 0.2);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const ToggleBar = styled.span`
  width: 25px;
  height: 3px;
  background: #ff6b6b;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;

  ${({ isMobileMenuOpen, index }) => {
    if (!isMobileMenuOpen) return '';
    
    switch(index) {
      case 0:
        return 'transform: rotate(45deg) translate(5px, 5px);';
      case 1:
        return 'opacity: 0; transform: scale(0);';
      case 2:
        return 'transform: rotate(-45deg) translate(7px, -6px);';
      default:
        return '';
    }
  }}
`;
