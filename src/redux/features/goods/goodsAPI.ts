import { baseApi } from "../../api/baseAPI";

const goodsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getALL: builder.query({
            query: () => ({
                url: '/api/v1/relief-goods-all',
                method: 'GET',
            }),
        }),
        getTop: builder.query({
            query: () => ({
                url: '/api/v1/relief-goods-top',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetALLQuery, useGetTopQuery } = goodsApi;