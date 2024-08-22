import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './components/Home.jsx';
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import ConfirmSignUp from './components/ConfirmSignUp.jsx'

function App() {
  const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    return !!accessToken;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuthenticated() ? <Navigate replace to="/home" /> : <Navigate to="/signin" replace />} />
          <Route path="/home" element={isAuthenticated() ? <Home /> : <Navigate replace to="/signin" />} />
          <Route path="/signin" element={!isAuthenticated() ? <SignIn /> : <Navigate to="/" replace />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/confirm" element={<ConfirmSignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
