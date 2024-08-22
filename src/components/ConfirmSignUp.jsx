import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useConfirmSignUp } from '../hooks/cognitoHooks';

const ConfirmSignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState(location.state?.email ||'');
    const [code, setCode] = useState('');
    const { mutate, isLoading, error, isSuccess } = useConfirmSignUp();

    useEffect(() => {
        if (isSuccess) { navigate('/signin') }
    }, [isSuccess]);

    const handleConfirmSignup = e => {
        e.preventDefault();
        mutate({ email, code });
    };

    return (
        <>
            <h1>Confirm Sign Up</h1>
            <form onSubmit={handleConfirmSignup}>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    placeholder="Code"
                />
                <button type="submit" disabled={isLoading}>
                    Sign Up
                </button>
            </form>
            {error && <p>{error.message}</p>}
        </>
    );
};

export default ConfirmSignUp;
