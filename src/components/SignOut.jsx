import { useLocation } from 'wouter';

import { useSignOut } from '../hooks/cognitoHooks';

const SignOut = ({ ...props }) => {
    const accessToken = sessionStorage.getItem('accessToken');
    const { mutate, isLoading } = useSignOut();
    const [, navigate] = useLocation();

    const handleSignOut = () => {
        mutate(
            { accessToken },
            {
                onSuccess: () => {
                    navigate('/signin');
                },
            }
        );
    };

    return (
        <button {...props} onClick={handleSignOut} disabled={isLoading}>
            Sign Out
        </button>
    );
};

export default SignOut;
