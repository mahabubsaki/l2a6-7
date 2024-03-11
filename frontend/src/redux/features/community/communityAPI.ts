import { baseApi } from "../../api/baseAPI";


const communityApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createCommunity: builder.mutation({
            query: (communityInfo) => ({
                url: '/api/v1/create-community',
                method: 'POST',
                body: communityInfo,
            }),
        }),
        getAllComunity: builder.query({
            query: () => ({
                url: '/api/v1/community-all',
                method: 'GET',
            }),
        }),
        getSingleCommunity: builder.query({
            query: (id) => ({
                url: `/api/v1/community/${id}`,
                method: 'GET',
            }),
        }),

    }),
});

export const { useCreateCommunityMutation, useGetAllComunityQuery, useGetSingleCommunityQuery } = communityApi;