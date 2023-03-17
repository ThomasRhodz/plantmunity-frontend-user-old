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
    tagTypes: ['Shop', 'Products', 'ProductVariants', 'FollowingProducts'],
    endpoints(build) {
        return {

            getUserShop: build.query({
                query(id) {
                    return {
                    url: `user/user-shop/${id}/details`,
                    method: 'GET',
                    };
                },
                // providesTags: ['Shop'],
                transformResponse: (response) => response,
            }),
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

            addProduct: build.mutation({
              query(body) {
                  const {id, data} = body;
                  return {
                  url: `user/my-shop/${id}/add-product`,
                  method: 'POST',
                  body:data,
                  };
              },
              invalidatesTags: ['Products'],
              transformResponse: (response) => response,
            }),

            getProducts: build.query({
              query(id) {
                  return {
                  url: `user/my-shop/${id}/products`,
                  method: 'GET',
                  };
              },
              providesTags: ['Products'],
              transformResponse: (response) => response,
            }),

            updateProduct: build.mutation({
                query(body) {
                    const {id, data} = body;
                    return {
                      url: `user/my-shop/update/product/${id}`,
                      method: 'PATCH',
                      body:data,
                    };
                },
                invalidatesTags: ['Products'],
                transformResponse: (response) => response,
            }),

            addProductVariant: build.mutation({
              query(body) {
                  const {id, data} = body;
                  return {
                  url: `user/my-shop/product/${id}/add-variant`,
                  method: 'POST',
                  body:data,
                  };
              },
              invalidatesTags: ['ProductVariants'],
              transformResponse: (response) => response,
            }),

            getProductVariants: build.query({
              query(id) {
                  return {
                  url: `user/my-shop/product/${id}/variant-list`,
                  method: 'GET',
                  };
              },
              providesTags: ['ProductVariants'],
              transformResponse: (response) => response,
            }),
            
            updateProductVariant: build.mutation({
              query(body) {
                const {pid, id, data} = body;
                return { 
                  url: `user/my-shop/product/${pid}/variant/${id}/edit-variant`,
                  method: 'PATCH',
                  body: data,
                };
              },
              invalidatesTags: ['ProductVariants'],
              transformResponse: (response) => response,
            }),

            getFollowingProducts: build.query({
              query() {
                  return {
                  url: `user/following/products`,
                  method: 'GET',
                  };
              },
              providesTags: ['FollowingProducts'],
              transformResponse: (response) => response,
            }),
        };
    },
  });
  
  export const { 
    useCreateShopMutation,
    useUpdateShopMutation,
    useGetMyShopQuery,
    useGetUserShopQuery,

    useAddProductMutation,
    useGetProductsQuery,
    useUpdateProductMutation,
    
    useAddProductVariantMutation,
    useGetProductVariantsQuery, 
    useUpdateProductVariantMutation,

    useGetFollowingProductsQuery
  } = shopApi;