import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const SignInUp = () => {
    const [isSignIn, setSignIn] = useState(true);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const userName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);

    const toggleSignInUpForm = () => {
        setSignIn(!isSignIn);
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignIn) {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // Handle successful sign in
                    // Redirect to main page after successful sign in
                    navigate('/');
                })
                .catch((error) => {
                    setError(error.message);
                });
        } else {
            if (password.current.value !== confirmPassword.current.value) {
                setError("Passwords do not match.");
                return;
            }
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    // Handle successful sign up
                    // Redirect to main page after successful sign up
                    navigate('/');
                })
                .catch((error) => {
                    setError(error.message);
                });
        }
    };

    return (
        <div className='w-full flex justify-center min-h-screen dark:text-white mt-8'>
            <form onSubmit={handleSubmit} className='border-2 w-[55%] h-[50%] flex flex-col justify-center items-center max-sm:border-none max-sm:w-full rounded-3xl'>
                <label className='flex w-[50%] max-sm:w-[80%] justify-start mt-6 text-xl font-medium'>
                    {isSignIn ? "Sign In" : "Create an Account"}
                </label>
                {!isSignIn && (
                    <input
                        ref={userName}
                        type='text'
                        placeholder="Username"
                        className='border-2 m-4 p-2 rounded-lg w-[50%] max-sm:w-[80%] outline-none dark:bg-gray-950 placeholder: text-sm'
                    />
                )}
                <input
                    type="email"
                    placeholder="Email Address"
                    ref={email}
                    className='border-2 m-4 p-2 rounded-lg w-[50%] max-sm:w-[80%] outline-none dark:bg-gray-950 placeholder: text-sm'
                />
                <input
                    ref={password}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className='border-2 m-4 p-2 rounded-lg w-[50%] max-sm:w-[80%] outline-none dark:bg-gray-950 placeholder: text-sm'
                />
                {!isSignIn && (
                    <input
                        ref={confirmPassword}
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        className='border-2 m-4 p-2 rounded-lg w-[50%] max-sm:w-[80%] outline-none dark:bg-gray-950 placeholder: text-sm'
                    />
                )}
                <button type="submit" className='border-2 m-4 mb-1 p-2 rounded-lg w-[50%] max-sm:w-[80%] outline-none hover:dark:bg-gray-800 max-sm:dark:bg-gray-800 dark:bg-gray-950 bg-black/10 hover:bg-black/5'>
                    {isSignIn ? 'Sign In' : 'Sign Up'}
                </button>
                <button onClick={toggleSignInUpForm} className='flex items-center text-sm mb-8'>
                    {isSignIn ? (
                        <>
                            Don't have an account?
                        </>
                    ) : (
                        <>
                            Have an account?
                        </>
                    )}
                    <span className='text-base ml-2 font-medium'>
                        {isSignIn ? 'Sign Up' : 'Sign In'}
                    </span>
                </button>
                {error && <div className="text-red-500">{error}</div>}
            </form>
        </div>
    );
}

export default SignInUp;



