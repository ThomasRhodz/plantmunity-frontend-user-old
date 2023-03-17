import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const transactionApi = createApi({
  reducerPath: "transactionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.GATSBY_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      } else {
        headers.set("Accept", `application/json`);
      }

      return headers;
    },
  }),
  tagTypes: ["Orders", "TradeOffer", "PreOrders"],
  endpoints(build) {
    return {

      addTrade: build.mutation({
        query(body) {
          return {
            url: "user/transaction/add-trade-offer",
            method: "POST",
            body,
          };
        },
        invalidatesTags: ["TradeOffer"],
        transformResponse: (response) => response,
      }),

      addOrder: build.mutation({
        query(body) {
          return {
            url: "user/transaction/add-order",
            method: "POST",
            body,
          };
        },
        invalidatesTags: ["Orders"],
        transformResponse: (response) => response,
      }),

      updateOrder: build.mutation({
        query(body) {
          const {id, data} = body;
          return {
            url:`user/transaction/order/${id}`,
            method: "PATCH",
            body: data,
          };
        },
        invalidatesTags: ["PreOrders", "Orders"],
        transformResponse: (response) => response,
      }),

      getShopPreOrders: build.query({
        query(id) {
          return {
            url:`shop/${id}/pre-orders`,
            method: "GET",
          };
        },
        providesTags: ["PreOrders"],
        transformResponse: (response) => response,
      }),

      getShopOrders: build.query({
        query(id) {
          return {
            url:`shop/${id}/orders`,
            method: "GET",
          };
        },
        providesTags: ["Orders"],
        transformResponse: (response) => response,
      }),

      getTradeOffers: build.query({
        query(id) {
          return {
            url:`shop/${id}/trade-offers`,
            method: "GET",
          };
        },
        providesTags: ["TradeOffer"],
        transformResponse: (response) => response,
      }),
      
    };
  },
});

export const {
  useAddOrderMutation,
  useUpdateOrderMutation,
  useGetShopPreOrdersQuery,
  useGetShopOrdersQuery,

  useAddTradeMutation,
  useGetTradeOffersQuery
  
} = transactionApi;
