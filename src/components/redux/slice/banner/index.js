import { createApi } from "@reduxjs/toolkit/query/react";
import { api } from "../../../../Api/api";


export const GetBanner = createApi({
    reducerPath: "getBanner",
    baseQuery: api,
    tagTypes: ["baner"],
    endpoints: (build) => ({
        GetBanners: build.query({
            query: (body) => `banners/`,
            method:"GET",
            providesTags: ["baner"],
        }),
        createBanners: build.mutation({
            query: (body) => ({
                url: 'banners/',
                method: 'POST',
                body,
            }),
            invalidatesTags: ["baner"]
        }),
        updateBanners: build.mutation({
            query: (body) => ({
                url: `banners/${body.id}/`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["baner"],
        }),
        deleteBanners: build.mutation({
            query: (body) => ({
                url: `banners/${body.id}/`,
                method: "DELETE",
                body,
            }),
            invalidatesTags: ["baner"],
        }),        
    }),
});

export const {
   useDeleteBannersMutation,
   useGetBannersQuery,
   useCreateBannersMutation,
   useUpdateBannersMutation
} = GetBanner;