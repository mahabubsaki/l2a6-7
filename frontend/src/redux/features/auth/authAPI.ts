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
        userById: builder.query({
            query: (id) => {
                return {
                    url: `/api/v1/user-by-id/${id}`,
                    method: 'GET',
                };
            },
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

export const { useLoginMutation, useRegisterMutation, useUserByIdQuery } = authApi;