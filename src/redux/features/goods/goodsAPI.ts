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
        getSingle: builder.query({
            query: (id) => ({
                url: `/api/v1/relief-goods/${id}`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetALLQuery, useGetTopQuery, useGetSingleQuery } = goodsApi;