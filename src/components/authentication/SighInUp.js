import React, { useState } from 'react'

const SighInUp = () => {

    const[isSignIn, setSignIn] = useState(true) 
    const handleSignInUP = () =>{
        setSignIn(!isSignIn);
    }

  return (
    <div className='w-full flex justify-center min-h-screen dark:text-white mt-8'>
        <form 
            onClick={e=> e.preventDefault()}  
            className='border-2 w-[55%] h-[50%] flex flex-col justify-center items-center max-sm:border-none max-sm:w-full rounded-3xl'
        >
            <label className='flex w-[50%] max-sm:w-[80%] justify-start mt-6 text-xl font-medium'>
                {
                    isSignIn ? "Sign In" : "Create an Account"
                }
            </label>
            {
                !isSignIn && (
                    <input
                        type='text'
                        placeholder="Username"
                        className='border-2 m-4  p-2 rounded-lg w-[50%] max-sm:w-[80%] outline-none dark:bg-gray-950 placeholder: text-sm'
                    />
                )
            }
            <input
                type="email"
                placeholder="Email Address"
                id="email"
                className='border-2 m-4  p-2 rounded-lg w-[50%] max-sm:w-[80%] outline-none dark:bg-gray-950 placeholder: text-sm'
            />
            <input
                type="password"
                placeholder="Password"
                id="email"
                className='border-2 m-4  p-2 rounded-lg w-[50%] max-sm:w-[80%] outline-none dark:bg-gray-950 placeholder: text-sm'
            />
            {
                !isSignIn &&(
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        id="email"
                        className='border-2 m-4  p-2 rounded-lg w-[50%] max-sm:w-[80%] outline-none dark:bg-gray-950 placeholder: text-sm'
                    />
                )
            }
            <button className='border-2 m-4 mb-1  p-2 rounded-lg w-[50%] max-sm:w-[80%] outline-none hover:dark:bg-gray-800 max-sm:dark:bg-gray-800 dark:bg-gray-950 bg-black/10 hover:bg-black/5'>
                {
                    isSignIn ? 'Sign In' : 'Sign Up'
                }
            </button>
            <button
                onClick={handleSignInUP}
                className='flex items-center text-sm mb-8'
            >
                {
                    isSignIn ? (
                        <>
                            Don't have an account?
                        </>
                    ) : (
                        <>
                            Have an account?
                        </>
                    )
                }
                <span className='text-base ml-2 font-medium'>
                    {
                        isSignIn ? 'Sign Up' : 'Sign In'
                    }
                </span>
            </button>
        </form>
    </div>
  )
}

export default SighInUp