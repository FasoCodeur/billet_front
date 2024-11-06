import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    refresh_token: null,
    // remember_me: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.token = action.payload.access_token;
            state.refresh_token = action.payload.refresh_token;
            // state.remember_me = action.payload.remember_me;
        },
        userRefreshToken: (state, action) => {
            state.token = action.payload;
        },
        userLogOut: (state) => {
            state.token = null;
            state.refresh_token = null;
        },
    },
});

export const { userLogOut, userLogin, userRefreshToken } = authSlice.actions;

export default authSlice.reducer;
