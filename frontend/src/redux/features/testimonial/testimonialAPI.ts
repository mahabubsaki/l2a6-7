import { baseApi } from "../../api/baseAPI";


const testimonialApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postTestimonial: builder.mutation({
            query: (testimonial) => ({
                url: '/api/v1/create-testimonial',
                method: 'POST',
                body: testimonial,
            }),
            invalidatesTags: ['testimonials'],
        }),
        getAllTestimonial: builder.query({
            query: () => ({
                url: '/api/v1/testimonials',
                method: 'GET',
            }),
            providesTags: ['testimonials'],
        }),

    }),
});

export const { usePostTestimonialMutation, useGetAllTestimonialQuery } = testimonialApi;