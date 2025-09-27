import styled, { keyframes } from 'styled-components';

// Animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled Components
export const StyledProjects = styled.section`
  padding: 100px 0;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 107, 107, 0.03) 0%, transparent 70%);
    z-index: 1;
  }
`;

export const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  animation: ${fadeIn} 0.6s ease-out forwards;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ProjectCard = styled.div`
  background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 107, 107, 0.1);
  transition: all 0.3s ease;
  position: relative;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay || '0ms'};
  opacity: 0;
  animation-fill-mode: forwards;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff6b6b, #ee5a24);
    z-index: 1;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 107, 107, 0.3);
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  height: 280px;
  overflow: hidden;
  background: #121212;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.9), rgba(238, 90, 36, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const ProjectLink = styled.a`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: #ffffff;
    color: #ff6b6b;
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ProjectContent = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ProjectDescription = styled.p`
  color: #b0b0b0;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

export const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const TechTag = styled.span`
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(238, 90, 36, 0.1));
  color: #ff6b6b;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(255, 107, 107, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 107, 107, 0.2);
    border-color: #ff6b6b;
    transform: translateY(-2px);
  }
`;
