import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi ({
    reducerPath:"userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.GATSBY_API_URL,
        prepareHeaders: (headers, { getState }) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = getState().auth.token;
            if (token) {
              //console.log('token', token);
              headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        addUser: builder.mutation({
            query(body) {
                return {
                    url: 'register/',
                    method: 'POST',
                    body,
                };   
            },
            invalidatesTags: ['User'],
        }),

        getUser: builder.query({
            query() {
              return {
                url: `/user-data`,
                method: 'GET',
              };
            },
            providesTags: ['User'],
            transformResponse: (response) => response,
        }),

    })
})

export const {
  useAddUserMutation,
  useGetUserQuery,
  useLazyGetUserQuery, 
} = userApi;