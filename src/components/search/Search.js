import { useState } from "react";
import useVoiceSearch from "../../hooks/useVoiceSearch";


const Search = () => {

    const[isSearchOpen, setSearchOpen] = useState(false);

    const {
        searchText,
        isListening,
        showStopButton,
        handleVoiceSearch,
        handleStopVoiceSearch,
        setSearchText
    } = useVoiceSearch();

    const emptySearch = () => {
        setSearchText('')
    }


  return (
    <div className='md:hidden mx-2'>
        <button 
            className='dark:bg-gray-900 hover:bg-black/10 dark:hover:bg-gray-700 p-2 rounded-full mx-2'
            onClick={()=>setSearchOpen(!isSearchOpen)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </button>
        {
            isSearchOpen && (
                <div className="w-full h-[60%] fixed bg-white dark:bg-gray-950 z-20 transform transition-transform duration-300 ease-out top-0 right-0 left-0 rounded-b-3xl">
                    <div className="mt-6 flex justify-between items-center m-4">
                        <div className="flex flex-1 justify-between border-2 dark:border-gray-600/100 rounded-full items-center z-50  m-2">
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    key={isListening ? 'listening' : 'notListening'}
                                    value={searchText}
                                    onChange={e => setSearchText(e.target.value)}
                                    className="outline-none dark:bg-gray-950 placeholder: text-sm pl-3 rounded-s-full flex-1"
                                />
                                {searchText.length > 0 && (
                                    <button
                                        onClick={emptySearch}
                                    >
                                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                            <button className=' bg-black/15 h-full p-3 rounded-e-full flex justify-center items-center w-16 dark:bg-gray-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex">
                            {
                                !showStopButton ? (
                                    <button className='flex items-center dark:bg-gray-900 hover:bg-black/10 dark:hover:bg-gray-700 rounded-full p-4'
                                        onClick={handleVoiceSearch} 
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                                            </svg>
                                    </button>
                                ) : (
                                    <button className='flex items-center dark:bg-gray-900 hover:bg-black/10 dark:hover:bg-gray-700 rounded-full p-1 py-2'
                                        onClick={handleStopVoiceSearch}
                                    >
                                        <span className="p-1">Listening...</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        <span/>
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Search