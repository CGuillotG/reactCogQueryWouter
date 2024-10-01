import axios from 'axios';

const API_URL = import.meta.env.VITE_AUTH_API;

export const signUp = async (email, password) => {
    const response = await axios.post(`${API_URL}/signup`, { email, password });
    return response.data;
};

export const confirmSignUp = async (email, code) => {
    const response = await axios.post(`${API_URL}/confirm-signup`, { email, code });
    return response.data;
};

export const signIn = async (email, password) => {
    const response = await axios.post(`${API_URL}/signin`, { email, password });
    return response.data;
};

export const signOut = async accessToken => {
    const headers = {
        'Authorization': accessToken
    };
    const response = await axios.post(`${API_URL}/signout`, {}, { headers });
    return response.data;
};
