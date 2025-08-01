# ARTIVE Club Website - IIIT Kota

A modern, responsive website for the ARTIVE Club of IIIT Kota, built with React.js. This website showcases the club's events, artworks, team members, and information about the creative community.

## ✨ New Features

- **🎨 Enhanced Landing Page**: More attractive and colorful design with floating elements and particles
- **🌙 Dark Theme Support**: Toggle between light and dark themes with a theme switcher
- **📱 Separate Pages**: Each navigation item now leads to dedicated pages instead of sections
- **🎭 Interactive Elements**: Hover effects, animations, and smooth transitions throughout
- **📊 Advanced Filtering**: Filter events and artworks by categories
- **👥 Enhanced Team Profiles**: Detailed member cards with skills and social links
- **📈 Statistics & Achievements**: Visual representation of club achievements

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Navigation**: Smooth routing with React Router
- **Theme Switching**: Toggle between light and dark themes
- **Event Showcase**: Display upcoming events with filtering and registration links
- **Artwork Gallery**: Showcase member artworks with categories and interactions
- **Team Section**: Introduce club leadership with social media links
- **About Section**: Information about the club with statistics and achievements
- **Contact Information**: Easy access to contact details and social media

## 📁 Project Structure

```
ARTIVE/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── pages/
│   │   ├── Home.jsx & Home.css
│   │   ├── Events.jsx & Events.css
│   │   ├── Artworks.jsx & Artworks.css
│   │   ├── Team.jsx & Team.css
│   │   └── About.jsx & About.css
│   ├── components/
│   │   ├── Navbar.js & Navbar.css
│   │   └── Footer.js & Footer.css
│   ├── App.js & App.css
│   ├── index.js & index.css
├── package.json
├── README.md
└── .gitignore
```

## 🎯 Pages

1. **Home Page**: Enhanced landing page with floating elements, features, and statistics
2. **Events Page**: Filterable events with categories and detailed information
3. **Artworks Page**: Gallery with artwork filtering and interactive elements
4. **Team Page**: Team member profiles with skills and social links
5. **About Page**: Club information, values, achievements, and contact details

## 🛠️ Technologies Used

- **React.js**: Frontend framework
- **React Router**: Client-side routing
- **CSS3**: Styling with CSS variables for theming
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ARTIVE
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (not recommended)

## 🎨 Theme Features

- **Light Theme**: Clean, bright design with subtle shadows
- **Dark Theme**: Modern dark interface with enhanced contrast
- **Theme Toggle**: Easy switching between themes via navbar
- **CSS Variables**: Consistent theming across all components

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔧 Customization

### Colors and Themes
Edit the CSS variables in `src/App.css` to customize colors and themes:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #f59e0b;
    /* ... more variables */
}
```

### Content
Update the content in respective JSX files:
- Events: `src/pages/Events.jsx`
- Artworks: `src/pages/Artworks.jsx`
- Team: `src/pages/Team.jsx`
- About: `src/pages/About.jsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For any questions or support, please contact:
- Email: artive@iiitkota.ac.in
- Location: IIIT Kota, Rajasthan, India

---

**ARTIVE Club** - Where creativity meets technology at IIIT Kota! 🎨✨ 