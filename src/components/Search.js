import React from 'react'

const Search = () => {
  return (
    <div className='flex w-full h-10 rounded-full space-x-8'>
        <div className='flex flex-1 border-2 dark:border-gray-600/100 rounded-full items-center'>
            <input
                type="text"
                placeholder="Search for anything..."
                className="outline-none dark:bg-gray-950 placeholder: text-sm pl-3 rounded-s-full flex-1"
            />
            <button className='cursor-pointer bg-black/15 h-full m-0 p-0 rounded-e-full flex justify-center items-center w-16 dark:bg-gray-600'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </div>
        <button className='flex items-center dark:bg-gray-900 hover:bg-black/10 dark:hover:bg-gray-700 rounded-full p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
            </svg>
        </button>
    </div>
  )
}

export default Search