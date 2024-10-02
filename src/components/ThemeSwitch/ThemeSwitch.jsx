import React from 'react';
import './ThemeSwitch.css';
import { ReactComponent as LightThemeIcon} from '../../icons/light-theme-icon.svg'
import { ReactComponent as DarkThemeIcon} from '../../icons/dark-theme-icon.svg'
import { useTheme } from '../../hooks/ThemeProvider';

const ThemeSwitch = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className='theme-switch' onClick={toggleTheme}>
      {theme === 'light' ? <DarkThemeIcon className='theme-switch-icon'/> : <LightThemeIcon className='theme-switch-icon'/>}
    </div>
  );
};

export default ThemeSwitch;
