import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Artworks = ({ isDarkTheme }) => {
  const [filter, setFilter] = useState('all');
  const [submittedArtworks, setSubmittedArtworks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('submittedArtworks');
    if (saved) setSubmittedArtworks(JSON.parse(saved));
  }, []);

  const handleRemoveArtwork = (artworkId) => {
    if (window.confirm('Are you sure you want to remove this artwork?')) {
      const updated = submittedArtworks.filter((a) => a.id !== artworkId);
      setSubmittedArtworks(updated);
      localStorage.setItem('submittedArtworks', JSON.stringify(updated));
    }
  };

  const staticArtworks = [
    { id: 1, title: 'Digital Dreams', artist: 'Sarah Johnson', category: 'digital', description: 'A surreal digital painting exploring the intersection of dreams and technology.', image: 'https://via.placeholder.com/400x300/6366f1/ffffff?text=Digital+Art' },
    { id: 2, title: 'Abstract Reality', artist: 'Mike Chen', category: 'abstract', description: 'Bold abstract composition using vibrant colors and geometric shapes.', image: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Abstract' },
    { id: 3, title: 'Campus Sunset', artist: 'Priya Sharma', category: 'photography', description: 'Capturing the golden hour beauty of our campus architecture.', image: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Photography' },
    { id: 4, title: 'Geometric Harmony', artist: 'Alex Kumar', category: 'vector', description: 'Clean vector art exploring mathematical beauty in design.', image: 'https://via.placeholder.com/400x300/10b981/ffffff?text=Vector+Art' },
    { id: 5, title: 'Neon Nights', artist: 'Emma Wilson', category: 'digital', description: 'Cyberpunk-inspired digital artwork with neon aesthetics.', image: 'https://via.placeholder.com/400x300/ef4444/ffffff?text=Neon+Art' },
    { id: 6, title: 'Watercolor Dreams', artist: 'David Lee', category: 'traditional', description: 'Delicate watercolor painting with dreamy, ethereal quality.', image: 'https://via.placeholder.com/400x300/06b6d4/ffffff?text=Watercolor' },
    { id: 7, title: 'Minimalist Lines', artist: 'Sophie Brown', category: 'vector', description: 'Minimalist design focusing on clean lines and negative space.', image: 'https://via.placeholder.com/400x300/84cc16/ffffff?text=Minimalist' },
    { id: 8, title: 'Street Photography', artist: 'Carlos Rodriguez', category: 'photography', description: 'Urban street photography capturing everyday moments.', image: 'https://via.placeholder.com/400x300/f97316/ffffff?text=Street+Photo' },
  ];

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
    { id: 'other', name: 'Other', icon: 'fas fa-ellipsis-h' },
  ];

  const filteredArtworks = filter === 'all' ? allArtworks : allArtworks.filter((a) => a.category === filter);

  return (
    <div className="bg-white dark:bg-slate-900 pt-20">
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Art Gallery</h1>
          <p className="text-xl opacity-90">Showcasing creative talents from our community</p>
        </div>
      </section>

      <section className="py-10 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-600">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`inline-flex items-center gap-2 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 border-2
                  ${filter === cat.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-600 hover:border-blue-500 hover:text-blue-600'}`}
              >
                <i className={cat.icon} />
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork) => (
              <div
                key={artwork.id}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      {artwork.submittedAt && (
                        <button
                          type="button"
                          onClick={() => handleRemoveArtwork(artwork.id)}
                          title="Remove Artwork"
                          className="w-12 h-12 rounded-full bg-red-500/90 text-white flex items-center justify-center hover:bg-red-500 transition-colors"
                        >
                          <i className="fas fa-trash" />
                        </button>
                      )}
                      <button type="button" className="w-12 h-12 rounded-full bg-white/90 text-slate-800 flex items-center justify-center hover:bg-white transition-colors">
                        <i className="fas fa-share" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{artwork.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">By {artwork.artist}</p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">{artwork.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-medium">
                      {categories.find((c) => c.id === artwork.category)?.name || artwork.category}
                    </span>
                    {artwork.yearCreated && (
                      <span className="px-3 py-1 rounded-full bg-rose-400 text-white text-xs font-medium">{artwork.yearCreated}</span>
                    )}
                    {artwork.medium && (
                      <span className="px-3 py-1 rounded-full bg-emerald-300 text-slate-800 text-xs font-medium">{artwork.medium}</span>
                    )}
                  </div>
                  {artwork.submittedAt && (
                    <span className="block text-xs text-slate-500 dark:text-slate-400 italic mt-2">
                      Submitted {new Date(artwork.submittedAt).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-800/50 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Share Your Creativity</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">Have an artwork to showcase? Submit it to our gallery!</p>
          <Link
            to="/add-artwork"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <i className="fas fa-upload" />
            Submit Artwork
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Artworks;
