import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './AddArtwork.css';

const AddArtwork = ({ isDarkTheme }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    artworkTitle: '',
    artistName: '',
    artworkType: '',
    medium: '',
    dimensions: '',
    yearCreated: '',
    description: '',
    inspiration: '',
    tags: '',
    contactEmail: '',
    contactPhone: '',
    additionalNotes: ''
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
    } else {
      alert('Please select a valid image file (JPEG, PNG, GIF)');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // Create a proper image URL for the uploaded file
      let imageUrl = 'https://via.placeholder.com/400x300/FF6B6B/ffffff?text=New+Artwork';
      if (selectedFile) {
        imageUrl = URL.createObjectURL(selectedFile);
      }

      // Save artwork to localStorage
      const newArtwork = {
        id: Date.now(),
        title: formData.artworkTitle,
        artist: formData.artistName,
        category: formData.artworkType,
        description: formData.description,
        image: imageUrl, // Use 'image' instead of 'imageUrl' to match artworks page
        yearCreated: formData.yearCreated,
        medium: formData.medium,
        dimensions: formData.dimensions,
        tags: formData.tags,
        inspiration: formData.inspiration,
        contactEmail: formData.contactEmail,
        contactPhone: formData.contactPhone,
        additionalNotes: formData.additionalNotes,
        submittedAt: new Date().toISOString()
      };

      // Get existing artworks from localStorage
      const existingArtworks = JSON.parse(localStorage.getItem('submittedArtworks') || '[]');
      const updatedArtworks = [...existingArtworks, newArtwork];
      localStorage.setItem('submittedArtworks', JSON.stringify(updatedArtworks));

      setIsSubmitting(false);
      setSubmitMessage('Artwork submitted successfully! Redirecting to gallery...');
      
      // Redirect to artworks page after a short delay
      setTimeout(() => {
        navigate('/artworks');
      }, 2000);
    }, 2000);
  };

  return (
    <div className="add-artwork-page">
      <div className="container">
        <div className="add-artwork-header">
          <h1>Add Your Artwork</h1>
          <p>Share your creative masterpiece with the ARTIVE community!</p>
        </div>

        <div className="add-artwork-content">
          <div className="form-section">
            <form onSubmit={handleSubmit} className="artwork-submission-form">
              <div className="form-group">
                <label htmlFor="artworkTitle">Artwork Title *</label>
                <input
                  type="text"
                  id="artworkTitle"
                  name="artworkTitle"
                  value={formData.artworkTitle}
                  onChange={handleChange}
                  required
                  placeholder="Enter artwork title"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="artistName">Artist Name *</label>
                  <input
                    type="text"
                    id="artistName"
                    name="artistName"
                    value={formData.artistName}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="artworkType">Artwork Type *</label>
                  <select
                    id="artworkType"
                    name="artworkType"
                    value={formData.artworkType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select artwork type</option>
                    <option value="digital-art">Digital Art</option>
                    <option value="painting">Painting</option>
                    <option value="drawing">Drawing</option>
                    <option value="photography">Photography</option>
                    <option value="sculpture">Sculpture</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="illustration">Illustration</option>
                    <option value="mixed-media">Mixed Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="medium">Medium *</label>
                  <input
                    type="text"
                    id="medium"
                    name="medium"
                    value={formData.medium}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Digital, Oil on Canvas, Watercolor"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="yearCreated">Year Created *</label>
                  <input
                    type="number"
                    id="yearCreated"
                    name="yearCreated"
                    value={formData.yearCreated}
                    onChange={handleChange}
                    required
                    min="1900"
                    max={new Date().getFullYear()}
                    placeholder="e.g., 2024"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="dimensions">Dimensions</label>
                <input
                  type="text"
                  id="dimensions"
                  name="dimensions"
                  value={formData.dimensions}
                  onChange={handleChange}
                  placeholder="e.g., 24x36 inches, 1920x1080px"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Artwork Description *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Describe your artwork, its meaning, and what inspired you..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="inspiration">Inspiration</label>
                <textarea
                  id="inspiration"
                  name="inspiration"
                  value={formData.inspiration}
                  onChange={handleChange}
                  rows="3"
                  placeholder="What inspired you to create this artwork?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="e.g., abstract, nature, portrait, digital (separate with commas)"
                />
              </div>

              <div className="file-upload-section">
                <h3>📸 Upload Artwork Image</h3>
                <div className="file-upload-area">
                  <input
                    type="file"
                    id="artworkImage"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                    className="file-input"
                  />
                  <label htmlFor="artworkImage" className="file-label">
                    <div className="upload-icon">
                      <i className="fas fa-cloud-upload-alt"></i>
                    </div>
                    <div className="upload-text">
                      <strong>Click to upload</strong>
                      <span>or drag and drop</span>
                      <small>PNG, JPG, GIF up to 10MB</small>
                    </div>
                  </label>
                  {selectedFile && (
                    <div className="file-preview">
                      <img 
                        src={URL.createObjectURL(selectedFile)} 
                        alt="Preview" 
                        className="preview-image"
                      />
                      <span className="file-name">{selectedFile.name}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="contact-section">
                <h3>Contact Information</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contactEmail">Email *</label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      required
                      placeholder="your.email@iiitkota.ac.in"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactPhone">Phone Number</label>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="additionalNotes">Additional Notes</label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Any additional information about your artwork..."
                />
              </div>

              {submitMessage && (
                <div className="submit-message success">
                  {submitMessage}
                </div>
              )}

              <div className="form-actions">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Artwork'}
                </button>
                <Link to="/artworks" className="btn btn-secondary">
                  Cancel
                </Link>
              </div>
            </form>
          </div>

          <div className="info-section">
            <div className="info-card">
              <h3>🎨 Submission Guidelines</h3>
              <ul>
                <li>High-quality images (minimum 1200px width)</li>
                <li>Original artwork created by you</li>
                <li>Clear, well-lit photographs</li>
                <li>Accurate descriptions and details</li>
                <li>Appropriate content for all audiences</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>🎯 Artwork Categories</h3>
              <ul>
                <li><strong>Digital Art:</strong> Created using digital tools</li>
                <li><strong>Traditional Art:</strong> Paintings, drawings, sculptures</li>
                <li><strong>Photography:</strong> Original photographs</li>
                <li><strong>Graphic Design:</strong> Logos, posters, layouts</li>
                <li><strong>Illustration:</strong> Character designs, comics</li>
                <li><strong>Mixed Media:</strong> Combining different techniques</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>📞 Need Help?</h3>
              <p>Contact the ARTIVE team:</p>
              <ul>
                <li>Email: artive@iiitkota.ac.in</li>
                <li>WhatsApp: +91 98765 43210</li>
                <li>Office: Block A, Room 205</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddArtwork; 