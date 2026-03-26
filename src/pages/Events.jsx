import React, { useState } from 'react';
import Footer from '../components/Footer';

const Events = ({ isDarkTheme }) => {
  const [filter, setFilter] = useState('all');

  const events = [
    { id: 1, title: 'Digital Art Workshop', date: 'December 15, 2024', time: '2:00 PM - 5:00 PM', location: 'Computer Lab, Block A', description: 'Learn digital painting techniques and explore creative software tools like Photoshop and Procreate.', category: 'workshop', icon: 'fas fa-palette', link: '#', linkText: 'Register Now', featured: true },
    { id: 2, title: 'Photography Contest', date: 'December 20, 2024', time: 'All Day Event', location: 'Campus Wide', description: 'Capture the beauty of campus life and win exciting prizes. Submit your best shots!', category: 'contest', icon: 'fas fa-camera', link: '#', linkText: 'Submit Entry', featured: true },
    { id: 3, title: 'Creative Coding Workshop', date: 'January 5, 2025', time: '3:00 PM - 6:00 PM', location: 'Innovation Lab', description: 'Create stunning visual art using programming and algorithms. No coding experience required!', category: 'workshop', icon: 'fas fa-code', link: '#', linkText: 'Join Workshop', featured: false },
    { id: 4, title: 'Art Exhibition', date: 'January 15, 2025', time: '10:00 AM - 8:00 PM', location: 'Auditorium', description: 'Showcase your artwork in our annual exhibition. Open to all students and faculty.', category: 'exhibition', icon: 'fas fa-images', link: '#', linkText: 'View Details', featured: true },
    { id: 5, title: 'Design Thinking Workshop', date: 'January 25, 2025', time: '1:00 PM - 4:00 PM', location: 'Conference Room', description: 'Learn the fundamentals of design thinking and apply them to creative problem-solving.', category: 'workshop', icon: 'fas fa-lightbulb', link: '#', linkText: 'Register', featured: false },
    { id: 6, title: 'Film Making Contest', date: 'February 10, 2025', time: 'Submission Deadline', location: 'Online', description: 'Create a short film showcasing creativity and storytelling. Prizes worth ₹50,000!', category: 'contest', icon: 'fas fa-video', link: '#', linkText: 'Submit Film', featured: true },
  ];

  const categories = [
    { id: 'all', name: 'All Events', icon: 'fas fa-calendar' },
    { id: 'workshop', name: 'Workshops', icon: 'fas fa-tools' },
    { id: 'contest', name: 'Contests', icon: 'fas fa-trophy' },
    { id: 'exhibition', name: 'Exhibitions', icon: 'fas fa-images' },
  ];

  const filteredEvents = filter === 'all' ? events : events.filter((e) => e.category === filter);

  return (
    <div className="bg-white dark:bg-slate-900 pt-20">
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Upcoming Events</h1>
          <p className="text-xl opacity-90">Discover exciting workshops, contests, and exhibitions</p>
        </div>
      </section>

      <section className="py-10 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-600">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`inline-flex items-center gap-2 py-3 px-6 rounded-full font-medium transition-all duration-300 border-2
                  ${filter === cat.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-600 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5'}`}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className={`bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-md border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden
                  ${event.featured ? 'border-2 border-amber-500' : 'border-slate-200 dark:border-slate-600'}`}
              >
                {event.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-amber-500 text-white py-2 px-4 rounded-full text-sm font-semibold">
                    <i className="fas fa-star" />
                    Featured
                  </div>
                )}
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-violet-500 flex items-center justify-center text-2xl text-white shrink-0">
                    <i className={event.icon} />
                  </div>
                  <div className="flex flex-col gap-2 flex-1 md:text-left text-center">
                    <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                      <i className="fas fa-calendar text-blue-500 w-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                      <i className="fas fa-clock text-blue-500 w-4" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                      <i className="fas fa-map-marker-alt text-blue-500 w-4" />
                      {event.location}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">{event.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{event.description}</p>
                <a
                  href={event.link}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-violet-600 dark:hover:text-violet-400 hover:gap-3 transition-all"
                >
                  {event.linkText}
                  <i className="fas fa-arrow-right" />
                </a>
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
