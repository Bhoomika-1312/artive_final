import React from 'react';
import Footer from '../components/Footer';

const stats = [
  { id: 1, number: '30+', label: 'Active Members', icon: 'fas fa-users' },
  { id: 2, number: '10+', label: 'Events Organized', icon: 'fas fa-calendar-check' },
  { id: 3, number: '100+', label: 'Artworks Created', icon: 'fas fa-palette' },
  { id: 4, number: '5+', label: 'Workshops Conducted', icon: 'fas fa-chalkboard-teacher' },
];

const achievements = [
  { id: 1, title: 'Best Creative Club Award', year: '2024', description: 'Recognized as the most innovative creative club at IIIT Kota' },
  { id: 2, title: 'National Art Exhibition', year: '2023', description: 'Successfully organized a national-level art exhibition' },
  { id: 3, title: 'Industry Collaboration', year: '2023', description: 'Partnered with leading design studios for student projects' },
];

const values = [
  { icon: 'fas fa-heart', title: 'Passion', desc: 'We believe in the power of passion-driven creativity and encourage students to pursue what they love.' },
  { icon: 'fas fa-hands-helping', title: 'Collaboration', desc: 'We foster a collaborative environment where students can learn from each other and grow together.' },
  { icon: 'fas fa-rocket', title: 'Innovation', desc: 'We encourage innovative thinking and experimentation with new technologies and artistic mediums.' },
  { icon: 'fas fa-globe', title: 'Inclusivity', desc: 'We welcome students from all backgrounds and skill levels to join our creative community.' },
];

const About = ({ isDarkTheme }) => (
  <div className="bg-white dark:bg-slate-900 pt-20">
    <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20 text-center">
      <div className="max-w-6xl mx-auto px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About ARTIVE Club</h1>
        <p className="text-xl opacity-90">Fostering creativity and innovation at IIIT Kota</p>
      </div>
    </section>

    <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">
              ARTIVE Club is the premier creative community at IIIT Kota, dedicated to fostering artistic expression and technological innovation. We bring together students passionate about art, design, and creative technology to explore, learn, and create together.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              Our mission is to provide a platform for students to explore their creative potential, learn new skills, and showcase their artistic talents. From digital art workshops to photography contests, we organize various events throughout the year.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-6xl text-white">
              <i className="fas fa-lightbulb" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-400 text-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id}>
              <div className="text-5xl mb-4 opacity-90">
                <i className={stat.icon} />
              </div>
              <div className="text-4xl font-extrabold mb-2">{stat.number}</div>
              <div className="text-lg opacity-90 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-center text-3xl font-bold mb-12 text-slate-900 dark:text-white">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl text-center shadow-md border border-slate-200 dark:border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-600 to-violet-500 flex items-center justify-center mx-auto mb-6 text-2xl text-white">
                <i className={v.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">{v.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-center text-3xl font-bold mb-12 text-slate-900 dark:text-white">Our Achievements</h2>
        <div className="max-w-3xl mx-auto space-y-8 relative pl-10 md:pl-0">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-600 -translate-x-1/2 md:translate-x-0" />
          {achievements.map((item, i) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row md:items-center gap-4 relative ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="bg-blue-600 text-white py-4 px-6 rounded-3xl font-semibold text-lg w-fit relative z-10 md:mx-4">
                {item.year}
              </div>
              <div className="flex-1 p-8 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-600 md:mx-4">
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-white dark:bg-slate-900 text-center">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Get in Touch</h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">Have questions or want to collaborate? We'd love to hear from you!</p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8">
          <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200 text-lg">
            <i className="fas fa-envelope text-blue-600 dark:text-blue-400 text-xl" />
            artive@iiitkota.ac.in
          </div>
          <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200 text-lg">
            <i className="fas fa-map-marker-alt text-blue-600 dark:text-blue-400 text-xl" />
            IIIT Kota, Rajasthan, India
          </div>
          <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200 text-lg">
            <i className="fas fa-phone text-blue-600 dark:text-blue-400 text-xl" />
            +91 123 456 7890
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
