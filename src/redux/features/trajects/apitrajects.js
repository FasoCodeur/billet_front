import {apiSlice} from "../../apiSlice";
const baseEndPoint = process.env.NEXT_PUBLIC_API_BASE_URL;

export const apiTraject = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postTrajet: builder.mutation({
            query: (data) =>
                ({
                    url: `${baseEndPoint}/trajet`,
                    method: "POST",
                    body: data,
                }),
            invalidatesTags: ["trajet"],
        }),

        getTrajets: builder.query({
            query: ({ page = 1, limit = 10, name, status }) =>
                `${baseEndPoint}/trajet?limit=${limit}&page=${page}&name=${name}&status=${status}`,
            // providesTags: ["product"],
        }),

        getTrajetById: builder.query({
            query: ({ id }) =>
                `${baseEndPoint}/trajet/${id}`,
            // providesTags: ["product"],
        }),

        updateTrajet: builder.mutation({
            query: (id, data) => ({
                url: `${baseEndPoint}/trajet/${id}`,
                method: "PATCH",
                body:data
            }),
            // invalidatesTags: ["Categories"],
        }),

        deleteTrajet: builder.mutation({
            query: (id) => ({
                url: `${baseEndPoint}/trajet/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["trajet"],
        }),

        changeTrajet: builder.mutation({
            query: (id) => ({
                url: `${baseEndPoint}/trajet/change_status/${id}`,
                method: "PATCH",
            }),
            invalidatesTags: ["trajet"],
        }),

    }),

})

export const {
    usePostTrajetMutation,
    useGetTrajectsQuery,
    useGetTrajetByIdQuery,
    useUpdateCompaniesMutation,
    useDeleteTrajetMutation,
    useChangeTrajetMutation
} =apiTrajet;