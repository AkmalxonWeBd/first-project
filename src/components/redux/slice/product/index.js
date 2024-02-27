// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api } from '../../../../Api/api';

export const ProductCrud = createApi({
    reducerPath: "getProductData",
    baseQuery: api,
    tagTypes: ["Product"],
    endpoints: (build) => ({
      getProduct: build.query({
        query: (body) => `products/?images=true`,
        providesTags: ["Product"],
      }),
      getProductCatgori: build.query({
        query: () => `products/?images=true`,
        providesTags: ["Product"],
      }),
  
      getProductId: build.query({
        query: (body) => ({
          url: `products/${body.id}/?images=true&category=true`,
          method: "GET",
        }),
        invalidatesTags: ["Product"],
      }),
      updateProduct: build.mutation({
        query: (body) => ({
          url: `products/${body.get("id")}/`,
          method: "PATCH",
          body,
        }),
        invalidatesTags: ["Product"],
      }),
      createProduct: build.mutation({
        query: (body) => ({
          url: `products/`,
          method: "POST",
          body,
        }),
        invalidatesTags: ["Product"],
      }),
      createProductIdimg: build.mutation({
        query: (body) => ({
          url: `product-images/`,
          method: "POST",
          body,
        }),
        invalidatesTags: ["Product"],
      }),
      deleteProduct: build.mutation({
        query: (body) => ({
          url: `products/${body.id}/`,
          method: "DELETE",
          body,
        }),
        invalidatesTags: ["Product"],
      }),
      deleteProductImg: build.mutation({
        query: (body) => ({
          url: `product-images/${body.object}/`,
          method: "DELETE",
          body,
        }),
        invalidatesTags: ["Product"],
      }),
    }),
  });

export const {
    useDeleteProductImgMutation,
    useGetProductQuery,
    useGetProductIdQuery,
    useCreateProductIdimgMutation,
    useGetProductCatgoriQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = ProductCrud;