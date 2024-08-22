import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import ConfirmSignUp from './components/ConfirmSignUp.jsx';

function AuthRoute({ component: Component }) {
    const isAuth = () => {
        const accessToken = sessionStorage.getItem('accessToken');
        return !!accessToken;
    };
    return isAuth() ? <Component /> : <Navigate to="/signin" replace />;
}

function SignRoute({ component: Component }) {
    const isAuth = () => {
        const accessToken = sessionStorage.getItem('accessToken');
        return !!accessToken;
    };
    return isAuth() ? <Navigate to="/home" replace /> : <Component />;
}

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<AuthRoute component={Home} />} />
                    <Route path="/signin" element={<SignRoute component={SignIn} />} />
                    <Route path="/signup" element={<SignRoute component={SignUp} />} />
                    <Route path="/confirm" element={<SignRoute component={ConfirmSignUp} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
