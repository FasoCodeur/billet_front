import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        credentials: "include",
        prepareHeaders: (headers, { getState }) => {
            console.log(getState())
            // const access_token = getState()?.auth?.token;
            // if (access_token) {
            //     headers.set("Authorization", `Bearer ${access_token}`);
            // }
            // return headers;
        },
    }),
    // tagTypes: [
    //
    //     // "Notifications",
    // ],
    endpoints: (builder) => ({}),
});
