import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const accountApi = createApi ({
    reducerPath:"accountApi",
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
    tagTypes: ['User', 'OtherAccount', 'Search'],
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

        updateContact: builder.mutation({
          query(body) {
            const {id, data} = body;
            return {
              url: `/user/contact-update/${id}`,
              method: 'PATCH',
              body: data
            };
          },
          invalidatesTags: ['User'],
          transformResponse: (response) => response,
        }),

        updateDetail: builder.mutation({
          query(body) {
            const {id, data} = body;
            return {
              url: `/user/detail-update/${id}`,
              method: 'PATCH',
              body: data
            };
          },
          invalidatesTags: ['User'],
          transformResponse: (response) => response,
        }),

        updateProfile: builder.mutation({
          query(body) {
            const {id, data} = body;
            return {
              url: `/user/profile-upload/${id}`,
              method: 'PATCH',
              body: data
            };
          },
          invalidatesTags: ['User'],
          transformResponse: (response) => response,
        }),

        updateCover: builder.mutation({
          query(body) {
            const {id, data} = body;
            return {
              url: `/user/cover-photo-upload/${id}`,
              method: 'PATCH',
              body: data
            };
          },
          invalidatesTags: ['User'],
          transformResponse: (response) => response,
        }),

        updatePass: builder.mutation({
          query(body) {
            return {
              url: `/user/change-password`,
              method: 'PATCH',
              body
            };
          },
          invalidatesTags: ['User'],
          transformResponse: (response) => response,
        }),

        getUserData: builder.query({
          query(id) {
            return {
              url: `view/${id}/user-profile`,
              method: 'GET',
            };
          },
          providesTags: ['OtherAccount'],
          transformResponse: (response) => response,
        }),

        getUsers: builder.query({
          query(searchTerm) {
            return {
              url: `user/search-accounts/${searchTerm}`,
              method: 'GET',
            };
          },
          providesTags: ['Search'],
          transformResponse: (response) => response,
        }),


    })
})

export const {
  useAddUserMutation,
  useGetUserQuery,
  useLazyGetUserQuery, 
  useUpdateContactMutation,
  useUpdateDetailMutation,
  useUpdateProfileMutation,
  useUpdateCoverMutation,
  useUpdatePassMutation,
  useGetUserDataQuery,
  useGetUsersQuery,
} = accountApi;