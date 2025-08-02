import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Home.css';

const Home = ({ isDarkTheme }) => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-particles">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}></div>
            ))}
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to <span className="highlight">ARTIVE</span> Club
            </h1>
            <p className="hero-subtitle">
              Where creativity meets technology at IIIT Kota
            </p>
            <p className="hero-description">
              Join our vibrant community of artists, designers, and creative technologists. 
              Explore digital art, photography, creative coding, and much more!
            </p>
            <div className="hero-buttons">
              <Link to="/events" className="btn btn-primary">
                <i className="fas fa-calendar-alt"></i>
                Explore Events
              </Link>
              <Link to="/artworks" className="btn btn-secondary">
                <i className="fas fa-palette"></i>
                View Gallery
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-elements">
              <div className="element element-1" style={{ animationDelay: '0s' }}>🎨</div>
              <div className="element element-2" style={{ animationDelay: '1s' }}>💻</div>
              <div className="element element-3" style={{ animationDelay: '2s' }}>🎭</div>
              <div className="element element-4" style={{ animationDelay: '3s' }}>📱</div>
              <div className="element element-5" style={{ animationDelay: '1.5s' }}>🎪</div>
              <div className="element element-6" style={{ animationDelay: '2.5s' }}>🌟</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose ARTIVE?</h2>
          <div className="features-grid">
            <div className="feature-card" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Creative Innovation</h3>
              <p>Push the boundaries of creativity with cutting-edge technology and innovative approaches.</p>
            </div>
            <div className="feature-card" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community</h3>
              <p>Connect with like-minded creatives and build lasting friendships in our supportive community.</p>
            </div>
            <div className="feature-card" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>Recognition</h3>
              <p>Showcase your talent and get recognized for your creative achievements and contributions.</p>
            </div>
            <div className="feature-card" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Learning</h3>
              <p>Learn new skills through workshops, tutorials, and hands-on projects with expert guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item" style={{ animationDelay: '0.1s' }}>
              <div className="stat-number">30+</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat-item" style={{ animationDelay: '0.2s' }}>
              <div className="stat-number">10+</div>
              <div className="stat-label">Events Organized</div>
            </div>
            <div className="stat-item" style={{ animationDelay: '0.3s' }}>
              <div className="stat-number">100+</div>
              <div className="stat-label">Artworks Created</div>
            </div>
            <div className="stat-item" style={{ animationDelay: '0.4s' }}>
              <div className="stat-number">5+</div>
              <div className="stat-label">Workshops Conducted</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join the Creative Revolution?</h2>
            <p>Become part of the most vibrant creative community at IIIT Kota</p>
            <div className="cta-buttons">
              <Link to="/about" className="btn btn-primary">
                Learn More
              </Link>
              <Link to="/team" className="btn btn-blue">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home; 