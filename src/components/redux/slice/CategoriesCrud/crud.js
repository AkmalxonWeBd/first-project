import { createApi } from "@reduxjs/toolkit/query/react";
import { api } from "../../../../Api/api.js";

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: api, // Replace with your actual API base URL
  tagTypes: ['Category'],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'categories/',
      providesTags: ['Category'],
    }),
    getProductId: build.query({
      query: (body) => ({
        url: `categories/${body.id}/get_products/?category=true`,
        method: "GET",
      }),
      invalidatesTags: ["getCategoryt"],
    }),

    createCategoria: build.mutation({
      query: (body) => ({
        url: 'categories/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ["getCategoryt"]
    }),
    updateCategorie: build.mutation({
      query: (body) => ({
        url: `categories/${body.get("id")}/`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["getCategoryt"],
    }),

    deleteCategorie: build.mutation({
      query: (body) => ({
        url: `categories/${body.id}/`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["getCategoryt"],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetProductIdQuery,
  useCreateCategoriaMutation,
  useDeleteCategorieMutation,
  useUpdateCategorieMutation,
} = CategoryCrud;

