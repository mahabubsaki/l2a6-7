import { baseApi } from "../../api/baseAPI";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/api/v1/login',
                method: 'POST',
                body: userInfo,
            }),
        }),
        register: builder.mutation({
            query: (userInfo) => ({
                url: '/api/v1/register',
                method: 'POST',
                body: userInfo,
            }),
        }),

    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;