import styled, { keyframes, css } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
`;

export const StyledAbout = styled.section`
  padding: 100px 0;
  background: #0a0a0a;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 70%, rgba(255, 107, 107, 0.05) 0%, transparent 50%);
  }
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #ffffff;
  text-align: center;
  position: relative;

  &::after {
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
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
  }
`;

export const AboutText = styled.div`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #b0b0b0;

  p {
    margin-bottom: 1.5rem;
  }
`;

export const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const Stat = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 107, 107, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff6b6b, #ee5a24);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 107, 107, 0.3);
  }
`;

export const StatNumber = styled.span`
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: #ff6b6b;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px rgba(255, 107, 107, 0.3);
`;

export const StatLabel = styled.span`
  font-size: 1rem;
  color: #888;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const AboutImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutAvatar = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 25px;
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  border: 3px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 107, 107, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  animation: ${float} 4s ease-in-out infinite;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(238, 90, 36, 0.2));
    border-radius: 25px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>') no-repeat center;
    background-size: contain;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 15px;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;
