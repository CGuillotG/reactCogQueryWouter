import { useEffect } from 'react';
import { useLocation } from 'wouter';

import { useSignOut } from '../hooks/cognitoHooks';

const SignOut = ({ ...props }) => {
    const accessToken = sessionStorage.getItem('accessToken');
    const { mutate, isLoading, isSuccess } = useSignOut();
    const [, navigate] = useLocation();

    useEffect(() => {
        if (isSuccess) {
            navigate('/signin');
        }
    }, [isSuccess]);

    const handleSignOut = () => {
        mutate({ accessToken });
    };

    return (
        <button {...props} onClick={handleSignOut} disabled={isLoading}>
            Sign Out
        </button>
    );
};

export default SignOut;
