import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useSignUp } from '../hooks/cognitoHooks';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const { mutate, isLoading, error, isSuccess } = useSignUp();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            navigate('/confirm', { state: { email } });
        }
    }, [isSuccess]);

    const handlePassword = e => {
        setPasswordError(false);
        setPassword(e.target.value);
    };

    const handleConfirmPassword = e => {
        setPasswordError(false);
        setConfirmPassword(e.target.value);
    };
    
    const handleSignup = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordError(true);
            return;
        } else {
            mutate({ email, password });
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
                <div href="#" className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <img
                        alt="logo"
                        src="https://www3.technologyevaluation.com/getattachment/26a3751d-13f4-5b59-9ca9-8e8515893d66/logo.png?source=tw2&ext=.png"
                        className="mr-2 h-8 w-8"
                    />
                    Hyphen Demo
                </div>
                <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
                    <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form onSubmit={handleSignup} className="space-y-4 md:space-y-6">
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
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    placeholder="name@company.com"
                                    required=""
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
                                    onChange={handlePassword}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="confirm-password"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Confirm password
                                </label>
                                <input
                                    value={confirmPassword}
                                    onChange={handleConfirmPassword}
                                    type="password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    placeholder="••••••••"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    required=""
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                    <p className="mb-2 block text-sm font-medium text-red-500 dark:text-red-400">
                                        {!!error && error.message}
                                        {passwordError && 'Passwords do not match'}
                                    </p>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Create an account
                            </button>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                                <p>Already have an account?</p>
                                <Link
                                    to="/signin"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign in here
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
