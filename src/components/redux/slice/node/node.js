import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api, apiUrl } from '../../../../Api/api';

export const NodeCrud = createApi({
  reducerPath: 'nodeApi',
  baseQuery: api, // Replace with your actual API base URL
  tagTypes: ['Node'],
  endpoints: (builder) => ({
    getNode: builder.query({
      query: () => 'finance_orders/',
      providesTags: ['Node'],
    }),
    createNode: builder.mutation({
      query: (newNode) => ({
        url: 'finance_orders/',
        method: 'POST',
        body: newNode,
      }),
      invalidatesTags: ['Node'],
    }),
    updateNode: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `finance_products/${id}/`,
        method: 'PATCH',
        body: rest,
      }),
      invalidatesTags: ['Node'],
    }),
    deleteNode: builder.mutation({
      query: (id) => ({
        url: `finance_products/${id}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Node'],
    }),
  }),
});

export const {
  useGetNodeQuery,
  useCreateNodeMutation,
  useDeleteNodeMutation,
  useUpdateNodeMutation,
} = NodeCrud;