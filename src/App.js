
import { useState } from 'react';
import './App.css';
import { ThemeContext } from './ThemeContext';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      window.document.body.classList.remove('light');
      window.document.body.classList.add('dark');
      setTheme('dark');
    } else {
      window.document.body.classList.remove('dark');
      window.document.body.classList.add('light');
      setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='dark:bg-gray-950 bg-white w-full h-screen'>
        <Header/>
        <Body/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
