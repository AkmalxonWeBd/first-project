// api.js
import { createApi} from '@reduxjs/toolkit/query/react';
import { api } from '../../../../Api/api';


 
export const OrderCrud = createApi({
    baseQuery:api,
    reducerPath: 'OrderData',
    tagTypes: ['Orderdata'],
    endpoints: (builder) => ({
        getOrder: builder.query({
            query: () => 'orders/',
            providesTags: ['Order'],
        }),
        createFamous: builder.mutation({
            query: (body) => ({
                url: `products/`,
                method: "POST",
                body,
            }),
            invalidatesTags: ['Order'],
        }),
        deleteFamous: builder.mutation({
            query: (body) => ({
                url: `products/body.id}`,
                method: 'DELETE',
                body,
            }),
            invalidatesTags: ['Order']
        }),
    }),
});

export const {
    useGetOrderQuery,
    useDeleteFamousMutation,
    useCretteFamousMutation,
} = OrderCrud;