import { createApi } from "@reduxjs/toolkit/query/react";
import { api } from "../../../../../Api/api";


export const BasketCrud = createApi({
    reducerPath: "getBasket",
    baseQuery: api,
    tagTypes: ["Basket"],
    endpoints: (build) => ({
        getBasket: build.query({
            query: () => ({
                url: `basket/?products=true&total_price=true`,
                method: "GET",
            }),
            providesTags: ["basket"],
        }),
        getProduct: build.query({
            query: (body) => `products/`,
            providesTags: ["basket"],
        }),

        getSelectUser: build.query({
            query: (body) => `basket/${body.get('userId')}/change_status/`,
            method: "GET",
        }),

        changeStatusId: build.mutation({
            query: (body) => ({
                url: `basket/${body.get('userId')}/change_status/`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["basket"],
        }),
        createBasket: build.mutation({
            query: (body) => ({
                url: `basket/`,
                method: "POST",
                body,
            }),
            invalidatesTags: ["basket"],
        }),

        Increment: build.mutation({
            query: (body) => ({
                url: `basket/${body.get("id")}/`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["basket"],
        }),
        deleteBasket: build.mutation({
            query: (body) => ({
                url: `basket/${body.id}/`,
                method: "DELETE",
                body,
            }),
            invalidatesTags: ["basket"],
        }),

    }),
});

export const {
    useChangeStatusIdMutation,
    useGetSelectUserQuery,
    useIncrementMutation,
    useGetProductQuery,
    useGetBasketQuery,
    useCreateBasketMutation,
    useDeleteBasketMutation,
} = BasketCrud;