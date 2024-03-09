import { createApi } from "@reduxjs/toolkit/query/react";
import { api } from "../../../../Api/api";

export const DiscountCrud = createApi({
    reducerPath: "getDiscountData",
    baseQuery: api,
    tagTypes: ["getDataDiscount"],
    endpoints: (build) => ({
        getDiscount: build.query({
            query: (body) => "discounts/?products=true&category=true&subcategory",
            providesTags: ["getDataDiscount"],
        }),
        getDiscoutTrue: build.query({
            query: (body) => ({
                url: `discounts/?products=true`,
                providesTags: ["getDataDiscount"],

            }),
            invalidatesTags: ["getDataDiscount"],
        }),

        createDiscount: build.mutation({
            query: (body) => ({
                url: 'discounts/',
                method: 'POST',
                body,
            }),
            invalidatesTags: ["getDataDiscount"]
        }),
        updateDiscount: build.mutation({
            query: (body) => ({
                url: `discounts/${body.get("id")}/`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["getDataDiscount"],
        }),

        deleteDiscount: build.mutation({
            query: (body) => ({
                url: `discounts/${body.ID}/`,
                method: "DELETE",
                body,
            }),
            invalidatesTags: ["getDataDiscount"],
        }),
    }),
});

export const {
    useGetDiscountQuery,
    useCreateDiscountMutation,
    useGetDiscoutTrueQuery,
    useDeleteDiscountMutation,
    useUpdateDiscountMutation,
} = DiscountCrud;
