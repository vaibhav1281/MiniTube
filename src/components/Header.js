import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../redux/appSlice'; 
import VoiceSearch from './search/VoiceSearch';
import Search from './search/Search';

const Header = ({ isSignedIn, onSignOut }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const dispatch = useDispatch()
    const toggleMenuButton = () =>{
        dispatch(toggleMenu())
    }

    return (
        <header className='w-full h-20 dark:text-white select-none flex justify-center items-center top-0 sticky z-10 bg-white dark:bg-gray-950'>
            <div className='w-11/12 justify-center items-center flex space-x-8 max-sm:space-x-1'>

                <button onClick={toggleMenuButton}  className='dark:bg-gray-900 hover:bg-black/10 dark:hover:bg-gray-700 p-2 rounded-full hidden md:flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                {/* logo */}
                <div className='flex items-center space-x-2 font-serif'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-w-10">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                    </svg>
                    <span className='text-2xl hidden md:flex'>MiniTube</span>
                </div>
                {/* search bar */}
                <div className='flex flex-1'>
                    <VoiceSearch/>
                </div>
                <Search/>
                
                {/* light/dark switcher */}
                <button
                     className='dark:text-white' 
                    onClick={toggleTheme}
                >
                     {theme === 'light' ? (

                        <div className=' hover:bg-black/10 p-2 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                        </div>

                     ) : (
                        <div className='dark:bg-gray-900 hover:bg-black/10 dark:hover:bg-gray-700 p-2 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                        </div>
                     )}
                </button>
                {/* user icon */}
                {isSignedIn ? (
                    <>
                        <div className='dark:bg-gray-900 hover:bg-black/10 dark:hover:bg-gray-700 p-2 rounded-full hidden md:flex'>
                            {/* User icon SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <button onClick={onSignOut} className='dark:bg-gray-900 hover:bg-black/10 dark:hover:bg-gray-700 p-2 rounded-full hidden md:flex'>
                            Sign Out
                        </button>
                    </>
                ) : (
                    <button className='dark:bg-gray-900 hover:bg-black/10 dark:hover:bg-gray-700 p-2 rounded-full hidden md:flex'>
                        Sign In/Up
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header


