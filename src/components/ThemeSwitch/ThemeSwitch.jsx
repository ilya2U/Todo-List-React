import React from 'react';
import './ThemeSwitch.css';
import LightThemeIcon from '../../icons/light-theme-icon.svg'
import DarkThemeIcon from '../../icons/dark-theme-icon.svg'
import { useTheme } from '../../hooks/ThemeProvider';

const ThemeSwitch = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className='theme-switch'>
      <img
        src={theme === 'light-theme' ?  DarkThemeIcon : LightThemeIcon}
        alt="Theme Switcher"
        onClick={toggleTheme}
        className='theme-switch-icon'
      />
    </div>
  );
};

export default ThemeSwitch;
