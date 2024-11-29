import {apiSlice} from "../../apiSlice";
const baseEndPoint = process.env.NEXT_PUBLIC_API_BASE_URL;

export const apiCompany = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postCompany: builder.mutation({
            query: (data) =>
                ({
                url: `${baseEndPoint}/company`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["company"],
        }),

        getCompanies: builder.query({
            query: ({ page = 1, limit = 10, name, status }) =>
                `${baseEndPoint}/company?limit=${limit}&page=${page}&name=${name}&status=${status}`,
            // providesTags: ["product"],
        }),

        getCompanyById: builder.query({
            query: ({ id }) =>
                `${baseEndPoint}/company/${id}`,
            // providesTags: ["product"],
        }),

        updateCompany: builder.mutation({
            query: (id, data) => ({
                url: `${baseEndPoint}/company/${id}`,
                method: "PATCH",
                body:data
            }),
            // invalidatesTags: ["Categories"],
        }),

        deleteCompany: builder.mutation({
            query: (id) => ({
                url: `${baseEndPoint}/company/${id}`,
                method: "DELETE",
            }),
            // invalidatesTags: ["company"],
        }),

        changeCompany: builder.mutation({
            query: (id) => ({
                url: `${baseEndPoint}/company/change_status/${id}`,
                method: "PATCH",
            }),
            // invalidatesTags: ["Categories"],
        }),

    }),

})

export const {
    usePostCompanyMutation,
    useGetCompaniesQuery,
    useGetCompanyByIdQuery,
    useUpdateCompaniesMutation,
    useDeleteCompanyMutation,
    useChangeCompanyMutation
} =apiCompany;