import { createApi } from "@reduxjs/toolkit/query/react";
import { api } from "../../../../../Api/api";


export const DeliveriesCrud = createApi({
    reducerPath: "getDeliveriesData",
    baseQuery: api,
    tagTypes: ["deliveries"],
    endpoints: (build) => ({
        getDeliveries: build.query({
            query: (body) => "deliveries/",
            providesTags: ["deliveries"],
        }),
        createDeliveries: build.mutation({
            query: (body) => ({
                url: 'deliveries/',
                method: 'POST',
                body,
            }),
            invalidatesTags: ["deliveries"]
        }),
        updateDeliveries: build.mutation({
            query: (body) => ({
                url: `deliveries/${body.id}/`,
                method: "PATCH",
                body: body.form_data,
            }),
            invalidatesTags: ["deliveries"],
        }),

        deleteDeliveries: build.mutation({
            query: (body) => ({
                url: `deliveries/${body.id}/`,
                method: "DELETE",
                body,
            }),
            invalidatesTags: ["deliveries"],
        }),
    }),
});

export const {
    useGetDeliveriesQuery,
    useCreateDeliveriesMutation,
    useDeleteDeliveriesMutation,
    useUpdateDeliveriesMutation,
} = DeliveriesCrud;
