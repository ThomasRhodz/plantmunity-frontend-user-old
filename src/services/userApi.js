import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi ({
    reducerPath:"userApi",
    baseQuery: fetchBaseQuery({baseUrl: 'https://reqres.in/'}),
    endpoints: (builder) => ({
        users: builder.query({
            query: () => `api/users?page=2`
        }),
        user: builder.query({
            query: (id) =>`api/users/${id}`
        })
    })
})

export const {useUsersQuery, useUserQuery} = userApi;