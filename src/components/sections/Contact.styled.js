import styled, { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const StyledContact = styled.section`
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
    background: radial-gradient(circle at 25% 75%, rgba(238, 90, 36, 0.05) 0%, transparent 50%);
    z-index: 1;
  }
`;

export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
  animation: ${fadeIn} 0.6s ease-out forwards;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

export const ContactInfo = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p {
    color: #b0b0b0;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;

export const ContactDetails = styled.div`
  margin-bottom: 3rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  color: #e0e0e0;
  padding: 1rem;
  background: rgba(255, 107, 107, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(255, 107, 107, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 107, 107, 0.1);
    border-color: rgba(255, 107, 107, 0.3);
    transform: translateX(5px);
  }
  
  svg {
    color: #ff6b6b;
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }
`;

export const FlagIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  
  svg {
    width: 24px;
    height: 16px;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff6b6b;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 107, 107, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: #ff6b6b;
    color: white;
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
    border-color: #ff6b6b;
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ContactForm = styled.form`
  background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 107, 107, 0.1);
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
  
  @media (max-width: 576px) {
    padding: 2rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 2rem;
  
  label {
    display: block;
    margin-bottom: 0.8rem;
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 16px 20px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.05);
    color: #e0e0e0;
    font-family: inherit;
    
    &:focus {
      outline: none;
      border-color: #ff6b6b;
      background: rgba(255, 107, 107, 0.05);
      box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
    }
    
    &::placeholder {
      color: #888;
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 140px;
  }
`;

export const SubmitButton = styled.button`
  padding: 16px 32px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #ee5a24, #ff6b6b);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
    
    &::before {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  }
  
  span {
    position: relative;
    z-index: 2;
  }
`;

export const SuccessMessage = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(46, 213, 115, 0.1);
  border: 1px solid rgba(46, 213, 115, 0.2);
  border-radius: 8px;
  color: #2ed573;
  text-align: center;
  animation: ${fadeIn} 0.3s ease-out forwards;
`;
