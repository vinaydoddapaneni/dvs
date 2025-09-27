import React from 'react';
import {
  StyledAbout,
  AboutContainer,
  AboutGrid,
  AboutText,
  AboutStats,
  AboutImage,
  AboutAvatar,
  SectionTitle,
  Stat,
  StatNumber,
  StatLabel
} from './About.styled';

const About = () => {
  return (
    <StyledAbout id="about">
      <AboutContainer>
        <SectionTitle>About Me</SectionTitle>
        <AboutGrid>
          <div>
            <AboutText>
              <p>
                I'm a passionate full-stack developer with expertise in modern web technologies.
                I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
              </p>
              <p>
                With a strong foundation in both frontend and backend development, I enjoy working on
                projects that challenge me to learn and grow. I'm always eager to take on new challenges
                and collaborate with like-minded individuals.
              </p>
              <AboutStats>
                <Stat>
                  <StatNumber>3+</StatNumber>
                  <StatLabel>Years Experience</StatLabel>
                </Stat>
                <Stat>
                  <StatNumber>50+</StatNumber>
                  <StatLabel>Projects Completed</StatLabel>
                </Stat>
                <Stat>
                  <StatNumber>20+</StatNumber>
                  <StatLabel>Happy Clients</StatLabel>
                </Stat>
              </AboutStats>
            </AboutText>
          </div>
          <AboutImage>
            <AboutAvatar />
          </AboutImage>
        </AboutGrid>
      </AboutContainer>
    </StyledAbout>
  );
};

export default About;
