import { Switch, Route, Redirect } from 'wouter';

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
    return isAuth() ? children : <Redirect to="/signin" />;
}

function SignRoute({ children }) {
    return isAuth() ? <Redirect to="/home" /> : children;
}

function App() {
    return (
        <>
            <Switch>
                <Route path="/"><Redirect to="/home" /></Route>                
                <Route path="/home"><AuthRoute><Home /></AuthRoute></Route>
                <Route path="/signin"><SignRoute><SignIn /></SignRoute></Route>                
                <Route path="/signup"><SignRoute><SignUp /></SignRoute></Route>                
                <Route path="/confirm"><SignRoute><ConfirmSignUp /></SignRoute></Route>
                <Route path="/forgot"><SignRoute><ResetPassword /></SignRoute></Route>
                <Route><h1>Page Not Found</h1></Route>
            </Switch>
        </>
    );
}

export default App;
