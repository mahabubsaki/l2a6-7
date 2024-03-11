import { baseApi } from "../../api/baseAPI";


const communityApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createCommunity: builder.mutation({
            query: (communityInfo) => ({
                url: '/api/v1/create-community',
                method: 'POST',
                body: communityInfo,
            }),
            invalidatesTags: ['Community'],
        }),
        getAllComunity: builder.query({
            query: () => ({
                url: '/api/v1/community-all',
                method: 'GET',
            }),
            providesTags: ['Community'],
        }),
        getSingleCommunity: builder.query({
            query: (id) => ({
                url: `/api/v1/community/${id}`,
                method: 'GET',
            }),
        }),
        postComment: builder.mutation({
            query: (comment) => ({
                url: '/api/v1/create-comment',
                method: 'POST',
                body: comment,
            }),
        }),

    }),
});

export const { useCreateCommunityMutation, useGetAllComunityQuery, useGetSingleCommunityQuery, usePostCommentMutation } = communityApi;