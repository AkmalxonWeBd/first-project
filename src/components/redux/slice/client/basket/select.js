import { createApi } from "@reduxjs/toolkit/query/react";
import { api } from "../../../../../Api/api";


export const GetSellct = createApi({
    reducerPath: "GetSelect",
    baseQuery: api,
    tagTypes: ["baner"],
    endpoints: (build) => ({

        getSelectAll: build.query({
            query: (body) => `basket/change_all_status/?status=${body.get('isAllSelected')==false||true}`,
            method: "GET",
            providesTags: ["GetSelect"],

        }),
        getSelectUser: build.query({
            query: (body) => `basket/${body.get('userId')}/change_status/`,
            method: "GET",
        }),

      
    }),
});

export const {
  useGetSelectAllQuery,
  useGetSelectUserQuery,
} = GetSellct;