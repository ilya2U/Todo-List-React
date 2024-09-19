import React, { useEffect, useState } from 'react';
import './ThemeSwitch.css';

const ThemeSwitch = () => {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem('DarkTheme')) || false)

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('DarkTheme', JSON.stringify(true));
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('DarkTheme', JSON.stringify(false));
    }
  }, [dark]);

  return (
    <div className='theme-switch'>
      <img
        src={dark ? "/icons/light-theme-icon.svg" : "/icons/dark-theme-icon.svg"}
        alt="Theme Switcher"
        onClick={() => setDark(!dark)}
        className='theme-switch-icon'
      />
    </div>
  );
};

export default ThemeSwitch;
