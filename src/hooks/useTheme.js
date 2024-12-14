import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme; // Apply theme to the body element
    localStorage.setItem('theme', theme); // Store the theme in localStorage
  }, [theme]);

  return [theme, setTheme]; // Return the current theme and the function to change it
};

export default useTheme;
