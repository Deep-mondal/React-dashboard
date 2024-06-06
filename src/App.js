import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Kanban from './pages/Kanban';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';
import ThemeSwitcher from './components/ThemeSwitcher';
import { lightTheme, darkTheme } from './themes';

function App() {
  const [theme, setTheme] = React.useState('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Router>
        <div className="App">
          <Sidebar />
          <div className="main-content">
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
