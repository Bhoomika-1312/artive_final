import React, { useState } from 'react';
import Footer from '../components/Footer';
import './Events.css';

const Events = ({ isDarkTheme }) => {
  const [filter, setFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Digital Art Workshop',
      date: 'December 15, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Computer Lab, Block A',
      description: 'Learn digital painting techniques and explore creative software tools like Photoshop and Procreate.',
      category: 'workshop',
      icon: 'fas fa-palette',
      link: '#',
      linkText: 'Register Now',
      featured: true
    },
    {
      id: 2,
      title: 'Photography Contest',
      date: 'December 20, 2024',
      time: 'All Day Event',
      location: 'Campus Wide',
      description: 'Capture the beauty of campus life and win exciting prizes. Submit your best shots!',
      category: 'contest',
      icon: 'fas fa-camera',
      link: '#',
      linkText: 'Submit Entry',
      featured: true
    },
    {
      id: 3,
      title: 'Creative Coding Workshop',
      date: 'January 5, 2025',
      time: '3:00 PM - 6:00 PM',
      location: 'Innovation Lab',
      description: 'Create stunning visual art using programming and algorithms. No coding experience required!',
      category: 'workshop',
      icon: 'fas fa-code',
      link: '#',
      linkText: 'Join Workshop',
      featured: false
    },
    {
      id: 4,
      title: 'Art Exhibition',
      date: 'January 15, 2025',
      time: '10:00 AM - 8:00 PM',
      location: 'Auditorium',
      description: 'Showcase your artwork in our annual exhibition. Open to all students and faculty.',
      category: 'exhibition',
      icon: 'fas fa-images',
      link: '#',
      linkText: 'View Details',
      featured: true
    },
    {
      id: 5,
      title: 'Design Thinking Workshop',
      date: 'January 25, 2025',
      time: '1:00 PM - 4:00 PM',
      location: 'Conference Room',
      description: 'Learn the fundamentals of design thinking and apply them to creative problem-solving.',
      category: 'workshop',
      icon: 'fas fa-lightbulb',
      link: '#',
      linkText: 'Register',
      featured: false
    },
    {
      id: 6,
      title: 'Film Making Contest',
      date: 'February 10, 2025',
      time: 'Submission Deadline',
      location: 'Online',
      description: 'Create a short film showcasing creativity and storytelling. Prizes worth ₹50,000!',
      category: 'contest',
      icon: 'fas fa-video',
      link: '#',
      linkText: 'Submit Film',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events', icon: 'fas fa-calendar' },
    { id: 'workshop', name: 'Workshops', icon: 'fas fa-tools' },
    { id: 'contest', name: 'Contests', icon: 'fas fa-trophy' },
    { id: 'exhibition', name: 'Exhibitions', icon: 'fas fa-images' }
  ];

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.category === filter);

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Upcoming Events</h1>
          <p className="page-subtitle">Discover exciting workshops, contests, and exhibitions</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                <i className={category.icon}></i>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="events-section">
        <div className="container">
          <div className="events-grid">
            {filteredEvents.map((event) => (
              <div key={event.id} className={`event-card ${event.featured ? 'featured' : ''}`}>
                {event.featured && (
                  <div className="featured-badge">
                    <i className="fas fa-star"></i>
                    Featured
                  </div>
                )}
                <div className="event-header">
                  <div className="event-icon">
                    <i className={event.icon}></i>
                  </div>
                  <div className="event-meta">
                    <span className="event-date">
                      <i className="fas fa-calendar"></i>
                      {event.date}
                    </span>
                    <span className="event-time">
                      <i className="fas fa-clock"></i>
                      {event.time}
                    </span>
                    <span className="event-location">
                      <i className="fas fa-map-marker-alt"></i>
                      {event.location}
                    </span>
                  </div>
                </div>
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  <a href={event.link} className="event-link">
                    {event.linkText}
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events; 