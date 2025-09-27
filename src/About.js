import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a passionate full-stack developer with expertise in modern web technologies.
                I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
              </p>
              <p>
                With a strong foundation in both frontend and backend development, I enjoy working on
                projects that challenge me to learn and grow. I'm always eager to take on new challenges
                and collaborate with like-minded individuals.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-avatar"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
