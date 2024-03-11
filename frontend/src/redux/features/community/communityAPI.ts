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
        // register: builder.mutation({
        //     query: (userInfo) => ({
        //         url: '/api/v1/register',
        //         method: 'POST',
        //         body: userInfo,
        //     }),
        // }),

    }),
});

export const { useCreateCommunityMutation } = communityApi;