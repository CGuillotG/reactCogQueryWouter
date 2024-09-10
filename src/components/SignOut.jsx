import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignOut } from '../hooks/cognitoHooks';

const SignOut = ({ ...props }) => {
    const accessToken = sessionStorage.getItem('accessToken');
    const { mutate, isLoading, isSuccess } = useSignOut();
    const navigate = useNavigate();

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
