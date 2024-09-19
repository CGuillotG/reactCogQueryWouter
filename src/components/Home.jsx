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
    if (sessionStorage.idToken) {
        // console.log ("Amazon Cognito ID token encoded:",sessionStorage.idToken.toString());
        console.log('Amazon Cognito ID token decoded:', parseJwt(sessionStorage.idToken.toString()));
    }
    if (sessionStorage.accessToken) {
        // console.log ("Amazon Cognito access token encoded:", sessionStorage.accessToken.toString());
        console.log('Amazon Cognito access token decoded:', parseJwt(sessionStorage.accessToken.toString()));
    }
    if (sessionStorage.refreshToken) {
        console.log('Amazon Cognito refresh token:', sessionStorage.refreshToken);
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 h-screen">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-5xl tracking-tight font-extrabold lg:text-6xl text-primary-600 dark:text-primary-500">
                        React Cognito Demo
                    </h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                        You are signed in.
                    </p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        See console for Amazon Cognito user tokens.
                    </p>
                    <SignOut className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4" />
                </div>
            </div>
        </section>
    );
}

export default Home;
