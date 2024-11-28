"use client"
import {apiSlice} from "../../apiSlice";
import {fetchBaseQuery} from "@reduxjs/toolkit/query";
const baseEndPoint = process.env.NEXT_PUBLIC_API_BASE_URL;

export const authApiSlice = apiSlice.injectEndpoints({
    baseEndPoint: fetchBaseQuery({ baseUrl: baseEndPoint }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body:body
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
