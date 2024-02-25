import { useState } from "react";

const Search = () => {
    const SpeechRecognition = window.webkitSpeechRecognition;
    const speech = new SpeechRecognition();

    // Create a state to store the search text
    const [searchText, setSearchText] = useState('');

    speech.onresult = event => {
        // Update the search text when speech recognition results are available
        setSearchText(event.results[0][0].transcript);
    };

    const handleVoiceSearch = () => {
        // Start the speech recognition when the button is clicked
        speech.start();
    }

    return (
        <div className='flex w-full h-10 rounded-full space-x-8 max-sm:space-x-1'>
            <div className='flex flex-1 border-2 dark:border-gray-600/100 rounded-full items-center max-sm:border-none max-sm:justify-end'>
                <input
                    type="text"
                    placeholder="Search ..."
                    className="outline-none dark:bg-gray-950 placeholder: text-sm pl-3 rounded-s-full flex-1 hidden md:flex"
                    value={searchText} // Set the value to the search text
                    onChange={e => setSearchText(e.target.value)} // Update the search text when the input changes
                />
                <button className='cursor-pointer max-sm:dark:bg-gray-900 max-sm:rounded-full max-sm:p-1 bg-black/15 h-full m-0 p-0 rounded-e-full flex justify-center items-center w-16 dark:bg-gray-600 max-sm:bg-neutral-50'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>
            <button className='flex items-center dark:bg-gray-900 hover:bg-black/10 dark:hover:bg-gray-700 rounded-full p-2'
                onClick={handleVoiceSearch}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                </svg>
            </button>
        </div>
    )
}

export default Search
