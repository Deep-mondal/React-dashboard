import React from 'react';
import Switch from '@mui/material/Switch';

const ThemeSwitcher = ({ theme, setTheme }) => {
  const handleChange = (event) => {
    setTheme(event.target.checked ? 'dark' : 'light');
  };

  return (
    <div style={{ padding: '10px' }}>
      <Switch
        checked={theme === 'dark'}
        onChange={handleChange}
        name="themeSwitch"
        color="default"
        inputProps={{ 'aria-label': 'theme switch' }}
      />
      <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  );
};

export default ThemeSwitcher;
