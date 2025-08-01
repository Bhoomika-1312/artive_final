import React from 'react';
import Footer from '../components/Footer';
import './About.css';

const About = ({ isDarkTheme }) => {
  const stats = [
    {
      id: 1,
      number: '30+',
      label: 'Active Members',
      icon: 'fas fa-users'
    },
    {
      id: 2,
      number: '10+',
      label: 'Events Organized',
      icon: 'fas fa-calendar-check'
    },
    {
      id: 3,
      number: '100+',
      label: 'Artworks Created',
      icon: 'fas fa-palette'
    },
    {
      id: 4,
      number: '5+',
      label: 'Workshops Conducted',
      icon: 'fas fa-chalkboard-teacher'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Best Creative Club Award',
      year: '2024',
      description: 'Recognized as the most innovative creative club at IIIT Kota'
    },
    {
      id: 2,
      title: 'National Art Exhibition',
      year: '2023',
      description: 'Successfully organized a national-level art exhibition'
    },
    {
      id: 3,
      title: 'Industry Collaboration',
      year: '2023',
      description: 'Partnered with leading design studios for student projects'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">About ARTIVE Club</h1>
          <p className="page-subtitle">Fostering creativity and innovation at IIIT Kota</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                ARTIVE Club is the premier creative community at IIIT Kota, dedicated to fostering 
                artistic expression and technological innovation. We bring together students passionate 
                about art, design, and creative technology to explore, learn, and create together.
              </p>
              <p>
                Our mission is to provide a platform for students to explore their creative potential, 
                learn new skills, and showcase their artistic talents. From digital art workshops to 
                photography contests, we organize various events throughout the year.
              </p>
            </div>
            <div className="mission-visual">
              <div className="mission-image">
                <i className="fas fa-lightbulb"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.id} className="stat-card">
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Passion</h3>
              <p>We believe in the power of passion-driven creativity and encourage students to pursue what they love.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Collaboration</h3>
              <p>We foster a collaborative environment where students can learn from each other and grow together.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Innovation</h3>
              <p>We encourage innovative thinking and experimentation with new technologies and artistic mediums.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Inclusivity</h3>
              <p>We welcome students from all backgrounds and skill levels to join our creative community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="achievements-timeline">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="achievement-item">
                <div className="achievement-year">{achievement.year}</div>
                <div className="achievement-content">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>Get in Touch</h2>
            <p>Have questions or want to collaborate? We'd love to hear from you!</p>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>artive@iiitkota.ac.in</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>IIIT Kota, Rajasthan, India</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91 123 456 7890</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 