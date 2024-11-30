import {apiSlice} from "@/redux/apiSlice";

const baseEndPoint = process.env.NEXT_PUBLIC_API_BASE_URL;

export const apiBus = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postBus: builder.mutation({
            query: (data) =>
                ({
                    url: `${baseEndPoint}/bus`,
                    method: "POST",
                    body: data,
                }),
            invalidatesTags: ["bus"],
        }),

        getAllBus: builder.query({
            query: ({ page = 1, limit = 10, matricule }) =>
                `${baseEndPoint}/bus?limit=${limit}&page=${page}&matricule=${matricule}`,
            invalidatesTags: ["bus"],
        }),

        getBusById: builder.query({
            query: ({ id }) =>
                `${baseEndPoint}/bus/${id}`,
            invalidatesTags: ["bus"],
        }),

        updateBus: builder.mutation({
            query: (id, data) => ({
                url: `${baseEndPoint}/bus/${id}`,
                method: "PATCH",
                body:data
            }),
            invalidatesTags: ["bus"],
        }),

        deleteBus: builder.mutation({
            query: (id) => ({
                url: `${baseEndPoint}/bus/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["bus"],
        }),

        changeBus: builder.mutation({
            query: (id) => ({
                url: `${baseEndPoint}/bus/change_status/${id}`,
                method: "PATCH",
            }),
            invalidatesTags: ["bus"],
        }),

        getBusByCompanyId: builder.query({
            query: ({ page = 1, limit = 10, company_id, matricule }) => ({
                url:`${baseEndPoint}/bus/get_bus/by_company_id?limit=${limit}&page=${page}&company_id=${company_id}&matricule=${matricule}`,
                method: 'Get',
            }),
            invalidatesTags: ["bus"],
        }),

    }),

})

export const {
    usePostBusMutation,
    useGetAllBusQuery,
    useGetBusByIdQuery,
    useUpdateCompaniesMutation,
    useDeleteBusMutation,
    useChangeBusMutation,
    useGetBusByCompanyIdQuery
} =apiBus;