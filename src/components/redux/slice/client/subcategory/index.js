import { createApi } from "@reduxjs/toolkit/query/react";
import { api } from "../../../../../Api/api";

export const SubCategoryCrud = createApi({
    reducerPath: "getSubCategorytData",
    baseQuery: api,
    tagTypes: ["getSubCategoryt"],
    endpoints: (build) => ({
        getSubCategory: build.query({
            query: (body) => "sub-categories/",
            providesTags: ["getSubCategoryt"],
        }),
        getSubProductId: build.query({
            query: (body) => ({
                url: `sciences/${body.ID}`,
                method: "POST",
            }),
            invalidatesTags: ["getSubCategoryt"],
        }),

        createSubCategoria: build.mutation({
            query: (body) => ({
                url: 'sub-categories/',
                method: 'POST',
                body,
            }),
            invalidatesTags: ["getSubCategoryt"]
        }),
        updateSubCategorie: build.mutation({
            query: (body) => ({
                url: `sub-categories/${body.get("id")}/`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["getSubCategoryt"],
        }),

        deleteSubCategorie: build.mutation({
            query: (body) => ({
                url: `sub-categories/${body.ID}`,
                method: "DELETE",
                body,
            }),
            invalidatesTags: ["getSubCategoryt"],
        }),
    }),
});

export const {
    useGetSubCategoryQuery,
    useGetSubProductIdQuery,
    useCreateSubCategoriaMutation,
    useDeleteSubCategorieMutation,
    useUpdateSubCategorieMutation,
} = SubCategoryCrud;