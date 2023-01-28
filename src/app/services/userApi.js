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
    tagTypes: ['User', 'Search', 'Request'],
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

        addProfile: builder.mutation({
            query(body) {
                return {
                    url:'/profile/upload-image',
                    method:'POST',
                    body,
                };
            },
            invalidatesTags: ['User'],
        }),
        
        
        getClinicInfos: builder.query({
            query(id) {
              return {
                url: `pet-owner/vet-clinics/manage-clinics/my-vet-clinics/enlistment/${id}/vet-clinic-details`,
                method: 'GET',
              };
            },
            transformResponse: (response) => response,
        }),

        getUser: builder.query({
            query() {
              return {
                url: `/profile/user-details`,
                method: 'GET',
              };
            },
            providesTags: ['User'],
            transformResponse: (response) => response,
        }),
        
        updateUser: builder.mutation({
            query(body) {
              return {
                url: `/profile/edit-user-details`,
                method: 'POST',
                body
              };
            },
            invalidatesTags: ['User'],
        }),

        updatePassword: builder.mutation({
            query(body) {
              return {
                url: `profile/change-password`,
                method: 'POST',
                body
              };
            },
            invalidatesTags: ['User'],
        }),

    })
})

export const {
  useAddUserMutation, 
  useAddProfileMutation,
  useGetUserQuery,
  useGetClinicInfosQuery, 
  useLazyGetUserQuery, 
  useUpdateUserMutation, 
  useUpdatePasswordMutation
} = userApi;