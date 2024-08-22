import { useMutation } from '@tanstack/react-query';
import { signUp, signIn, signOut, confirmSignUp } from '../services/cognitoService';

export const useSignIn = () => {
  return useMutation({
    mutationFn: async ({ email, password }) => {
      const data = await signIn(email, password);
      return data;
    },
    onSuccess: (data) => {
      if (data.AuthenticationResult) {
        sessionStorage.setItem('accessToken', data.AuthenticationResult.AccessToken);
        sessionStorage.setItem('idToken', data.AuthenticationResult.IdToken);
        sessionStorage.setItem('refreshToken', data.AuthenticationResult.RefreshToken);
        console.log('Sign in successful', data)
      }
    },
    onError: (error) => {
      console.error('Sign in error', error);  
    }
  });
};

export const useSignUp = () => {
  return useMutation({
    mutationFn: ({ email, password }) => signUp(email, password),
    onSuccess: (data) => {
      console.log('Sign in successful', data);
    }
  });
};

export const useConfirmSignUp = () => {
  return useMutation({
    mutationFn: ({ email, code }) => confirmSignUp(email, code),
    onSuccess: (data) => {
      console.log('Confirm sign up successful', data);
    }
  });
};

export const useSignOut = () => {
  return useMutation({
    mutationFn: ({ accessToken }) => signOut(accessToken),
    onSuccess: (data) => {
      sessionStorage.clear();
      console.log('Sign out successful', data);
    }
  });
};

