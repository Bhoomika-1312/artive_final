import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12 pt-8">
    <div className="max-w-6xl mx-auto px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-indigo-400 font-semibold mb-4 text-lg">ARTIVE</h3>
          <p className="text-gray-400 text-sm mb-2">
            The official art club of IIIT Kota, fostering creativity and artistic expression among students.
          </p>
          <div className="flex gap-3 mt-4">
            {['facebook', 'instagram', 'twitter', 'linkedin'].map((name) => (
              <a
                key={name}
                href="#"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-indigo-500 hover:text-white transition-colors"
                aria-label={name}
              >
                <i className={`fab fa-${name}`} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-indigo-400 font-semibold mb-4">Quick Links</h4>
          <ul className="list-none p-0 m-0 space-y-2">
            {[
              { to: '/', label: 'Home' },
              { to: '/events', label: 'Events' },
              { to: '/artworks', label: 'Artworks' },
              { to: '/team', label: 'Team' },
              { to: '/about', label: 'About Us' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-gray-400 hover:text-indigo-400 transition-colors no-underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-indigo-400 font-semibold mb-4">Contact Info</h4>
          <div className="space-y-2 text-gray-400 text-sm">
            <p className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-indigo-400 w-4" />
              IIIT Kota, Rajasthan
            </p>
            <p className="flex items-center gap-2">
              <i className="fas fa-envelope text-indigo-400 w-4" />
              artive@iiitkota.ac.in
            </p>
            <p className="flex items-center gap-2">
              <i className="fas fa-phone text-indigo-400 w-4" />
              +91 1234567890
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-indigo-400 font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to our newsletter for updates on events and activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 font-medium transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        <p className="m-0">&copy; 2024 ARTIVE Club, IIIT Kota. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
