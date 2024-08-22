import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useSignUp } from '../hooks/cognitoHooks';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { mutate, isLoading, error, isSuccess } = useSignUp();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) { navigate('/confirm', { state: { email } }) }
    }, [isSuccess]);

    const handleSignup = e => {
        e.preventDefault();
        mutate({ email, password });
    };

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup}>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <button type="submit" disabled={isLoading}>
                    Sign Up
                </button>
            </form>
            {error && <p>{error.message}</p>}
            <Link to="/signin">Sign In</Link>
        </>
    );
};

export default SignUp;
