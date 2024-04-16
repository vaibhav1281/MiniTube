import React from 'react';
import useVoiceSearch from '../../hooks/useVoiceSearch';

const VoiceSearch = () => {
    const {
        searchText,
        isListening,
        showStopButton,
        handleVoiceSearch,
        handleStopVoiceSearch,
        setSearchText,
        searchSuggestions,
        showSuggestion,
        setShowSeggetion
    } = useVoiceSearch();
    const emptySearch = () => {
        setSearchText('')
    }

    // console.log(searchText)

    return (
        <div className='w-full'>
            <div className='hidden md:flex w-full h-10 rounded-full space-x-8 max-sm:space-x-1'>
                <div className='flex flex-1 border-2 dark:border-gray-600/100 rounded-full justify-between items-center max-sm:border-none max-sm:justify-end'>
                    <div className='flex flex-1'>
                        <input
                            key={isListening ? 'listening' : 'notListening'}
                            type="text"
                            placeholder="Search for a movie or TV series..."
                            className="outline-none dark:bg-gray-950 placeholder: text-sm pl-3 rounded-s-full flex-1 hidden md:flex"
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                            onFocus={e => setShowSeggetion(true)}
                            onBlur={e => setShowSeggetion(false)}
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

                    <button className='cursor-pointer max-sm:dark:bg-gray-900 max-sm:rounded-full max-sm:p-1 bg-black/15 h-full m-0 p-0 rounded-e-full flex justify-center items-center w-16 dark:bg-gray-600 max-sm:bg-neutral-50'>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>
                

                <div className="hidden md:flex">
                    {
                        !showStopButton ? (
                            <button className='flex items-center dark:bg-gray-900 bg-black/5 hover:bg-black/10 dark:hover:bg-gray-700 rounded-full p-2'
                                onClick={handleVoiceSearch} 
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                                    </svg>
                            </button>
                        ) : (
                            <button className='flex items-center dark:bg-gray-900 bg-black/5 hover:bg-black/10 dark:hover:bg-gray-700 rounded-full p-2'
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
            {/* search suggestios are here */}
            {searchText.length > 0 &&  showSuggestion && (
                <div className='hidden md:flex text-black fixed bg-white border w-[49.9%] rounded-2xl drop-shadow-lg'>
                <ul className='w-full'>
                    {
                        searchSuggestions.map((suggestios) => (
                            <li 
                                key={suggestios}
                                className='pl-4 py-2 border-b hover:bg-gray-100 font-normal text-sm leading-3 tracking-tight'
                            >
                                {suggestios}
                            </li>
                        ))
                    }
                </ul>
            </div>
            )}
        </div>
    );
}

export default VoiceSearch;
