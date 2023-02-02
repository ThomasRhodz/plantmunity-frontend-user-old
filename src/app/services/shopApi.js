import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shopApi = createApi({
    reducerPath: 'shopApi',
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
    tagTypes: ['Shop'],
    endpoints(build) {
        return {

            getMyShop: build.query({
                query(body) {
                    return {
                    url: 'user/my-shop/details',
                    method: 'GET',
                    body,
                    };
                },
                providesTags: ['Shop'],
                transformResponse: (response) => response,
            }),

            createShop: build.mutation({
                query(body) {
                    return {
                    url: 'user/create/my-shop',
                    method: 'POST',
                    body,
                    };
                },
                invalidatesTags: ['Shop'],
                transformResponse: (response) => response,
            }),

            updateShop: build.mutation({
                query(body) {
                    const {id, data} = body;
                    return {
                    url: `user/update/my-shop/${id}`,
                    method: 'PATCH',
                    body:data,
                    };
                },
                invalidatesTags: ['Shop'],
                transformResponse: (response) => response,
            }),
        };
    },
  });
  
  export const { useCreateShopMutation, useGetMyShopQuery, useUpdateShopMutation } = shopApi;