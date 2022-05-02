import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { ITag } from "models/ITag"


export const tagAPI = createApi({
    reducerPath: 'tagAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['Tag'],
    endpoints: (build) => ({
        fetchAllTags: build.query<ITag[], any>({
            query: () => ({
                url: '/tags'
            }),
            providesTags: result => ['Tag']
        }),
        createTag: build.mutation<ITag, ITag>({
            query: (tag) => ({
                url: '/tags',
                method: 'POST',
                body: tag
            }),
            invalidatesTags: ['Tag']
        }),
        updateTag: build.mutation<ITag, ITag>({
            query: (tag) => ({
                url: `/tags/${tag.id}`,
                method: 'PUT',
                body: tag
            }),
            invalidatesTags: ['Tag']
        }),
        removeTag: build.mutation<ITag, ITag>({
            query: (tag) => ({
                url: `/tags/${tag.id}`,
                method: 'DELETE',
                body: tag
            }),
            invalidatesTags: ['Tag']
        }),
    })
})