import React from 'react';
import { SectionTitle } from '../../styles/shared/StyledComponents';
import {
  StyledProjects,
  ProjectsContainer,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectImg,
  ProjectOverlay,
  ProjectLinks,
  ProjectLink,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectTechnologies,
  TechTag
} from './Projects.styled';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.',
      image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=E-Commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=Task+App',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts and interactive charts.',
      image: 'https://via.placeholder.com/400x250/ffd700/333333?text=Weather',
      technologies: ['React', 'Chart.js', 'OpenWeather API'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <StyledProjects id="projects">
      <ProjectsContainer>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} delay={`${index * 100}ms`}>
              <ProjectImage>
                <ProjectImg src={project.image} alt={project.title} />
                <ProjectOverlay>
                  <ProjectLinks>
                    <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </ProjectLink>
                    <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectOverlay>
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTechnologies>
                  {project.technologies.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </ProjectTechnologies>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </StyledProjects>
  );
};

export default Projects;
