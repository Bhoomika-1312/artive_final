import React from 'react';
import Footer from '../components/Footer';
import './Team.css';

const Team = ({ isDarkTheme }) => {
  const teamMembers = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'President',
      bio: 'Passionate about digital art and creative technology. Leading the club with vision and innovation.',
      avatar: 'https://via.placeholder.com/150x150/6366f1/ffffff?text=RS',
      linkedin: '#',
      instagram: '#',
      github: '#',
      skills: ['Digital Art', 'Leadership', 'Creative Technology']
    },
    {
      id: 2,
      name: 'Anjali Patel',
      role: 'Vice President',
      bio: 'Expert in photography and visual storytelling. Dedicated to fostering creative expression.',
      avatar: 'https://via.placeholder.com/150x150/8b5cf6/ffffff?text=AP',
      linkedin: '#',
      instagram: '#',
      github: '#',
      skills: ['Photography', 'Visual Design', 'Event Management']
    },
    {
      id: 3,
      name: 'Vikram Singh',
      role: 'Secretary',
      bio: 'Specializes in creative coding and generative art. Bringing technology and art together.',
      avatar: 'https://via.placeholder.com/150x150/f59e0b/ffffff?text=VS',
      linkedin: '#',
      instagram: '#',
      github: '#',
      skills: ['Creative Coding', 'Generative Art', 'Web Development']
    },
    {
      id: 4,
      name: 'Meera Reddy',
      role: 'Treasurer',
      bio: 'Loves traditional art forms and digital illustration. Managing club finances with creativity.',
      avatar: 'https://via.placeholder.com/150x150/10b981/ffffff?text=MR',
      linkedin: '#',
      instagram: '#',
      github: '#',
      skills: ['Traditional Art', 'Digital Illustration', 'Finance']
    },
    {
      id: 5,
      name: 'Arjun Kumar',
      role: 'Event Coordinator',
      bio: 'Expert in organizing creative events and workshops. Making art accessible to everyone.',
      avatar: 'https://via.placeholder.com/150x150/ef4444/ffffff?text=AK',
      linkedin: '#',
      instagram: '#',
      github: '#',
      skills: ['Event Planning', 'Workshop Facilitation', 'Community Building']
    },
    {
      id: 6,
      name: 'Priya Sharma',
      role: 'Content Manager',
      bio: 'Creative writer and content strategist. Sharing our stories with the world.',
      avatar: 'https://via.placeholder.com/150x150/06b6d4/ffffff?text=PS',
      linkedin: '#',
      instagram: '#',
      github: '#',
      skills: ['Content Creation', 'Social Media', 'Creative Writing']
    }
  ];

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Meet Our Team</h1>
          <p className="page-subtitle">The creative minds behind ARTIVE Club</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="team-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member-card">
                <div className="member-avatar">
                  <img src={member.avatar} alt={member.name} />
                  <div className="member-overlay">
                    <div className="social-links">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-skills">
                    {member.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="join-team-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Want to Join Our Team?</h2>
            <p>We're always looking for passionate creatives to join our leadership team!</p>
            <button className="btn btn-primary">
              <i className="fas fa-users"></i>
              Apply Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team; 