import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'


const URI = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const authApi = createApi({
    reducerPath: "apiAuth",
    baseQuery: fetchBaseQuery({
        baseUrl: URI,
    }),
    endpoints: (builder) => ({
        loginWithPhone: builder.mutation({
            query: (data) => ({
                url: `auth/login`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),
        loginWithEmail: builder.mutation({
            query: (data) => ({
                url: `auth/login/email`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),
        logout: builder.mutation({
            query: (data) => ({
                url: `auth/logout`,
                method: "POST",
                body: data,
            }),
        }),
        refreshToken: builder.mutation({
            query: (refreshToken) => ({
                url: `auth/refresh`,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${refreshToken}`,
                },
            }),
        }),
    }),
});
export const {

} = authApi;