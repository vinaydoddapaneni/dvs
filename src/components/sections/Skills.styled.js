import styled, { keyframes, css } from 'styled-components';

// Keyframe Animations
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 20px rgba(255, 107, 107, 0.5); }
  100% { box-shadow: 0 0 30px rgba(255, 107, 107, 0.8); }
`;

const iconShine = keyframes`
  0% { left: -100%; }
  50% { left: 100%; }
  100% { left: 100%; }
`;

const progressShine = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const dotPulse = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
`;

const glowPulse = keyframes`
  0% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(1.02); }
  100% { opacity: 0.1; transform: scale(1); }
`;

// Styled Components
export const StyledSkills = styled.section`
  padding: 120px 0;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  opacity: 1;
  transform: translateY(0);

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 107, 107, 0.03) 0%, transparent 70%);
    animation: ${floatAnimation} 20s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -30%;
    width: 60%;
    height: 60%;
    background: radial-gradient(circle, rgba(238, 90, 36, 0.02) 0%, transparent 70%);
    animation: ${floatAnimation} 25s ease-in-out infinite reverse;
  }
`;

export const SkillsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

export const SkillsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #ffffff;
  text-align: center;
  position: relative;
  background: linear-gradient(135deg, #ffffff, #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #ff6b6b, #ee5a24, #ff6b6b);
    border-radius: 2px;
    animation: ${glow} 2s ease-in-out infinite alternate;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const SkillsSubtitle = styled.p`
  font-size: 1.2rem;
  color: #b0b0b0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const SkillsCategories = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 24px;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.8), rgba(45, 45, 45, 0.8));
  border: 2px solid rgba(255, 107, 107, 0.2);
  border-radius: 25px;
  color: #b0b0b0;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(238, 90, 36, 0.1));
    border-color: rgba(255, 107, 107, 0.4);
    transform: translateY(-2px);
    color: #ffffff;
  }

  ${({ active }) =>
    active &&
    css`
      background: linear-gradient(135deg, #ff6b6b, #ee5a24);
      border-color: transparent;
      color: #ffffff;
      box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
    `}

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 200px;
    justify-content: center;
  }
`;

export const CategoryIcon = styled.span`
  font-size: 1.2rem;
`;

export const CategoryName = styled.span``;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const SkillCard = styled.div`
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.9), rgba(45, 45, 45, 0.9));
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 1;
  transform: translateY(0px) scale(1);
  border-color: ${({ skillColor }) => skillColor || 'rgba(255, 255, 255, 0.1)'};

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const SkillIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ skillColor }) => skillColor || '#ff6b6b'};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: ${iconShine} 3s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const TechIcon = styled.span`
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SkillContent = styled.div`
  flex: 1;
`;

export const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SkillName = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`;

export const SkillLevel = styled.span`
  background: ${({ skillColor }) => skillColor || '#ff6b6b'};
  color: #ffffff;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

export const SkillProgress = styled.div`
  margin-bottom: 1.5rem;
`;

export const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const ProgressBar = styled.div`
  height: 100%;
  border-radius: 10px;
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  background-color: ${({ skillColor }) => skillColor || '#ff6b6b'};
  width: ${({ level }) => level || '0%'};
`;

export const ProgressGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: ${progressShine} 2s ease-in-out infinite;
`;

export const SkillMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SkillCategory = styled.span`
  font-size: 0.8rem;
  color: ${({ skillColor }) => skillColor || '#ff6b6b'};
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const SkillDots = styled.div`
  display: flex;
  gap: 4px;
`;

export const SkillDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 107, 107, 0.3);
  animation: ${dotPulse} 2s ease-in-out infinite;
  
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    animation-delay: 1s;
  }
`;

export const SkillGlow = styled.div`
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, ${({ skillColor }) => skillColor || '#ff6b6b'}, transparent, ${({ skillColor }) => skillColor || '#ff6b6b'});
  border-radius: 22px;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease;
  
  ${SkillCard}:hover & {
    opacity: 0.2;
    animation: ${glowPulse} 2s ease-in-out;
  }
`;

export const SkillsStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.8), rgba(45, 45, 45, 0.8));
  border-radius: 20px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 107, 107, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 107, 107, 0.3);
  }
`;

export const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const StatLabel = styled.div`
  font-size: 1rem;
  color: #b0b0b0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`;
