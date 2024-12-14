import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './pages/Profile'; // Make sure you import Profile if you're using it
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import useTheme from './hooks/useTheme';
import './App.css';

function App() {
  const [theme, setTheme] = useTheme();  // Hook to manage theme state

  return (
    <Router>
      <div className={`app ${theme}`}> {/* Theme applied to root div */}
        {/* Theme Toggle Button */}
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>

        {/* Navbar - this should stay at the top, visible throughout the app */}
        <Navbar />

        {/* Define Routes for the pages */}
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer - this will appear at the bottom of every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
