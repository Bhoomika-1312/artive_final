import React, { useState } from 'react';
import Footer from '../components/Footer';
import './Artworks.css';

const Artworks = ({ isDarkTheme }) => {
  const [filter, setFilter] = useState('all');

  const artworks = [
    {
      id: 1,
      title: 'Digital Dreams',
      artist: 'Sarah Johnson',
      category: 'digital',
      description: 'A surreal digital painting exploring the intersection of dreams and technology.',
      image: 'https://via.placeholder.com/400x300/6366f1/ffffff?text=Digital+Art',
      likes: 124,
      views: 892
    },
    {
      id: 2,
      title: 'Abstract Reality',
      artist: 'Mike Chen',
      category: 'abstract',
      description: 'Bold abstract composition using vibrant colors and geometric shapes.',
      image: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Abstract',
      likes: 89,
      views: 567
    },
    {
      id: 3,
      title: 'Campus Sunset',
      artist: 'Priya Sharma',
      category: 'photography',
      description: 'Capturing the golden hour beauty of our campus architecture.',
      image: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Photography',
      likes: 156,
      views: 1203
    },
    {
      id: 4,
      title: 'Geometric Harmony',
      artist: 'Alex Kumar',
      category: 'vector',
      description: 'Clean vector art exploring mathematical beauty in design.',
      image: 'https://via.placeholder.com/400x300/10b981/ffffff?text=Vector+Art',
      likes: 67,
      views: 445
    },
    {
      id: 5,
      title: 'Neon Nights',
      artist: 'Emma Wilson',
      category: 'digital',
      description: 'Cyberpunk-inspired digital artwork with neon aesthetics.',
      image: 'https://via.placeholder.com/400x300/ef4444/ffffff?text=Neon+Art',
      likes: 203,
      views: 1456
    },
    {
      id: 6,
      title: 'Watercolor Dreams',
      artist: 'David Lee',
      category: 'traditional',
      description: 'Delicate watercolor painting with dreamy, ethereal quality.',
      image: 'https://via.placeholder.com/400x300/06b6d4/ffffff?text=Watercolor',
      likes: 78,
      views: 623
    },
    {
      id: 7,
      title: 'Minimalist Lines',
      artist: 'Sophie Brown',
      category: 'vector',
      description: 'Minimalist design focusing on clean lines and negative space.',
      image: 'https://via.placeholder.com/400x300/84cc16/ffffff?text=Minimalist',
      likes: 92,
      views: 734
    },
    {
      id: 8,
      title: 'Street Photography',
      artist: 'Carlos Rodriguez',
      category: 'photography',
      description: 'Urban street photography capturing everyday moments.',
      image: 'https://via.placeholder.com/400x300/f97316/ffffff?text=Street+Photo',
      likes: 134,
      views: 987
    }
  ];

  const categories = [
    { id: 'all', name: 'All Artworks', icon: 'fas fa-images' },
    { id: 'digital', name: 'Digital Art', icon: 'fas fa-desktop' },
    { id: 'photography', name: 'Photography', icon: 'fas fa-camera' },
    { id: 'vector', name: 'Vector Art', icon: 'fas fa-vector-square' },
    { id: 'traditional', name: 'Traditional', icon: 'fas fa-paint-brush' },
    { id: 'abstract', name: 'Abstract', icon: 'fas fa-palette' }
  ];

  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === filter);

  return (
    <div className="artworks-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Art Gallery</h1>
          <p className="page-subtitle">Showcasing creative talents from our community</p>
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

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {filteredArtworks.map((artwork) => (
              <div key={artwork.id} className="artwork-card">
                <div className="artwork-image">
                  <img src={artwork.image} alt={artwork.title} />
                  <div className="artwork-overlay">
                    <div className="artwork-actions">
                      <button className="action-btn">
                        <i className="fas fa-heart"></i>
                        {artwork.likes}
                      </button>
                      <button className="action-btn">
                        <i className="fas fa-eye"></i>
                        {artwork.views}
                      </button>
                      <button className="action-btn">
                        <i className="fas fa-share"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="artwork-info">
                  <h3 className="artwork-title">{artwork.title}</h3>
                  <p className="artwork-artist">By {artwork.artist}</p>
                  <p className="artwork-description">{artwork.description}</p>
                  <span className="artwork-category">
                    {categories.find(cat => cat.id === artwork.category)?.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Artwork CTA */}
      <section className="submit-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Share Your Creativity</h2>
            <p>Have an artwork to showcase? Submit it to our gallery!</p>
            <button className="btn btn-primary">
              <i className="fas fa-upload"></i>
              Submit Artwork
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Artworks; 