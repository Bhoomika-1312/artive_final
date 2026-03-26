import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const AddArtwork = ({ isDarkTheme }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    artworkTitle: '', artistName: '', artworkType: '', medium: '', dimensions: '', yearCreated: '',
    description: '', inspiration: '', tags: '', contactEmail: '', contactPhone: '', additionalNotes: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) setSelectedFile(file);
    else alert('Please select a valid image file (JPEG, PNG, GIF)');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      let imageUrl = 'https://via.placeholder.com/400x300/FF6B6B/ffffff?text=New+Artwork';
      if (selectedFile) imageUrl = URL.createObjectURL(selectedFile);
      const newArtwork = {
        id: Date.now(),
        title: formData.artworkTitle,
        artist: formData.artistName,
        category: formData.artworkType,
        description: formData.description,
        image: imageUrl,
        yearCreated: formData.yearCreated,
        medium: formData.medium,
        dimensions: formData.dimensions,
        tags: formData.tags,
        inspiration: formData.inspiration,
        contactEmail: formData.contactEmail,
        contactPhone: formData.contactPhone,
        additionalNotes: formData.additionalNotes,
        submittedAt: new Date().toISOString(),
      };
      const existing = JSON.parse(localStorage.getItem('submittedArtworks') || '[]');
      localStorage.setItem('submittedArtworks', JSON.stringify([...existing, newArtwork]));
      setIsSubmitting(false);
      setSubmitMessage('Artwork submitted successfully! Redirecting to gallery...');
      setTimeout(() => navigate('/artworks'), 2000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12 py-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Add Your Artwork
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-xl mx-auto">
            Share your creative masterpiece with the ARTIVE community!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 md:p-10 shadow-lg border-2 border-blue-200/30 dark:border-slate-600 flex flex-col gap-6">
              <div>
                <label htmlFor="artworkTitle" className="block font-semibold text-slate-800 dark:text-slate-200 mb-2">Artwork Title *</label>
                <input type="text" id="artworkTitle" name="artworkTitle" value={formData.artworkTitle} onChange={handleChange} required placeholder="Enter artwork title" className="w-full px-4 py-3 rounded-xl border-2 border-blue-200/50 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="artistName" className="block font-semibold text-slate-800 dark:text-slate-200 mb-2">Artist Name *</label>
                  <input type="text" id="artistName" name="artistName" value={formData.artistName} onChange={handleChange} required placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border-2 border-blue-200/50 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label htmlFor="artworkType" className="block font-semibold text-slate-800 dark:text-slate-200 mb-2">Artwork Type *</label>
                  <select id="artworkType" name="artworkType" value={formData.artworkType} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-blue-200/50 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="medium" className="block font-semibold text-slate-800 dark:text-slate-200 mb-2">Medium *</label>
                  <input type="text" id="medium" name="medium" value={formData.medium} onChange={handleChange} required placeholder="e.g., Digital, Oil on Canvas" className="w-full px-4 py-3 rounded-xl border-2 border-blue-200/50 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label htmlFor="yearCreated" className="block font-semibold text-slate-800 dark:text-slate-200 mb-2">Year Created *</label>
                  <input type="number" id="yearCreated" name="yearCreated" value={formData.yearCreated} onChange={handleChange} required min="1900" max={new Date().getFullYear()} placeholder="e.g., 2024" className="w-full px-4 py-3 rounded-xl border-2 border-blue-200/50 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label htmlFor="dimensions" className="block font-semibold text-slate-800 dark:text-slate-200 mb-2">Dimensions</label>
                <input type="text" id="dimensions" name="dimensions" value={formData.dimensions} onChange={handleChange} placeholder="e.g., 24x36 inches" className="w-full px-4 py-3 rounded-xl border-2 border-blue-200/50 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="description" className="block font-semibold text-slate-800 dark:text-slate-200 mb-2">Artwork Description *</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} required rows={4} placeholder="Describe your artwork..." className="w-full px-4 py-3 rounded-xl border-2 border-blue-200/50 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] resize-y" />
              </div>
              <div>
                <label htmlFor="inspiration" className="block font-semibold text-slate-800 dark:text-slate-200 mb-2">Inspiration</label>
                <textarea id="inspiration" name="inspiration" value={formData.inspiration} onChange={handleChange} rows={3} placeholder="What inspired you?" className="w-full px-4 py-3 rounded-xl border-2 border-blue-200/50 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y" />
              </div>
              <div>
                <label htmlFor="tags" className="block font-semibold text-slate-800 dark:text-slate-200 mb-2">Tags</label>
                <input type="text" id="tags" name="tags" value={formData.tags} onChange={handleChange} placeholder="e.g., abstract, nature (comma separated)" className="w-full px-4 py-3 rounded-xl border-2 border-blue-200/50 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div className="my-4 p-8 border-2 border-dashed border-blue-300/50 dark:border-slate-500 rounded-2xl bg-blue-50/50 dark:bg-slate-700/50 hover:border-blue-500 transition-colors">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Upload Artwork Image</h3>
                <div className="relative">
                  <input type="file" id="artworkImage" accept="image/*" onChange={handleFileChange} required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <label htmlFor="artworkImage" className="flex flex-col items-center justify-center py-8 px-4 rounded-xl bg-blue-100 dark:bg-slate-600 cursor-pointer hover:bg-blue-200 dark:hover:bg-slate-500 transition-colors">
                    <i className="fas fa-cloud-upload-alt text-4xl text-blue-600 dark:text-blue-400 mb-4" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Click to upload</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">or drag and drop</span>
                    <small className="text-xs text-slate-500 mt-1">PNG, JPG, GIF up to 10MB</small>
                  </label>
                </div>
                {selectedFile && (
                  <div className="mt-4 text-center">
                    <img src={URL.createObjectURL(selectedFile)} alt="Preview" className="max-w-[200px] max-h-[200px] rounded-xl shadow-md mx-auto mb-2" />
                    <span className="text-sm text-slate-600 dark:text-slate-400 break-all">{selectedFile.name}</span>
                  </div>
                )}
              </div>

              <div className="pt-6 border-t-2 border-blue-200/30 dark:border-slate-600">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactEmail" className="block font-semibold text-slate-800 dark:text-slate-200 mb-2">Email *</label>
                    <input type="email" id="contactEmail" name="contactEmail" value={formData.contactEmail} onChange={handleChange} required placeholder="your.email@iiitkota.ac.in" className="w-full px-4 py-3 rounded-xl border-2 border-blue-200/50 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="contactPhone" className="block font-semibold text-slate-800 dark:text-slate-200 mb-2">Phone</label>
                    <input type="tel" id="contactPhone" name="contactPhone" value={formData.contactPhone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border-2 border-blue-200/50 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="additionalNotes" className="block font-semibold text-slate-800 dark:text-slate-200 mb-2">Additional Notes</label>
                <textarea id="additionalNotes" name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} rows={3} placeholder="Any additional information..." className="w-full px-4 py-3 rounded-xl border-2 border-blue-200/50 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y" />
              </div>

              {submitMessage && (
                <div className="p-4 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 font-medium text-center border border-blue-200 dark:border-blue-700">
                  {submitMessage}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button type="submit" disabled={isSubmitting} className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none">
                  {isSubmitting ? 'Submitting...' : 'Submit Artwork'}
                </button>
                <Link to="/artworks" className="px-8 py-4 rounded-xl font-semibold bg-blue-50 dark:bg-slate-700 text-blue-800 dark:text-blue-200 border-2 border-blue-200 dark:border-slate-600 text-center transition-all hover:-translate-y-0.5">
                  Cancel
                </Link>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            {[
              { title: 'Submission Guidelines', emoji: '🎨', items: ['High-quality images (min 1200px width)', 'Original artwork by you', 'Clear, well-lit photographs', 'Accurate descriptions', 'Appropriate content for all audiences'] },
              { title: 'Artwork Categories', emoji: '🎯', items: ['Digital Art: digital tools', 'Traditional: paintings, drawings', 'Photography: original photos', 'Graphic Design: logos, posters', 'Illustration: characters, comics', 'Mixed Media: combined techniques'] },
              { title: 'Need Help?', emoji: '📞', items: ['Email: artive@iiitkota.ac.in', 'WhatsApp: +91 98765 43210', 'Office: Block A, Room 205'] },
            ].map((card) => (
              <div key={card.title} className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 shadow-md border border-blue-200/30 dark:border-slate-600 hover:-translate-y-1 hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">{card.emoji} {card.title}</h3>
                <ul className="list-none p-0 m-0 space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                  {card.items.map((item, i) => (
                    <li key={i} className="py-2 border-b border-blue-200/30 dark:border-slate-600 last:border-0">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddArtwork;
