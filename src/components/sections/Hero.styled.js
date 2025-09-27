import styled, { keyframes, css } from 'styled-components';

const gradientShift = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glow = keyframes`
  from {
    text-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
  }
  to {
    text-shadow: 0 0 30px rgba(255, 107, 107, 0.8), 0 0 40px rgba(255, 107, 107, 0.3);
  }
`;

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const StyledHero = styled.section`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%);
  color: white;
  padding: 120px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(238, 90, 36, 0.1) 0%, transparent 50%),
      linear-gradient(45deg, transparent 49%, rgba(255, 107, 107, 0.03) 50%, transparent 51%);
    animation: ${gradientShift} 8s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }
`;

export const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  position: relative;
  z-index: 2;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    gap: 50px;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  text-align: left;
  animation: ${slideInLeft} 1s ease-out;

  @media (max-width: 992px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
  text-transform: uppercase;
  letter-spacing: 3px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const HeroName = styled.span`
  color: #ff6b6b;
  animation: ${glow} 2s ease-in-out infinite alternate;
  text-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
  display: inline-block;
  position: relative;
`;

export const HeroSubtitle = styled.p`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  opacity: 0.9;
  animation: ${fadeInUp} 1s ease-out 0.4s both;
  color: #e0e0e0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  opacity: 0.7;
  max-width: 600px;
  animation: ${fadeInUp} 1s ease-out 0.6s both;
  color: #b0b0b0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  animation: ${fadeInUp} 1s ease-out 0.8s both;

  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Button = styled.a`
  padding: 14px 28px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  border: 2px solid transparent;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  cursor: pointer;

  ${({ primary }) =>
    primary
      ? css`
          background: linear-gradient(135deg, #ff6b6b, #ee5a24);
          color: white;
          animation: ${bounceIn} 1s ease-out 1s both;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);

          &:hover {
            background: linear-gradient(135deg, #ee5a24, #ff6b6b);
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
          }
        `
      : css`
          background: transparent;
          color: #ff6b6b;
          border-color: #ff6b6b;
          animation: ${bounceIn} 1s ease-out 1.2s both;

          &:hover {
            background: #ff6b6b;
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
          }
        `}

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideInRight} 1s ease-out 0.5s both;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 500px;
  }
`;

export const HeroAvatar = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  position: relative;
  box-shadow: 0 0 50px rgba(255, 107, 107, 0.3);
  animation: float 6s ease-in-out infinite;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://avatars.githubusercontent.com/u/your-avatar') center/cover no-repeat;
    border-radius: inherit;
    mix-blend-mode: overlay;
    opacity: 0.9;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(2deg); }
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;
