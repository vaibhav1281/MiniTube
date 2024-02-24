
import { useEffect, useRef, useState } from 'react';
import './App.css';
import { ThemeContext } from './ThemeContext';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import reduxStore from './redux/reduxStore';
import LoadingBar from 'react-top-loading-bar';

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

  const ref = useRef(null)
  useEffect(() => {
    ref.current.continuousStart();
    setTimeout(() => {
      ref.current.complete();
    }, 200);
  }, []);

  return (
    <Provider store={reduxStore}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LoadingBar color='#e50914' ref={ref} />
        <div className='dark:bg-gray-950 bg-white w-full h-full'>
          <Header/>
          <Body/>
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
