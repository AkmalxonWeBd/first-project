// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api } from '../../../../Api/api';



export const ProductCrud = createApi({
    baseQuery:api,
    reducerPath: 'ProductData',
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products/',
            providesTags: ['Product'],
        }),
        createProduct: builder.mutation({
            query: (body) => ({
                url: `products/`,
                method: "POST",
                body,
            }),
            invalidatesTags: ['Product'],
        }),
        deleteProduct: builder.mutation({
            query: (body) => ({
                url: `products/${body.id}`,
                method: 'DELETE',
                body,
            }),
            invalidatesTags: ['Product']
        }),
        updateProduct: builder.mutation({
            query: (body) => ({
                url:`products/${body.get("id")}/`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ['Product'],
        }),
    }),
});

export const {
    useGetProductsQuery,
    useCreateProductMutation,
    useDeleteProductMutation,
    useUpdateProductMutation,
} = ProductCrud;