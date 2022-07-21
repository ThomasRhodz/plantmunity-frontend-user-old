import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const concernApi = createApi ({
    reducerPath:"concernApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://127.0.0.1:8001/api/'}),
    endpoints: (builder) => ({

        addConcern: builder.mutation({
            query(body) {
                return {
                    url: 'concern',
                    method: 'POST',
                    body,
                };
                   
            }
        })

        
    })
})

export const {useAddConcernMutation} = concernApi;