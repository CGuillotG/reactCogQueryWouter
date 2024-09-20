import {
    CognitoIdentityProviderClient,
    SignUpCommand,
    InitiateAuthCommand,
    ConfirmSignUpCommand,
    GlobalSignOutCommand
} from '@aws-sdk/client-cognito-identity-provider';

const cognitoConfig = {
    region: import.meta.env.VITE_AWS_REGION,
    userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
    clientId: import.meta.env.VITE_COGNITO_APP_CLIENT_ID
};

const client = new CognitoIdentityProviderClient({
    region: cognitoConfig.region
});

export const signUp = async (email, password) => {
    const params = {
        ClientId: cognitoConfig.clientId,
        Username: email,
        Password: password,
        UserAttributes: [{ Name: 'email', Value: email }]
    };
    const command = new SignUpCommand(params);
    return client.send(command);
};

export const confirmSignUp = async (email, code) => {
    const params = {
        ClientId: cognitoConfig.clientId,
        Username: email,
        ConfirmationCode: code
    };
    const command = new ConfirmSignUpCommand(params);
    return client.send(command);
};

export const signIn = async (email, password) => {
    const params = {
        ClientId: cognitoConfig.clientId,
        AuthFlow: 'USER_PASSWORD_AUTH',
        AuthParameters: {
            USERNAME: email,
            PASSWORD: password
        }
    };
    const command = new InitiateAuthCommand(params);
    try {
        const data = await client.send(command);
        return data;
    } catch (error) {
        console.error('Sign in error', error);
        throw error;
    }
};

export const signOut = async accessToken => {
    const params = {
        AccessToken: accessToken
    };
    const command = new GlobalSignOutCommand(params);
    return client.send(command);
};
