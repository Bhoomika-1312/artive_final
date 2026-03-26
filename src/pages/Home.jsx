import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = ({ isDarkTheme }) => (
  <div className="bg-white dark:bg-slate-900">
    {/* Hero */}
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-violet-600">
      <div className="absolute inset-0 z-[1]" aria-hidden>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full animate-[float_6s_ease-in-out_infinite]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-[2] flex items-center w-full max-w-6xl mx-auto px-5 text-white flex-col md:flex-row md:text-left text-center py-8">
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-sm animate-[slideInLeft_1s_ease]">
            Welcome to <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent animate-[pulse_2s_ease-in-out_infinite]">ARTIVE</span> Club
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90 animate-[slideInLeft_1s_ease_0.2s_both]">
            Where creativity meets technology at IIIT Kota
          </p>
          <p className="text-lg mb-10 opacity-80 leading-relaxed animate-[slideInLeft_1s_ease_0.4s_both]">
            Join our vibrant community of artists, designers, and creative technologists. Explore digital art, photography, creative coding, and much more!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start animate-[slideInLeft_1s_ease_0.6s_both]">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:from-violet-600 hover:to-violet-500 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <i className="fas fa-calendar-alt" />
              Explore Events
            </Link>
            <Link
              to="/artworks"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base bg-transparent text-white border-2 border-white transition-all duration-300 hover:bg-white hover:text-blue-600 hover:-translate-y-1"
            >
              <i className="fas fa-palette" />
              View Gallery
            </Link>
          </div>
        </div>
        <div className="flex-1 relative h-[50vh] md:h-screen flex items-center justify-center">
          <div className="relative w-full h-full">
            {[
              { emoji: '🎨', top: '20%', left: '20%', delay: '0s' },
              { emoji: '💻', top: '60%', left: '70%', delay: '1s' },
              { emoji: '🎭', top: '40%', left: '80%', delay: '2s' },
              { emoji: '📱', top: '80%', left: '30%', delay: '3s' },
              { emoji: '🎪', top: '30%', left: '60%', delay: '1.5s' },
              { emoji: '🌟', top: '70%', left: '10%', delay: '2.5s' },
            ].map(({ emoji, top, left, delay }, i) => (
              <div
                key={i}
                className="absolute text-4xl md:text-5xl opacity-80 drop-shadow-md transition-all duration-300 hover:scale-110 hover:opacity-100 hover:drop-shadow-xl"
                style={{
                  top,
                  left,
                  animation: 'float 6s ease-in-out infinite',
                  animationDelay: delay,
                }}
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-slate-900 dark:text-white relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-blue-500 after:rounded">
          Why Choose ARTIVE?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[
            { icon: 'fas fa-lightbulb', title: 'Creative Innovation', desc: 'Push the boundaries of creativity with cutting-edge technology and innovative approaches.' },
            { icon: 'fas fa-users', title: 'Community', desc: 'Connect with like-minded creatives and build lasting friendships in our supportive community.' },
            { icon: 'fas fa-trophy', title: 'Recognition', desc: 'Showcase your talent and get recognized for your creative achievements and contributions.' },
            { icon: 'fas fa-graduation-cap', title: 'Learning', desc: 'Learn new skills through workshops, tutorials, and hands-on projects with expert guidance.' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl text-center shadow-md border border-slate-200 dark:border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:bg-slate-700/50 relative overflow-hidden group"
              style={{ animation: 'fadeInUp 0.8s ease both', animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className="group-hover:before:scale-x-100 before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-blue-600 before:to-blue-500 before:scale-x-0 before:transition-transform before:duration-300" />
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-600 to-violet-500 flex items-center justify-center mx-auto mb-6 text-2xl text-white transition-transform duration-300 group-hover:scale-105">
                <i className={item.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-violet-600 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '30+', label: 'Active Members' },
            { number: '10+', label: 'Events Organized' },
            { number: '100+', label: 'Artworks Created' },
            { number: '5+', label: 'Workshops Conducted' },
          ].map((stat, i) => (
            <div key={i} className="animate-[fadeInUp_0.8s_ease_both]" style={{ animationDelay: `${0.1 * (i + 1)}s` }}>
              <div className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-md">{stat.number}</div>
              <div className="text-lg opacity-90 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-white dark:bg-slate-900 text-center">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Ready to Join the Creative Revolution?</h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">Become part of the most vibrant creative community at IIIT Kota</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Learn More
          </Link>
          <Link
            to="/team"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-white border-2 border-blue-500 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-blue-800"
          >
            Meet Our Team
          </Link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Home;
