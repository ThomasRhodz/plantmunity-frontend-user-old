import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const forumApi = createApi ({
    reducerPath:"forumApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://127.0.0.1:8001/api/'}),
    endpoints: (builder) => ({

        addForum: builder.mutation({
            query(body) {
                return {
                    url: 'forum',
                    method: 'POST',
                    body,
                };
                   
            }
        })

        
    })
})

export const {useAddForumMutation} = forumApi;