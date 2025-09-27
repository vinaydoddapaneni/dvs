import React, { useState } from 'react';
import {
  StyledSkills,
  SkillsContainer,
  SkillsHeader,
  SectionTitle,
  SkillsSubtitle,
  SkillsCategories,
  CategoryButton,
  CategoryIcon,
  CategoryName,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  TechIcon,
  SkillContent,
  SkillHeader,
  SkillName,
  SkillLevel,
  SkillProgress,
  ProgressContainer,
  ProgressBar,
  ProgressGlow,
  SkillMeta,
  SkillCategory,
  SkillDots,
  SkillDot,
  SkillGlow,
  SkillsStats,
  StatItem,
  StatNumber,
  StatLabel
} from './Skills.styled';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: '🚀' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'database', name: 'Database', icon: '🗄️' },
    { id: 'tools', name: 'Tools', icon: '🔧' }
  ];

  const skills = [
    // Frontend Skills
    { name: 'React', level: 95, category: 'frontend', color: '#61DAFB', icon: '⚛️' },
    { name: 'JavaScript', level: 90, category: 'frontend', color: '#F7DF1E', icon: '🟨' },
    { name: 'TypeScript', level: 85, category: 'frontend', color: '#3178C6', icon: '🔷' },
    { name: 'HTML/CSS', level: 95, category: 'frontend', color: '#E34F26', icon: '🌐' },
    { name: 'Next.js', level: 88, category: 'frontend', color: '#000000', icon: '▲' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend', color: '#06B6D4', icon: '💨' },

    // Backend Skills
    { name: 'Node.js', level: 85, category: 'backend', color: '#339933', icon: '🟢' },
    { name: 'Python', level: 80, category: 'backend', color: '#3776AB', icon: '🐍' },
    { name: 'Express.js', level: 85, category: 'backend', color: '#000000', icon: '🚂' },
    { name: 'REST APIs', level: 90, category: 'backend', color: '#FF6B6B', icon: '🔌' },
    { name: 'GraphQL', level: 75, category: 'backend', color: '#E10098', icon: '◉' },

    // Database Skills
    { name: 'MongoDB', level: 80, category: 'database', color: '#47A248', icon: '🍃' },
    { name: 'PostgreSQL', level: 75, category: 'database', color: '#336791', icon: '🐘' },
    { name: 'Redis', level: 70, category: 'database', color: '#DC143C', icon: '⚡' },
    { name: 'Firebase', level: 85, category: 'database', color: '#FFCA28', icon: '🔥' },

    // Tools & Technologies
    { name: 'Git', level: 90, category: 'tools', color: '#F05032', icon: '📝' },
    { name: 'Docker', level: 75, category: 'tools', color: '#2496ED', icon: '🐳' },
    { name: 'AWS', level: 70, category: 'tools', color: '#FF9900', icon: '☁️' },
    { name: 'Linux', level: 80, category: 'tools', color: '#FCC624', icon: '🐧' },
    { name: 'VS Code', level: 95, category: 'tools', color: '#007ACC', icon: '💻' }
  ];
  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <StyledSkills id="skills">
      <SkillsContainer>
        <SkillsHeader>
          <SectionTitle>Skills & Technologies</SectionTitle>
          <SkillsSubtitle>Technologies I work with to bring ideas to life</SkillsSubtitle>
        </SkillsHeader>

        {/* Category Filter */}
        <SkillsCategories>
          {skillCategories.map((category) => (
            <CategoryButton
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryName>{category.name}</CategoryName>
            </CategoryButton>
          ))}
        </SkillsCategories>

        {/* Skills Grid */}
        <SkillsGrid>
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skillColor={skill.color}>
              <SkillIcon skillColor={skill.color}>
                <TechIcon>{skill.icon}</TechIcon>
              </SkillIcon>

              <SkillContent>
                <SkillHeader>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel skillColor={skill.color}>
                    {skill.level}%
                  </SkillLevel>
                </SkillHeader>

                <SkillProgress>
                  <ProgressContainer>
                    <ProgressBar 
                      skillColor={skill.color}
                      level={`${skill.level}%`}
                    >
                      <ProgressGlow />
                    </ProgressBar>
                  </ProgressContainer>
                </SkillProgress>

                <SkillMeta>
                  <SkillCategory skillColor={skill.color}>
                    {skill.category}
                  </SkillCategory>
                  <SkillDots>
                    <SkillDot />
                    <SkillDot />
                    <SkillDot />
                  </SkillDots>
                </SkillMeta>
              </SkillContent>

              <SkillGlow skillColor={skill.color} />
            </SkillCard>
          ))}
        </SkillsGrid>

        {/* Stats Section */}
        <SkillsStats>
          <StatItem>
            <StatNumber>5+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>100+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>50+</StatNumber>
            <StatLabel>Happy Clients</StatLabel>
          </StatItem>
        </SkillsStats>
      </SkillsContainer>
    </StyledSkills>
  );
};

export default Skills;
