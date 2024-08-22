import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignOut } from '../hooks/cognitoHooks';

const SignOut = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    const { mutate, isLoading, isSuccess } = useSignOut();    
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            // setTimeout(() => {
            //     navigate('/signin');
            // }, 100);
            window.location.href = '/signin';
        }
    }, [isSuccess]);

    const handleSignOut = () => {
        mutate({ accessToken });
    };


    return (
        <>
            <button onClick={handleSignOut} disabled={isLoading}>
                Sign Out
            </button>
            {isSuccess && <p>Signed out successfully</p>}
        </>
    );
};

export default SignOut;
