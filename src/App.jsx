import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import ConfirmSignUp from './components/ConfirmSignUp.jsx';
import ResetPassword from './components/ResetPassword.jsx';

const isAuth = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    return !!accessToken;
};

function AuthRoute({ children }) {
    return isAuth() ? children : <Navigate to="/signin" replace />;
}

function SignRoute({ children }) {
    return isAuth() ? <Navigate to="/home" replace /> : children;
}

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<AuthRoute><Home /></AuthRoute>} />
                    <Route path="/signin" element={<SignRoute><SignIn /></SignRoute>} />
                    <Route path="/signup" element={<SignRoute><SignUp /></SignRoute>} />
                    <Route path="/confirm" element={<SignRoute><ConfirmSignUp /></SignRoute>} />
                    <Route path="/forgot" element={<SignRoute><ResetPassword /></SignRoute>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
