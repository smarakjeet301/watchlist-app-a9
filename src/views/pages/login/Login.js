import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import appConfig from '../../../config/appConfig';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');

    const isEmail = (text) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(text);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        if (isEmail(email)) {
            const userEmail = localStorage.getItem('userEmail');
            if (userEmail.includes(email)) {
                navigate('/');
                toast.success(appConfig.messages.LOGIN_SUCCESS)
                localStorage.setItem("currentUser", userEmail)
            } else {
                toast.error(appConfig.messages.LOGIN_FAILED)
                navigate('/register');
            }
        } else {
            toast.error(appConfig.messages.INVALID_EMAIL)
        }
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    return (
        <div className="flex min-h-full h-screen flex-1 flex-col justify-center align-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="/logo512.png"
                    alt="Watchlists"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Log in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                onChange={handleEmailChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            onClick={handleLogin}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Log in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Don't have a watchlists account?{' '}
                    <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Register
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Login