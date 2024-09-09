import { useState, useEffect } from 'react';
import { /* useNavigate, */ Link } from 'react-router-dom';
import hyphenLogo from '../assets/hyphen_logo.png';

import { useSignIn } from '../hooks/cognitoHooks';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { mutate, isLoading, error, isSuccess } = useSignIn();
    // const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            // { navigate('/home') }
            window.location.href = '/home';
        }
    }, [isSuccess]);

    const handleSignin = e => {
        e.preventDefault();
        mutate({ email, password });
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto flex h-screen flex-col items-center justify-center px-6 py-8 lg:py-0">
                <div className="mb-6 flex items-center text-3xl font-semibold text-gray-900 dark:text-white">
                    <img
                        alt="logo"
                        src={hyphenLogo}
                        className="mr-2 h-8 w-8"
                    />
                    Hyphen Demo
                </div>
                <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
                    <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form onSubmit={handleSignin} className="space-y-4 md:space-y-6">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="name@company.com"
                                    required=""
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    required=""
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex h-5 items-center">
                                        <p className="mb-2 block text-sm font-medium text-red-500 dark:text-red-400">
                                            {error && error.message}
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    to="/forgot"
                                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <button
                                disabled={isLoading}
                                type="submit"
                                className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Sign in
                            </button>
                            <div className="flex gap-2 text-sm font-light text-gray-500 dark:text-gray-400">
                                <p>Don’t have an account yet?</p>
                                <Link
                                    to="/signup"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign up
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signin;
