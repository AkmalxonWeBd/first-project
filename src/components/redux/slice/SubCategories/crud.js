import { createApi } from '@reduxjs/toolkit/query/react';
import { api } from '../../../../Api/api';



export const SubcategoriesCrud = createApi({
  reducerPath: 'Subcatigories',
  baseQuery: api, // Replace with your actual API base URL
  tagTypes: ['subCategories'],
  endpoints: (builder) => ({
    getSubcatigories: builder.query({
      query: () => 'categories/',
      providesTags: ['subCategories'],
    }),
    createSubCatigories: builder.mutation({
      query: (newCategory) => ({
        url: 'categories/',
        method: 'POST',
        body: newCategory,
      }),
      invalidatesTags: ['subCategories'],
    }),
    updateSubcatigories: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `categories/${id}/`,
        method: 'PATCH',
        body: rest,
      }),
      invalidatesTags: ['subCategories'],
    }),
    deleteSubCatigories: builder.mutation({
      query: (id) => ({
        url: `categories/${id}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['subCategories'],
    }),
  }),
});

export const {
   useGetSubcatigoriesQuery,
   useCreateSubCatigoriesMutation,
   useDeleteSubCatigoriesMutation,
   useUpdateSubcatigoriesMutation,
} = SubcategoriesCrud;
