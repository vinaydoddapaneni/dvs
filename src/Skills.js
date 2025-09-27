import React, { useState } from 'react';
import './Skills.css';

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
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="skills-subtitle">Technologies I work with to bring ideas to life</p>
        </div>

        {/* Category Filter */}
        <div className="skills-categories">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{'--skill-color': skill.color}}
            >
              <div className="skill-icon">
                <span className="tech-icon">{skill.icon}</span>
              </div>

              <div className="skill-content">
                <div className="skill-header">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-level">{skill.level}%</span>
                </div>

                <div className="skill-progress">
                  <div className="progress-container">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color
                      }}
                    >
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                </div>

                <div className="skill-meta">
                  <div className="skill-category">{skill.category}</div>
                  <div className="skill-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>

              <div className="skill-glow"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="skills-stats">
          <div className="stat-item">
            <div className="stat-number">
              {activeCategory === 'all' ? '19' :
               activeCategory === 'frontend' ? '6' :
               activeCategory === 'backend' ? '5' :
               activeCategory === 'database' ? '4' : '5'}
            </div>
            <div className="stat-label">
              {activeCategory === 'all' ? 'Technologies' :
               activeCategory === 'frontend' ? 'Frontend Skills' :
               activeCategory === 'backend' ? 'Backend Skills' :
               activeCategory === 'database' ? 'Database Skills' : 'Tools'}
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
