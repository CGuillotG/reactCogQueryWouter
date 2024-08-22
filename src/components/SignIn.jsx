import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useSignIn } from '../hooks/cognitoHooks';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { mutate, isLoading, error, isSuccess } = useSignIn();
    const navigate = useNavigate();

    useEffect(() => {
        // if (isSuccess) { navigate('/home') }
        if (isSuccess) { window.location.href = '/home' }
    }, [isSuccess]);

    const handleSignin = e => {
        e.preventDefault();
        mutate({ email, password });
    };

    return (
        <>
            <h1>Sign In</h1>
            <form onSubmit={handleSignin}>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <button type="submit" disabled={isLoading}>
                    Sign In
                </button>
            </form>
            {error && <p>{error.message}</p>}
            <Link to="/signup">Sign Up</Link>
        </>
    );
};

export default Signin;
