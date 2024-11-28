"use client"
import {jwtDecode} from "jwt-decode";

interface Token {
    access_token: string;
    refresh_token: string;
}

const getLocalAccessToken = () => {
    try {
        return window.localStorage.getItem("accessToken");
    } catch (error) {
        console.error("Error getting local access token:", error);
        return null;
    }
};

const getUser = () => {
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            const token = window.localStorage.getItem("accessToken");
            return token ? jwtDecode(token) : null;
        }
    } catch (error) {
        console.error("Error decoding user token:", error);
        return null;
    }
};

const getToken = () => {
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            const accessToken = localStorage.getItem("accessToken");
            const refreshToken = localStorage.getItem("refreshToken");

            if (accessToken && refreshToken) {
                return {accessToken, refreshToken};
            }
        }

        return null;
    } catch (error) {
        console.error("Error getting tokens:", error);
        return null;
    }
};

const updateLocalAccessToken = (token: Token) => {
    try {
        const accessTokenDecoded = jwtDecode(token.access_token);
        const refreshTokenDecoded = jwtDecode(token.refresh_token);

        if (!accessTokenDecoded.exp || !refreshTokenDecoded.exp) {
            console.error('Expiration time (exp) missing from token');
            return false;
        }

        const accessTokenExpiry = new Date(accessTokenDecoded.exp * 1000);
        const refreshTokenExpiry = new Date(refreshTokenDecoded.exp * 1000);

        localStorage.setItem("accessToken", token.access_token);
        localStorage.setItem("refreshToken", token.refresh_token);
        localStorage.setItem("accessTokenExpiry", accessTokenExpiry.toISOString());
        localStorage.setItem("refreshTokenExpiry", refreshTokenExpiry.toISOString());

        return true;
    } catch (error) {
        console.error("Error updating tokens:", error);
        return false;
    }
};

const removeUser = () => {
    try {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accessTokenExpiry");
        localStorage.removeItem("refreshTokenExpiry");
        return true;
    } catch (error) {
        console.error("Error removing tokens:", error);
        return false;
    }
};

const getExpiryDate = (token: { refreshToken: string; }) => {
    try {
        const decodedUser = jwtDecode(token?.refreshToken);
        if (decodedUser.exp)
            return new Date(decodedUser.exp * 1000);

    } catch (error) {
        console.error("Error decoding expiry date:", error);
        return null;
    }
};

const isAccessExpired = (): boolean => {
    try {
        const accessToken = window.localStorage.getItem("accessToken");
        if (accessToken) {
            const decodedToken = jwtDecode(accessToken);

            if (decodedToken.exp)
                return new Date().getTime() > decodedToken.exp * 1000;
        }
        return true;
    } catch (error) {
        console.error("Error checking token expiry:", error);
        return true;
    }
};

const TokenService = {
    getLocalAccessToken,
    updateLocalAccessToken,
    removeUser,
    getExpiryDate,
    isAccessExpired,
    getToken,
    getUser,
};

export default TokenService;
