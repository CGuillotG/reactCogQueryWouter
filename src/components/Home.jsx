import SignOut from './SignOut.jsx';

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
        window
            .atob(base64)
            .split('')
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
    );
    return JSON.parse(jsonPayload);
}

function Home() {
    if (!!sessionStorage.idToken) {
        // console.log ("Amazon Cognito ID token encoded:",sessionStorage.idToken.toString());
        console.log('Amazon Cognito ID token decoded:', parseJwt(sessionStorage.idToken.toString()));
    }
    if (!!sessionStorage.accessToken) {
        // console.log ("Amazon Cognito access token encoded:", sessionStorage.accessToken.toString());
        console.log('Amazon Cognito access token decoded:', parseJwt(sessionStorage.accessToken.toString()));
    }
    if (!!sessionStorage.refreshToken) {
        console.log('Amazon Cognito refresh token:', sessionStorage.refreshToken);
    }

    return (
        <div>
            <h1>React Cognito Demo</h1>
            <p>You are signed in.</p>
            <p>See console for Amazon Cognito user tokens.</p>
            <SignOut />
        </div>
    );
}

export default Home;
