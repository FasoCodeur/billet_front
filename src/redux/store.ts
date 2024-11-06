"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./features/auth/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import {apiSlice} from "@/redux/features/apiSlice";
import authSlice from "@/redux/features/auth/authSlice";

// const persistConfig = {
//     key: "restomarkets",
//     storage,
//     whitelist: ["auth"],
//     version: 1,
// };

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice,
    // userInfo: userInfoReducer,
    // notifs: notifSlice,
});

// const persistedApiReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
            apiSlice.middleware,
            authApi.middleware
        ),
});

// const persistor = persistStore(store);
setupListeners(store.dispatch);

export { store};
