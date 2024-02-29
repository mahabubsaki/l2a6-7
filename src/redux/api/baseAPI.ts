import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://aidpulse-backend.vercel.app/' }),
    endpoints: () => ({}),
    tagTypes: ['allReliefGoods']
});