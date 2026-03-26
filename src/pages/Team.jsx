import React from 'react';
import Footer from '../components/Footer';

const teamMembers = [
  { id: 1, name: 'Rahul Sharma', role: 'President', bio: 'Passionate about digital art and creative technology. Leading the club with vision and innovation.', avatar: 'https://via.placeholder.com/150x150/6366f1/ffffff?text=RS', linkedin: '#', instagram: '#', github: '#', skills: ['Digital Art', 'Leadership', 'Creative Technology'] },
  { id: 2, name: 'Anjali Patel', role: 'Vice President', bio: 'Expert in photography and visual storytelling. Dedicated to fostering creative expression.', avatar: 'https://via.placeholder.com/150x150/8b5cf6/ffffff?text=AP', linkedin: '#', instagram: '#', github: '#', skills: ['Photography', 'Visual Design', 'Event Management'] },
  { id: 3, name: 'Vikram Singh', role: 'Secretary', bio: 'Specializes in creative coding and generative art. Bringing technology and art together.', avatar: 'https://via.placeholder.com/150x150/f59e0b/ffffff?text=VS', linkedin: '#', instagram: '#', github: '#', skills: ['Creative Coding', 'Generative Art', 'Web Development'] },
  { id: 4, name: 'Meera Reddy', role: 'Treasurer', bio: 'Loves traditional art forms and digital illustration. Managing club finances with creativity.', avatar: 'https://via.placeholder.com/150x150/10b981/ffffff?text=MR', linkedin: '#', instagram: '#', github: '#', skills: ['Traditional Art', 'Digital Illustration', 'Finance'] },
  { id: 5, name: 'Arjun Kumar', role: 'Event Coordinator', bio: 'Expert in organizing creative events and workshops. Making art accessible to everyone.', avatar: 'https://via.placeholder.com/150x150/ef4444/ffffff?text=AK', linkedin: '#', instagram: '#', github: '#', skills: ['Event Planning', 'Workshop Facilitation', 'Community Building'] },
  { id: 6, name: 'Priya Sharma', role: 'Content Manager', bio: 'Creative writer and content strategist. Sharing our stories with the world.', avatar: 'https://via.placeholder.com/150x150/06b6d4/ffffff?text=PS', linkedin: '#', instagram: '#', github: '#', skills: ['Content Creation', 'Social Media', 'Creative Writing'] },
];

const Team = ({ isDarkTheme }) => (
  <div className="bg-white dark:bg-slate-900 pt-20">
    <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20 text-center">
      <div className="max-w-6xl mx-auto px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Meet Our Team</h1>
        <p className="text-xl opacity-90">The creative minds behind ARTIVE Club</p>
      </div>
    </section>

    <section className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center shadow-md border border-slate-200 dark:border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group"
            >
              <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden">
                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-indigo-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                      <i className="fab fa-github" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">{member.role}</p>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">{member.bio}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-slate-50 dark:bg-slate-800/50 text-center">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Want to Join Our Team?</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">We're always looking for passionate creatives to join our leadership team!</p>
        <button type="button" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5">
          <i className="fas fa-users" />
          Apply Now
        </button>
      </div>
    </section>

    <Footer />
  </div>
);

export default Team;
