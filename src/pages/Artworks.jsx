import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Artworks.css';

const Artworks = ({ isDarkTheme }) => {
  const [filter, setFilter] = useState('all');
  const [submittedArtworks, setSubmittedArtworks] = useState([]);

  // Load submitted artworks from localStorage on component mount
  useEffect(() => {
    const savedArtworks = localStorage.getItem('submittedArtworks');
    if (savedArtworks) {
      setSubmittedArtworks(JSON.parse(savedArtworks));
    }
  }, []);

  // Function to remove artwork
  const handleRemoveArtwork = (artworkId) => {
    if (window.confirm('Are you sure you want to remove this artwork?')) {
      const updatedArtworks = submittedArtworks.filter(artwork => artwork.id !== artworkId);
      setSubmittedArtworks(updatedArtworks);
      localStorage.setItem('submittedArtworks', JSON.stringify(updatedArtworks));
    }
  };

  // Static artworks (existing)
  const staticArtworks = [
    {
      id: 1,
      title: 'Digital Dreams',
      artist: 'Sarah Johnson',
      category: 'digital',
      description: 'A surreal digital painting exploring the intersection of dreams and technology.',
      image: 'https://via.placeholder.com/400x300/6366f1/ffffff?text=Digital+Art'
    },
    {
      id: 2,
      title: 'Abstract Reality',
      artist: 'Mike Chen',
      category: 'abstract',
      description: 'Bold abstract composition using vibrant colors and geometric shapes.',
      image: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Abstract'
    },
    {
      id: 3,
      title: 'Campus Sunset',
      artist: 'Priya Sharma',
      category: 'photography',
      description: 'Capturing the golden hour beauty of our campus architecture.',
      image: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Photography'
    },
    {
      id: 4,
      title: 'Geometric Harmony',
      artist: 'Alex Kumar',
      category: 'vector',
      description: 'Clean vector art exploring mathematical beauty in design.',
      image: 'https://via.placeholder.com/400x300/10b981/ffffff?text=Vector+Art'
    },
    {
      id: 5,
      title: 'Neon Nights',
      artist: 'Emma Wilson',
      category: 'digital',
      description: 'Cyberpunk-inspired digital artwork with neon aesthetics.',
      image: 'https://via.placeholder.com/400x300/ef4444/ffffff?text=Neon+Art'
    },
    {
      id: 6,
      title: 'Watercolor Dreams',
      artist: 'David Lee',
      category: 'traditional',
      description: 'Delicate watercolor painting with dreamy, ethereal quality.',
      image: 'https://via.placeholder.com/400x300/06b6d4/ffffff?text=Watercolor'
    },
    {
      id: 7,
      title: 'Minimalist Lines',
      artist: 'Sophie Brown',
      category: 'vector',
      description: 'Minimalist design focusing on clean lines and negative space.',
      image: 'https://via.placeholder.com/400x300/84cc16/ffffff?text=Minimalist'
    },
    {
      id: 8,
      title: 'Street Photography',
      artist: 'Carlos Rodriguez',
      category: 'photography',
      description: 'Urban street photography capturing everyday moments.',
      image: 'https://via.placeholder.com/400x300/f97316/ffffff?text=Street+Photo'
    }
  ];

  // Combine static and submitted artworks
  const allArtworks = [...staticArtworks, ...submittedArtworks];

  const categories = [
    { id: 'all', name: 'All Artworks', icon: 'fas fa-images' },
    { id: 'digital', name: 'Digital Art', icon: 'fas fa-desktop' },
    { id: 'photography', name: 'Photography', icon: 'fas fa-camera' },
    { id: 'vector', name: 'Vector Art', icon: 'fas fa-vector-square' },
    { id: 'traditional', name: 'Traditional', icon: 'fas fa-paint-brush' },
    { id: 'abstract', name: 'Abstract', icon: 'fas fa-palette' },
    { id: 'painting', name: 'Painting', icon: 'fas fa-palette' },
    { id: 'drawing', name: 'Drawing', icon: 'fas fa-pencil-alt' },
    { id: 'sculpture', name: 'Sculpture', icon: 'fas fa-cube' },
    { id: 'graphic-design', name: 'Graphic Design', icon: 'fas fa-bezier-curve' },
    { id: 'illustration', name: 'Illustration', icon: 'fas fa-magic' },
    { id: 'mixed-media', name: 'Mixed Media', icon: 'fas fa-layer-group' },
    { id: 'other', name: 'Other', icon: 'fas fa-ellipsis-h' }
  ];

  const filteredArtworks = filter === 'all' 
    ? allArtworks 
    : allArtworks.filter(artwork => artwork.category === filter);

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
                      {artwork.submittedAt && (
                        <button 
                          className="action-btn remove-btn"
                          onClick={() => handleRemoveArtwork(artwork.id)}
                          title="Remove Artwork"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      )}
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
                  <div className="artwork-details">
                    <span className="artwork-category">
                      {categories.find(cat => cat.id === artwork.category)?.name || artwork.category}
                    </span>
                    {artwork.yearCreated && (
                      <span className="artwork-year">{artwork.yearCreated}</span>
                    )}
                    {artwork.medium && (
                      <span className="artwork-medium">{artwork.medium}</span>
                    )}
                  </div>
                  {artwork.submittedAt && (
                    <span className="artwork-submitted">
                      Submitted {new Date(artwork.submittedAt).toLocaleDateString()}
                    </span>
                  )}
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
            <Link to="/add-artwork" className="btn btn-primary">
              <i className="fas fa-upload"></i>
              Submit Artwork
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Artworks; 