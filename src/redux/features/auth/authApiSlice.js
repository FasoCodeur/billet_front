"use client"
import {apiSlice} from "../../apiSlice";
import {fetchBaseQuery} from "@reduxjs/toolkit/query";
const baseEndPoint = process.env.API_BASE_URL;

export const authApiSlice = apiSlice.injectEndpoints({
    baseEndPoint: fetchBaseQuery({ baseUrl: baseEndPoint }),
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/login',
                method: 'POST',
                body: { ...credentials }
            }),

        }),
        createAccount: builder.mutation({
            query: credentials => ({
                url: `/auth/register`,
                method: 'POST',
                body: { ...credentials }
            })
        }),
    })
});

export const {
    useLoginMutation,
    useCreateAccountMutation
} = authApiSlice
