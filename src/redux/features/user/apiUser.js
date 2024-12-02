import {apiSlice} from "../../apiSlice";
import {fetchBaseQuery} from "@reduxjs/toolkit/query";

const baseEndPoint = process.env.NEXT_PUBLIC_API_BASE_URL;
export const apiUsers = apiSlice.injectEndpoints({
    baseEndPoint: fetchBaseQuery({ baseUrl: baseEndPoint }),
    endpoints: (builder) => ({
        user: builder.query({
            query: ({id}) => ({
                url: `${baseEndPoint}/user/${id}`,
                method: 'GET',
            }),
            providesTags: ['user']
        }),
        updateUser: builder.mutation({
            query: ({id, data}) => ({
                url: `${baseEndPoint}/user/${id}`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ["user"],
        }),
    })
});

export const {
    useUserQuery,
    useUpdateUserMutation
} = apiUsers;