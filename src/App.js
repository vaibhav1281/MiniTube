import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { ThemeContext } from './ThemeContext';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import reduxStore from './redux/reduxStore';
import LoadingBar from 'react-top-loading-bar';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchVideoPage from './components/WatchVideoPage';
import SighInUp from './components/authentication/SighInUp';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './components/authentication/firebase';
import SkeletonUI from './components/SkeletonUI';

const App = () => {
 const [theme, setTheme] = useState('light');
 const [isSignedIn, setIsSignedIn] = useState(false);
 const [loading, setLoading] = useState(true); // Add loading state

 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user); // Update state based on whether a user is signed in
      setLoading(false); // Set loading to false once the auth state is checked
    });

    return () => unsubscribe(); // Clean up the listener on component unmount
 }, []);

 // Function to handle sign out
 const handleSignOut = () => {
    signOut(auth).then(() => {
      setIsSignedIn(false); // Update state to reflect user is signed out
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
 };

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

 const appRouter = createBrowserRouter([
    {
      path: '/',
      element: loading ? <SkeletonUI/> : (isSignedIn ? <Body /> : <Navigate to="/signin" />), // Use loading state here
      children:[
        {
          path: "/",
          element: <MainContainer/>
        },
        {
          path:"/watch",
          element: <WatchVideoPage/>
        },
        
      ]
    },
    {
      path:"/signin",
      element: <SighInUp/>
    },
  ])

 return (
    <Provider store={reduxStore}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LoadingBar color='#e50914' ref={ref} />
        <div className='dark:bg-gray-950 bg-white w-full h-full'>
          <Header isSignedIn={isSignedIn} onSignOut={handleSignOut}/>
          <RouterProvider router={appRouter}/>
        </div>
      </ThemeContext.Provider>
    </Provider>
 );
}

export default App;
