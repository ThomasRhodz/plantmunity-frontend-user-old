import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi ({
    reducerPath:"postApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://127.0.0.1:8001/api/'}),
    endpoints: (builder) => ({

        addPost: builder.mutation({
            query(body) {
                return {
                    url: 'post',
                    method: 'POST',
                    body,
                };
                   
            }
        })

        
    })
})

export const {useAddPostMutation} = postApi;