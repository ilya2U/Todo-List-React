import React, { useEffect, useState } from 'react';
import './ThemeSwitch.css';
import { LOCAL_STORAGE_THEME_KEY } from "../variablesLocalStorage";
import lightThemeIcon from '../../icons/light-theme-icon.svg'
import datkThemeIcon from '../../icons/dark-theme-icon.svg'

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(localStorage.getItem(LOCAL_STORAGE_THEME_KEY));

  useEffect(() => {
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(theme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'));
  };

  return (
    <div className='theme-switch'>
      <img
        src={theme === 'light-theme' ?  datkThemeIcon : lightThemeIcon}
        alt="Theme Switcher"
        onClick={toggleTheme}
        className='theme-switch-icon'
      />
    </div>
  );
};

export default ThemeSwitch;
