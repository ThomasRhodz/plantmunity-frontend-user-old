import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
      //baseUrl: 'http://192.168.110.150:80/api',
      baseUrl: process.env.GATSBY_API_URL,
      prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
    
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
          headers.set('authorization', `Bearer ${token}`)
        }
        else{
          headers.set('Accept', `application/json`)
        }
    
        return headers
      },
    }),
    tagTypes: ['Post'],
    endpoints(build) {
        return {
            addPost: build.mutation({
                query(body) {
                    return {
                    url: 'user/post/',
                    method: 'POST',
                    body,
                    };
                },
                transformResponse: (response) => response,
            }),
        };
    },
  });
  
  export const { useAddPostMutation } = postApi;