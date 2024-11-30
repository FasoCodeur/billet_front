"use client"
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {logOut, setCredentials} from "@/redux/features/auth/authSlice";
import TokenService from "@/utils/TokenService";


const apiLink =process.env.NEXT_PUBLIC_API_BASE_URL + '/'
const baseQuery = fetchBaseQuery({
    baseUrl:apiLink,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {

        const token = getState()?.auth?.token;
        const tokenExpired = TokenService.isAccessExpired();

        if (token) {
            if (!tokenExpired) {
                headers.set("authorization", `Bearer ${token.accessToken}`);
            } else {
                headers.set("authorization", `Bearer ${token.accessToken}`);
                headers.set("x-refresh", `${token.refreshToken}`);
            }
        }

        return headers;
    }
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    // Perform the initial query
    let result = await baseQuery(args, api, extraOptions);

    // Handle token expiration (403 error)
    if (result?.error?.originalStatus === 403) {
        console.log('sending refresh token');

        // Send refresh token to get a new access token
        const refreshResult = await baseQuery('auth/refresh', api, extraOptions);
        console.log("refres si exipred",refreshResult);

        if (refreshResult.data) {
            const user = api.getState()?.auth?.user; // safely check user
            // console.log(user);

            // Store the new token
            api.dispatch(setCredentials({ response: refreshResult.data }));

            // Retry the original query with new access token
            result = await baseQuery(args, api, extraOptions);
        } else {
            // If refresh failed, log out the user
            api.dispatch(logOut());
        }
    }

    return result;
};

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    tagTypes:[
        "company",
        "bus",
        "traject",
        "user",
    ],
    endpoints: () => ({}),
});
