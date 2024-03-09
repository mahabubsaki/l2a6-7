import { baseApi } from "../../api/baseAPI";

const goodsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getALL: builder.query({
            query: () => ({
                url: '/api/v1/relief-goods-all',
                method: 'GET',
            }),
            providesTags: ['allReliefGoods']
        }),
        deleteOne: builder.mutation({
            query: (id) => ({
                url: `/api/v1/relief-goods/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: () => ['allReliefGoods']
        }),
        insertOne: builder.mutation({
            query: (data) => ({
                url: '/api/v1/create-supply',
                method: 'POST',
                body: data
            }),
            invalidatesTags: () => ['allReliefGoods']
        }),
        updateOne: builder.mutation({
            query: ({ _id, ...data }) => {
                return {
                    url: `/api/v1/update-supply/${_id}`,
                    body: data,
                    method: 'PUT'
                };
            },
            invalidatesTags: () => ['allReliefGoods']
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

export const { useGetALLQuery, useGetTopQuery, useGetSingleQuery, useDeleteOneMutation, useInsertOneMutation, useUpdateOneMutation } = goodsApi;