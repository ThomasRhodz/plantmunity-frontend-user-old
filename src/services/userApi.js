import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi ({
    reducerPath:"userApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:8000/api/'}),
    endpoints: (builder) => ({
        // users: builder.query({
        //     query: () => `api/users?page=2`
        // }),
        // user: builder.query({
        //     query: (id) =>`api/users/${id}`
        // }),
        addUser: builder.mutation({
            query(body) {
                return {
                    url: 'register',
                    method: 'POST',
                    body,
                };
                   
            }
        })
    })
})

export const {useUsersQuery, useUserQuery, useAddUserMutation} = userApi;