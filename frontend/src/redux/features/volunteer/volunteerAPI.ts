import { baseApi } from "../../api/baseAPI";


const volunteerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postVolunteer: builder.mutation({
            query: (volunteerInfo) => ({
                url: '/api/v1/create-volunteer',
                method: 'POST',
                body: volunteerInfo,
            }),
            invalidatesTags: ['Volunteer'],
        }),
        getAllVolunteers: builder.query({
            query: () => ({
                url: '/api/v1/volunteers',
                method: 'GET',
            }),
            providesTags: ['Volunteer'],
        }),

    }),
});

export const { usePostVolunteerMutation, useGetAllVolunteersQuery } = volunteerApi;
