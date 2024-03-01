import { createApi } from "@reduxjs/toolkit/query/react";
import { api } from "../../../../Api/api.js";

export const CategoryCrud = createApi({
  reducerPath: "getCategorytData",
  baseQuery: api,
  tagTypes: ["getCategoryt"],
  endpoints: (build) => ({
    getCategory: build.query({
      query: (body) => "categories/",
      providesTags: ["getCategoryt"],
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

