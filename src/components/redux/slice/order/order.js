import { createApi } from "@reduxjs/toolkit/query/react";
import { api } from "../../../../Api/api.js";

export const OrderCrud = createApi({
  reducerPath: "getOrdertData",
  baseQuery: api,
  tagTypes: ["Order"],
  endpoints: (build) => ({
    getOrder: build.query({
      query: (body) =>
        "orders/?location=true&each_products=true&delivery=true&user=true&product=true&images=true",
      method: "OPTIONS",
      providesTags: ["Order"],
    }),

    orderCreate: build.mutation({
      query: (body) => ({
        url: "orders/checkout/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Order"],
    }),
    updateOrder: build.mutation({
      query: (body) => ({
        url: `orders/${body.get("id")}/change_delivery_status/`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Order"],
    }),
    deleteOrder: build.mutation({
      query: (body) => ({
        url: `orders/${body.id}/`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useGetOrderQuery,
  useOrderCreateMutation,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} = OrderCrud;