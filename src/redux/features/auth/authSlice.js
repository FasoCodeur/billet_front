"use client"
import {createSlice} from "@reduxjs/toolkit";
import TokenService from "@/utils/TokenService";
import {jwtDecode} from "jwt-decode";

const authSlice = createSlice({
    name: 'Auth',
    initialState: {
        user : TokenService.getUser(),
        token: TokenService.getToken()
    },
    reducers: {
        setCredentials: (state, action) => {
            const { response } = action.payload;
            state.user = jwtDecode(response?.access_token)
            state.auth = response?.access_token

            TokenService.updateLocalAccessToken(response);
        },
        logOut: (state, ) => {
            state.user = null
            state.auth = null
            TokenService.removeUser();
        }
    }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer;

export const selectCurrentUser = (state) => {
    if(state?.auth?.user) return state.auth.user

    return null;
};

export const selectCurrentToken = (state) => {
    if(state?.auth?.token) return state.auth.token

    return null;
};

