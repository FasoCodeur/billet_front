"use client";
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import authSlice from "@/redux/features/auth/authSlice";
import {apiSlice} from "@/redux/apiSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        'auth': authSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck:false}).concat(apiSlice.middleware),
    devTools:true,

})

setupListeners(store.dispatch)