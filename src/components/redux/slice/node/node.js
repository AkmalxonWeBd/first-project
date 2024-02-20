import { createApi } from "@reduxjs/toolkit/query/react";
import { api } from "../../../../Api/api";

export const NoteCrud = createApi({
  reducerPath: "getNotetData",
  baseQuery: api,
  tagTypes: ["Note"],
  endpoints: (build) => ({
    getNote: build.query({
      query: (body) =>
        "finance_orders/?products=true",
      method: "GET",
      providesTags: ["Note"],
    }),

    createNote: build.mutation({
      query: (body) => ({
        url: "finance_orders/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Note"],
    }),

    updateNote: build.mutation({
      query: (body) => ({
        url: `finance_orders/${body.get("id")}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Note"],
    }),

    deleteNote: build.mutation({
      query: (body) => ({
        url: `finance_orders/${body.id}`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["Note"],
    }),
  }),
});

export const {
  useCreateNoteMutation,
  useDeleteNoteMutation,
  useGetNoteQuery,
  useUpdateNoteMutation,
} = NoteCrud;